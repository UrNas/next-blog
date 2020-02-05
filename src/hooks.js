import { useEffect, useState } from "react";
import { firestore } from "./config_firebase";


const useLoading = () => {
  const [loading, setLoading] = useState("Loading");
  useEffect(() => {
    const id = window.setInterval(() => {
      setLoading(l => (l === "Loading..." ? "Loading" : l + "."));
    }, 200);
    return () => clearInterval(id);
  }, []);
  return loading;
};


const useGetPosts = () => {
  const [posts, setPosts] = useState(['loading']);
  useEffect(() => {
    const unsubscribe = firestore.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs)
    })
    return unsubscribe
  }, []);
  return posts;
};
export { useLoading, useGetPosts };
