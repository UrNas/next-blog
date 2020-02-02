import { firestore } from "../config_firebase";
import { useEffect } from "react";
import { getPosts } from "../firestoreapi/functios";

const App = () => {
  useEffect(() => {
    getPosts()
      .then(posts =>
        posts.empty ? console.log("is empty") : console.log(posts)
      )
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      <h1>Hello react with firebase</h1>
    </div>
  );
};
export default App;
