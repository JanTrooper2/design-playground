import axios from 'axios';
import React, {useState, useEffect} from 'react';

const Blog = () => {
  const sampleBlogEntry = {
    title: 'New Block entry hooray!',
    body: 'new text is great!',
    author: 'NYT person of the year 2008',
  };
  axios.post('http://localhost:5000/blogs', sampleBlogEntry).then(response => {
    console.log(response);
  });

  return <></>;
};

export default Blog;
