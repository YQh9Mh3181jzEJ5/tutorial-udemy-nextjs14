import React from "react";

// Fetch posts from the API
async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 1 },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const posts = await response.json();
  return posts;
}

const Page = async () => {
  try {
    const posts = await fetchPosts();
    return (
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error(`Error fetchin posts: ${error}`);
    return <div>Failed to fetch posts</div>;
  }
};

export default Page;
