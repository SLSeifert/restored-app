import posts from "./postData";
import Post from "./Post";

function App() {
  return (
    <div>
      <h1>Restored Workshop Message Board</h1>
      {posts.map((post) => (
        <Post post={post}></Post>
      ))}
    </div>
  );
}

export default App;
