import Post from './post'
import { useLoading, useGetPosts } from "../hooks";
import AddPost from './addpost';

const Posts = () => {
  const [posts, setPosts] = useGetPosts()
  const loading = useLoading()

  if (posts.length < 1) {
    return (
      <div>
        <h1>{loading}</h1>
        <style jsx>
          {
            `
            h1 {
              width: 50%;
              text-align: center;
            }
            `
          }
        </style>
      </div>
    );
  }
  return (
  <React.Fragment>
      <AddPost handlePosts={setPosts}/>
      {posts.map((doc, index) => <Post post={doc} key={index}/>)}
  </React.Fragment>)
};
export default Posts;
