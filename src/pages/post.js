const Post = ({post}) => {
  const {title, content, user} = post.data()
  return (
    <React.Fragment>
      <div className='post'>
        <h1>{title}</h1>
        <p>{content}</p>
        <span>{user.displayName}</span>
      </div>
      <style jsx>
        {
          `
          .post {
            width: 50%;
            margin: auto;
          }
          p {
            font-size: 2em;
          }
          `
        }
      </style>
    </React.Fragment>
  );
};
export default Post;
