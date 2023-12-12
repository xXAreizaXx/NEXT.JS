// Components
import PostCard from "@components/PostCard";

async function loadPosts() {
    const res = await fetch("https:///jsonplaceholder.typicode.com/posts");

    const data = await res.json();

    /* await new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 4000);
    }); */

    return data;
}

export default async function PostsPage() {
    // Fetch posts
    const posts = await loadPosts();

    return (
        <div>
            <h1>Posts</h1>

            {posts.map((post) => <PostCard key={post.id} post={post} />)}
        </div>
    );
}
