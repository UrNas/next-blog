import { useEffect, useState } from "react";
import firebase, { firestore } from "./config_firebase";
import { craeteUserProfile } from "./firestoreapi/functios";


// hook to handle loading page 
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

// hook to handle evnet in database 'posts' and triger if there is any update or add.
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

// hook to handle application auth enent and triger in sign in or sign out.
// and create new user profile if is not exists else bypass
const useAuth = () => {
  const [user, setUser] = useState(null)
  useEffect(()=> {
    let isCurrent = true
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (isCurrent) {
          craeteUserProfile(user)
          .then(u => setUser(u))
          .catch(err => console.error("User Auth: ", err))
      }
    })
    return () => {
      unsubscribe()
      isCurrent = false
    }
  }, [])
  return user
}
export { useLoading, useGetPosts, useAuth };
