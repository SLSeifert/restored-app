import posts from "./postData";
import Post from "./Post";
import './main.scss';

function App() {
  return (
    <div>
      <h1 className="text-center title-text">
        Restored Workshop Message Board
      </h1>
      {posts.map((post) => (
        <Post post={post}></Post>
      ))}
    </div>
  );
}

export default App;
