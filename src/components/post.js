import { removePost, starPost } from "../firestoreapi/functios";
import { UserContext } from "./providers/userprovider";
import { useContext } from "react";
import { belongsToCurrentUser } from "../firestoreapi/functios";
const Post = ({ post }) => {
  const { title, content, user, star } = post.data();
  const currentUser = useContext(UserContext);
  return (
    <React.Fragment>
      <div className="post">
        <div className="post-content">
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
        <div className="bottom-bar">
          <div className="user-info">
            <span>Name: {user.displayName}</span>
            <span className="star-icn">⭐️ {star ? star : ""}</span>
          </div>
          <button className="star-btn" onClick={() => starPost(post.id, star)}>
            Star
          </button>
          {belongsToCurrentUser(currentUser, user) && (
            <button className="remove-btn" onClick={() => removePost(post.id)}>
              Remove
            </button>
          )}
        </div>
      </div>
      <style jsx>
        {`
          .post {
            border: 1px solid green;
            width: 50%;
            margin: 10px auto;
          }
          .post-content {
            padding: 0px 10px;
          }
          .user-info {
            float: left;
          }
          .star-icn {
            margin-left: 5px;
          }
          .bottom-bar {
            padding: 10px;
            background: lightgreen;
            text-align: right;
          }
          .remove-btn {
            margin-left: 5px;
            padding: 7px;
            background: orange;
          }
          .star-btn {
            background: #829fd9;
            padding: 7px;
          }
        `}
      </style>
    </React.Fragment>
  );
};
export default Post;
