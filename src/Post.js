function Post({ post }) {
  const { author, content, likes } = post;
  return (
    <div className="bg-light border p-4 m-2">
      <h4>{author}</h4>
      <p>{content}</p>
      <p>{likes}</p>
    </div>
  );
}

export default Post;
