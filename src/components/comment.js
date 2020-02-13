import { useRef, useContext } from "react";
import { UserContext } from "./providers/userprovider";
import { addComment } from "../firestoreapi/functios";

const Comments = ({ comment }) => {
  return (
    <React.Fragment>
      <div className="comment">
        <span className="name">{comment.user.displayName}:</span>
        <span>{comment.content}</span>
      </div>
      <style jsx>
        {`
          .comment {
            width: 50%;
            margin: 15px auto;
          }
          span {
            font-size: 1.2em;
            padding: 10px;
          }
          .name {
            color: green;
          }
        `}
      </style>
    </React.Fragment>
  );
};
const AddComment = ({ comments, post }) => {
  const user = useContext(UserContext);
  const refComment = useRef();

  const handleAddComment = e => {
    e.preventDefault();
    addComment(
      {
        user,
        content: refComment.current.value
      },
      post.id
    );
    refComment.current.value = "";
  };
  return (
    <React.Fragment>
      <div>
        <div className="add-comment">
          <form onSubmit={handleAddComment}>
            <input type="text" placeholder="add Comment" ref={refComment} />
            <input type="submit" value="add" />
          </form>
        </div>
        <div>
          {comments.length > 0 ? (
            <div className="comments">
              {comments.map((comment, indx) => (
                <Comments comment={comment} key={indx} />
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <style jsx>
        {`
          .add-comment {
            width: 50%;
            margin: auto;
            text-align: center;
          }
          input[type="text"] {
            width: 75%;
            font-size: 1.2em;
            padding: 5px;
          }
          input[type="text"]:focus {
            outline: none;
            border: 1px solid black;
          }
          input[type="submit"] {
            width: 20%;
            margin-left: 15px;
            color: white;
            background: black;
            font-size: 1.2em;
            padding: 5px;
          }
          input[type="submit"] {
            outline: none;
            cursor: pointer;
          }
        `}
      </style>
    </React.Fragment>
  );
};

export default AddComment;
