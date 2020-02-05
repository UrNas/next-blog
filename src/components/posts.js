import Post from './post'
import AddPost from './addpost';
import Loading from './loading';
import { useGetPosts } from "../hooks";

const Posts = () => {
  const posts = useGetPosts()
  if (posts[0] === 'loading') {
    return <Loading />
  }
  return (
    <div>
      <AddPost />
      {posts.map((doc, index) => <Post post={doc} key={index} />)}
    </div>)

};
export default Posts;
