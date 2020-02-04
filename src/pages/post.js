const Post = ({post}) => {
  const {title, content, user} = post.data()
  return (
    <React.Fragment>
      <div className='post'>
        <div className='post-content'>
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
        <div className='bottom-bar'>
          <span className='user-name'>Name: {user.displayName}</span>
          <button className='star-btn'>Star</button>
          <button className='remove-btn'>Remove</button>
        </div>
      </div>
      <style jsx>
        {
          `
          .post {
            border: 1px solid green;
            width: 50%;
            margin: 10px auto;
          }
          .post-content {
            padding: 0px 10px;
          }
          .user-name {
            float: left;
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
            background: #829FD9;
            padding: 7px;
          }
          `
        }
      </style>
    </React.Fragment>
  );
};
export default Post;
