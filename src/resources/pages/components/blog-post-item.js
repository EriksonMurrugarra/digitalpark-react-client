import React from 'react';
import './blog-post-item.css';
import moment from 'moment';
// routes
import { Link } from 'react-router-dom';

// import Markdown from 'react-remarkable';

const BlogPostList = ({ blog }) => (
  <article className="blog-post-item">
    <div>
      <span className="blog-post-item-date">{ moment(blog.updatedAt).fromNow() }</span>
      <h2 className="blog-post-item-title"><Link to={`/blog/${ blog.key }`}>{ blog.title }</Link></h2>
      <p className="blog-post-item-description">{ blog.description }</p>
      <ul className="blog-post-item-topics">
        {
          blog.topics.map(topic => (
            <li key={topic}> <Link to={`/topic/${topic}`} replace={true}>{ topic }</Link> </li>
          ))
        }
      </ul>
    </div>
  </article>
);

export default BlogPostList;