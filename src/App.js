import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState(null); // Initialize id state

  useEffect(() => {
    // GET request to fetch posts
    axios.get('https://hello-backend-7125.onrender.com/author/')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    // POST request to create a comment
    axios.post('https://https://hello-backend-7125.onrender.com/comment/', {
      title: 'Hello world',
      rating: 5,
      author_id: 1,
    })
      .then(response => {
        console.log(response);
        setTitle(response.data.title); // Update the id state with the response data
      })
      .catch(error => {
        console.error(error);
      });
  }, []); // Empty dependency array means this effect runs only once

  return (
    <div className="App">
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.name}:{post.age}</li> // Don't forget to add a unique key for each list item
        ))}
      </ul>
      <p>ID: {title}</p> {/* Display the id */}
    </div>
  );
}

export default App;
