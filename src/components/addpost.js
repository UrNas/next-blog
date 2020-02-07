import { useRef } from "react";
import { addPostBlog } from "../firestoreapi/functios";

const AddPost = () => {
  const refTitle = useRef();
  const refBodh = useRef();
  const handleCreatePost = e => {
    e.persist();
    const title = refTitle.current.value;
    const content = refBodh.current.value;
    if (!title.length || !content.length) return;
    refBodh.current.value = "";
    refTitle.current.value = "";
    addPostBlog({
      title,
      content,
      user: {
        displayName: "ali",
        uid: "123"
      }
    })
  };
  return (
    <React.Fragment>
      <div className="add-post">
        <form>
          <input type="text" placeholder="Title" ref={refTitle} required />
          <input type="text" placeholder="Body" ref={refBodh} required />
          <button onClick={handleCreatePost} >Create Post</button>
        </form>
      </div>
      <style jsx>
        {`
          .add-post {
            width: 50%;
            margin: auto;
          }
          input {
            display: block;
            width: 98%;
            border-top: 0px;
            border-left: 0px;
            border-right: 0px;
            border-bottom: 1px solid #829fd9;
            margin-bottom: 5px;
            font-size: 1.2em;
            padding: 5px;
          }
          button {
            display: block;
            width: 100%;
            border: none;
            background: #829fd9;
            padding: 10px;
            font-size: 1.1em;
          }
          input:focus {
            outline: none;
          }
          button:focus {
            outline: none;
          }
        `}
      </style>
    </React.Fragment>
  );
};
export default AddPost;
