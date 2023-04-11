import React from 'react';
import Header from './Header';
import './Header.css';
import { useState, useEffect } from 'react';


const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return <>
    <h2>Create Post</h2>


    <form className='flabel'>
      <label className='flabel'>Post Title:
        <input
          className='flabel'
          type="text" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label className='flabel'>Post Content:
        <textarea className='flabel'
          type="text" 
          value={content}
          onChange={(e) => setContent(e.target.value)}
          name="postContent" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </>;
};

export default Create;
