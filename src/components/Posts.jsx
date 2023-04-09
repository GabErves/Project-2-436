import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Posts = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [direction, setDirection] = useState(''); //Forward and Back?
  const [postData, setPostData] = useState([]);

  const fetchAPIData = async () => {
    setLoading(true);
    const URL = 'http://localhost:3001/v1/api/posts';

    const data_received = await axios.get('http://localhost:3001/v1/api/posts');

    setLoading(false);
    setPostData(data_received.data);
  };

  useEffect(() => {
    fetchAPIData();
  }, []);

  if (loading) {
    return <p> Loading... </p>;
  }

  //JSX:
  return (
    <>
      <h2 className="text-center">All Posts</h2>;
      <div className="container">
        {postData.map((post) => {
          return (
            <p key={post.id} className="font-bold">
              Title: {post.title}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default Posts;
