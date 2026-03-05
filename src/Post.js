function Post(props) {
  return (
    <div className="bg-light border p-4 m-2">
      <h4>{props.post.author}</h4>
      <p>{props.post.content}</p>
      <p>{props.post.likes}</p>
    </div>
  );
}

export default Post;
