import React, { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`
        );
        const data = await response.json();
        const newPosts = data.hits.map((post) => ({
          title: post.title,
          url: post.url,
          created_at: post.created_at,
          author: post.author,
        }));
        setPosts((prevPosts) => [...prevPosts, ...newPosts]);
        setPage((prevPage) => prevPage + 1);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    const intervalId = setInterval(fetchPosts, 1000);

    return () => clearInterval(intervalId);
  }, [page]);

  return (
    <div>
      <h1>Posts</h1>
      <table frame="box" rules='all' cellPadding={10}>
        <thead>
          <tr>
            <th>Title</th>
            <th>URL</th>
            <th>Created At</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={index}>
              <td>{post.title}</td>
              <td>
                <a href={post.url} target="_blank" rel="noopener noreferrer">
                  {post.url}
                </a>
              </td>
              <td>{post.created_at}</td>
              <td>{post.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
