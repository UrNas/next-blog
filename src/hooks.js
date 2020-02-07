import { useEffect, useState } from "react";
import firebase, { firestore } from "./config_firebase";



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

const useAuth = () => {
  const [user, setUser] = useState(null)
  useEffect(()=> {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setUser(user)
    })
    return unsubscribe
  }, [])
  return user
}
export { useLoading, useGetPosts, useAuth };
