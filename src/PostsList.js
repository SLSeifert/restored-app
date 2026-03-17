import Post from "./Post";
import posts from "./postData";


const PostsList = () => {
    return (
        posts.map((post) => <Post post={post}></Post>)
    );
};

export default PostsList