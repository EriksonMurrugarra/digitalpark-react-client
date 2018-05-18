import React from 'react';
import './blog-reader.css';
// libraries
import moment from 'moment';
import Markdown from 'react-remarkable';

const BlogReader = ({ post }) => {
  return (
    <div className="blog-reader">
      <div>
        <h1 className="blog-reader-title">{ post.title }</h1>
        <ul className="blog-reader-topics">
          {
            post.topics.map(topic => (
              <li key={topic}>{ topic }</li>
            ))
          }
        </ul>
        <div className="blog-reader-date"> { moment(post.createdAt).fromNow() }</div>
        <div className="blog-reader-content">
          <Markdown source={post.content}/>
        </div>

      </div>
    </div>
  );
};

export default BlogReader;