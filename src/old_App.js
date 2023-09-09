import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://0.0.0.0:8000/author/')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
     axios.post('http://0.0.0.0:8000/comment/',
      { title: 'Hello world', rating: 5, author_id: 1})
       .then(response => {
        console.log(response);
        id = response.data
      })
       .catch(error => {
         console.error(error);
       });
   }, []);                                    
  return (
    <div className="App">
      <ul>
      {posts.map(post => (
        <li>{post.name}:{post.age}</li>
      ))}
        <p>{id}</p>
      </ul>
    </div>
  );
}

export default App;
