import { useEffect, useState } from "react";
import firebase, { firestore } from "./config_firebase";
import { craeteUserProfile } from "./firestoreapi/functios";
import { getPostRef, getCommentRef } from "./firestoreapi/functios";

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
  const [posts, setPosts] = useState(["loading"]);
  useEffect(() => {
    const unsubscribe = firestore.collection("posts").onSnapshot(snapshot => {
      setPosts(snapshot.docs);
    });
    return unsubscribe;
  }, []);
  return posts;
};

// hook to handle application auth enent and triger in sign in or sign out.
// and create new user profile if is not exists else bypass
const useAuth = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    let isCurrent = true;
    let unsubUser;
    const unsubscribe = firebase.auth().onAuthStateChanged(authUser => {
      if (isCurrent) {
        if (authUser) {
          craeteUserProfile(authUser).then(refDoc => {
            unsubUser = refDoc.onSnapshot(userSanp => {
              setUser({ uid: userSanp.id, ...userSanp.data() });
            });
          });
        }
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
      isCurrent = false;
      unsubUser();
    };
  }, []);
  return user;
};

// hook to subscribe to both post and comment
const useGetPostAndComments = postID => {
  const postRef = getPostRef(postID);
  const commentRef = getCommentRef(postID);

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const postUnsubscribe = postRef.onSnapshot(docSnap => {
      setPost(docSnap);
    });
    const commentUnsubscirbe = commentRef.onSnapshot(docSnap => {
      const data = docSnap.docs.map(queryDocSnap => ({
        ...queryDocSnap.data()
      }));
      setComments(data);
    });
    return () => {
      postUnsubscribe();
      commentUnsubscirbe();
    };
  }, [postID]);

  return [post, comments];
};
export { useLoading, useGetPosts, useAuth, useGetPostAndComments };
