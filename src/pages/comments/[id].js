import { useRouter } from "next/router";
import { useGetPostAndComments } from "../../hooks";
import Post from "../../components/post";
import Loading from "../../components/loading";
import AddComment from "../../components/comment";

const Comment = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, comments] = useGetPostAndComments(id);
  return (
    <div>
      {post ? (
        <div>
          <Post post={post} />
          <AddComment comments={comments} post={post}/>
        </div>
      ) : (
        <Loading />
      )}
      {/* {post ? console.log(post, comments) : ""} */}
    </div>
  );
};
export default Comment;
