import axios from 'axios';
import React, {useState} from 'react';
import '../styles/Blog.css';

const Blog = () => {
  const fetchNotes = axios
    .get('http://localhost:5000/blogs')
    .then(response => response.data);
  // console.log(fetchNotes);
  const notesArr = fetchNotes.then(res =>
    res.map(note => {
      return (
        <figure>
          <h3>{note.title}</h3>
          <p>{note.body}</p>
        </figure>
      );
    }),
  );
  console.log(notesArr);
  return (
    <section className="blog">
      <h1>Blog</h1>
      {/* {notesArr} */}
    </section>
  );
};

export default Blog;
