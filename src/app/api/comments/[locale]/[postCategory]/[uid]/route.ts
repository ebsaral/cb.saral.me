import axios from 'axios';
import { NextRequest } from 'next/server';

import { createClient } from '@/prismicio';
import { DISCUSSION_CATEGORY_ID, DISCUSSIONS_REPO_ID, GITHUB_READ_ONLY_API_TOKEN, GITHUB_WRITE_API_TOKEN } from '@/server/github/config'
import { addDiscussionComment, createDiscussion } from '@/server/github/discussions/create';
import { getDiscussion, SearchResponse } from '@/server/github/discussions/get'
import { PostDocument } from '../../../../../../../prismicio-types';
import { revalidatePath } from 'next/cache';


const secretKey = process.env.CAPTCHA_SECRET_KEY || ""

const verifyCaptcha = async (token: string) => {    
    const response = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
    );

    if (response.data.success) {
        return true
    }
    return false
}

const getDiscussions = async (term: string) => {
    const listDiscussionParams = {
        repo: "ebsaral/cb.saral.me-discussions",
        term,
        number: 0,
        category: '',
        strict: false,
        first: 100
    }

    return await getDiscussion(listDiscussionParams, GITHUB_READ_ONLY_API_TOKEN) as SearchResponse
}

const getTerm = (page: PostDocument<string>, locale: string, uid: string): string => {
    return `Comment in ${locale} #${uid}: ${page.data.meta_title}`
}

const getOrCreateDiscussion = async (locale:string, uid:string): Promise<string> => {
    const client = createClient();
    const page = await client.getByUID("post", uid, {lang: locale})
    const term = getTerm(page, locale, uid)

    const discussions = await getDiscussions(term);
    let discussionId = "";
    if(discussions.data.search.discussionCount == 0){
        // Discussion does not exist
        const createDiscussionParams = {
            repositoryId: DISCUSSIONS_REPO_ID,
            categoryId: DISCUSSION_CATEGORY_ID,
            title: term,
            body: `Initiated via api ${uid}`
        }
    
        const discussion = await createDiscussion(GITHUB_WRITE_API_TOKEN, {input: createDiscussionParams})
        discussionId = discussion.data.createDiscussion.discussion.id;
    }
    else {
        discussionId = discussions.data.search.nodes[0].id;
    }
    return discussionId
}


export async function GET(req: NextRequest,  { params }: { params: Promise<{ locale: string, postCategory: string, uid: string }> }) {
    // List comments
    const { locale, uid } = await params;
    
    const client = createClient();
    const page = await client.getByUID("post", uid, {lang: locale})
    const term = getTerm(page, locale, uid)
    const discussions = await getDiscussions(term);
    
    if(discussions.data.search.discussionCount > 0){
        const comments = discussions.data.search.nodes[0].comments;
        return Response.json({uid, locale, comments: {totalCount: comments.totalCount, nodes: comments.nodes} })
    }
    else {
        return Response.json({uid, locale, comments: {totalCount: 0, nodes: []}})
    }
}

export async function POST(req: NextRequest,  { params }: { params: Promise<{ locale: string, postCategory: string, uid: string }> }) {
    // Create comment
    // --data {message: string}

    const { locale, postCategory, uid } = await params;
    const data = await req.json()

    try {
        const verified = await verifyCaptcha(data.token)
        if(!verified) {
            return Response.json({status: 405, message: "Captcha error"})
        }
        const comment = await addDiscussionComment({
            body: data.message,
            discussionId: await getOrCreateDiscussion(locale, uid)
        }, GITHUB_WRITE_API_TOKEN)
        revalidatePath(`/${locale}/${postCategory}/{uid}`, 'page')
        return Response.json({uid: uid, locale:locale, comment: comment.data.addDiscussionComment.comment})
    }
    catch {
        return Response.json({status: 500, message: "Error"})
    }
}