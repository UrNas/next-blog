import { useState, useEffect } from "react";
import { getPosts } from "../firestoreapi/functios";
import Post from './post'
import { useLoading } from "../hooks";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const loading = useLoading()
  useEffect(() => {
    getPosts().then(posts => setPosts(posts));
  }, []);

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
      {posts.map((doc, index) => <Post post={doc} key={index}/>)}
  </React.Fragment>)
};
export default Posts;
