import { useState, useEffect } from "react";
import { getPosts } from "../firestoreapi/functios";
import Post from './post'

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then(posts => setPosts(posts));
  }, []);

  if (posts.length < 1) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }
  return (
  <React.Fragment>
      {posts.map((doc, index) => <Post post={doc} key={index}/>)}
  </React.Fragment>)
};
export default Posts;
