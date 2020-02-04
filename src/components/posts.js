import Post from './post'
import AddPost from './addpost';
import Loading from './loading';
import { useGetPosts } from "../hooks";

const Posts = () => {
  const [posts, setPosts] = useGetPosts()
  if (posts[0] === 'loading') {
    return <Loading />
  }
  return (
    <div>
      <AddPost handlePosts={setPosts}/>
      {posts.map((doc, index) => <Post post={doc} key={index} handlePosts={setPosts}/>)}
    </div>)

};
export default Posts;
