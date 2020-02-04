import { useEffect, useState } from "react";
import { getPosts } from "./firestoreapi/functios";


const useLoading = () => {
  const [loading, setLoading] = useState("Loading");
  useEffect(() => {
    const id = window.setInterval(() => {
      setLoading(l => (l === "Loading..." ? "Loading" : l + "."));
    }, 200);
    return () => clearInterval(id);
  });
  return loading;
};


const useGetPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    let isCurrent = true;
    getPosts().then(posts => {
      if (isCurrent) setPosts(posts);
    });
    return () => (isCurrent = false);
  }, []);
  return [posts, setPosts];
};
export { useLoading, useGetPosts };
