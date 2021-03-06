import { removePost, starPost } from "../firestoreapi/functios";
import { UserContext } from "./providers/userprovider";
import { useContext } from "react";
import { belongsToCurrentUser } from "../firestoreapi/functios";
import { useGetPostAndComments } from "../hooks";
import Link from "next/link";

const Post = ({ post }) => {
  const { title, content, user, star, commentCount } = post.data();
  const currentUser = useContext(UserContext);
  const [postt, comments] = useGetPostAndComments(post.id);

  return (
    <React.Fragment>
      <div className="post">
        <div className="post-content">
          <Link href="/comments/[id]" as={`/comments/${post.id}`}>
            <a>{title}</a>
          </Link>
          <p>{content}</p>
        </div>
        <div className="bottom-bar">
          <div className="user-info">
            <span>Name: {user.displayName}</span>
            <span className="star-icn">⭐️ {star ? star : ""}</span>
          </div>
          <button
            //todo instead of making star button invisble we should make a 'toast' to show that the user has to be logged in to use the button
            style={{ visibility: currentUser ? "visible" : "hidden" }}
            className="star-btn"
            onClick={() => starPost(post.id, star)}
          >
            Star
          </button>
          {belongsToCurrentUser(currentUser, user) && (
            <button className="remove-btn" onClick={() => removePost(post.id)}>
              Remove
            </button>
          )}
          <div className="comments" onClick={() => {}}>
            <Link href="/comments/[id]" as={`/comments/${post.id}`}>
              <span className="hand-icn">✍ {commentCount ? commentCount: 0}</span>
            </Link>
          </div>
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
          .comments {
            float: left;
            margin-left: 15px;
          }
          .comments:hover {
            background-color: yellow;
            border-radius: 6px;
            cursor: pointer;
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
          .hand-icn {
            margin-left: 5px;
          }
        `}
      </style>
    </React.Fragment>
  );
};
export default Post;
