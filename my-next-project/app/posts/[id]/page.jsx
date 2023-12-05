// ReactJS
import { Suspense } from "react";

// Pages
import PostsPage from "../page";

async function loadPost(id) {
    const res = await fetch(`https:///jsonplaceholder.typicode.com/posts/${id}`);

    const data = await res.json();

    /* await new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 3000);
    }); */

    return data;
}

export default async function PostPage({ params }) {
    // Fetch posts
    const post = await loadPost(params?.id);

    return (
        <div>
            <h1>Post #{params?.id}</h1>

            <h2>{post?.id}. {post?.title}</h2>

            <p>{post?.body}</p>

            <h3>Otras publicaciones</h3>

            <Suspense fallback={<p>Loading other posts...</p>}>
                <PostsPage />
            </Suspense>
        </div>
    );
}