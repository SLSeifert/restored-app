function Post(props) {
  return (
    <div>
      <h4>{props.post.author}</h4>
      <p>{props.post.content}</p>
      <p>{props.post.likes}</p>
    </div>
  );
}

export default Post;
