import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicDocument } from "../types";
import { Link } from "@/i18n/routing";

/**
 * Props for `PostList`.
 */
export type PostListProps = SliceComponentProps<Content.PostListSlice>;

/**
 * Component for "PostList" Slices.
 */
const PostList = ({ slice }: PostListProps) => {
  if(!slice.primary.display){
    return <></>
  }
  
  const posts  = () => {
    if(slice.primary.posts.length == 0){
      return <div>There is no post to list</div>
    }
    return (<div>{slice.primary.posts.filter((post)=>!(post.post as PrismicDocument).isBroken).map((post, i)=>{
      const data = post.post as PrismicDocument;
      console.log(data)
      return (<div key={i}>
        {i+1}{') '}<Link href={data.url} locale={data.lang}>{data.uid}</Link>
      </div>)
    })}</div>)
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div>{slice.primary.title} ({slice.primary.posts.length})</div>
      {posts()}
    </section>
  );
};

export default PostList;
