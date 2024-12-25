import { GITHUB_GRAPHQL_API_URL } from '../config';
import { GComment, GCreateDiscussionInput } from '../types';

const CREATE_DISCUSSION_QUERY = `
  mutation($input: CreateDiscussionInput!) {
    createDiscussion(input: $input) {
      discussion {
        id
      }
    }
  }`;

export interface CreateDiscussionBody {
  input: GCreateDiscussionInput;
}

export interface CreateDiscussionResponse {
  data: {
    createDiscussion: {
      discussion: {
        id: string;
      };
    };
  };
}

export async function createDiscussion(
  token: string,
  params: CreateDiscussionBody,
): Promise<CreateDiscussionResponse> {
  return fetch(GITHUB_GRAPHQL_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: CREATE_DISCUSSION_QUERY,
      variables: params,
    }),
  }).then((r) => r.json());
}

const ADD_DISCUSSION_COMMENT_QUERY = `
  mutation($body: String!, $discussionId: ID!) {
    addDiscussionComment(input: {body: $body, discussionId: $discussionId}) {
      comment {
        id
        upvoteCount
        viewerHasUpvoted
        viewerCanUpvote
        author {
          avatarUrl
          login
          url
        }
        viewerDidAuthor
        createdAt
        url
        authorAssociation
        lastEditedAt
        deletedAt
        isMinimized
        bodyHTML
        reactionGroups {
          content
          users {
            totalCount
          }
          viewerHasReacted
        }
        replies(first: 100) {
          totalCount
          nodes {
            id
            author {
              avatarUrl
              login
              url
            }
            createdAt
            url
            authorAssociation
            lastEditedAt
            deletedAt
            isMinimized
            bodyHTML
            reactionGroups {
              content
              users {
                totalCount
              }
              viewerHasReacted
            }
          }
        }
      }
    }
  }`;

export interface AddDiscussionCommentBody {
  body: string;
  discussionId: string;
}

export interface AddDiscussionCommentResponse {
  data: {
    addDiscussionComment: {
      comment: GComment;
    };
  };
}

export async function addDiscussionComment(
  params: AddDiscussionCommentBody,
  token: string,
): Promise<AddDiscussionCommentResponse> {
  return fetch(GITHUB_GRAPHQL_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: ADD_DISCUSSION_COMMENT_QUERY,
      variables: params,
    }),
  }).then((r) => r.json());
}