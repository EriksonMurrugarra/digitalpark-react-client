import React from 'react';
import './blog-reader.css';
// libraries
import moment from 'moment';
import Markdown from 'react-remarkable';
import { Link } from 'react-router-dom';

const BlogReader = ({ post, isAuthor }) => {
  return (
    <div className="blog-reader">
      <div>
        {
          isAuthor && <div className="blog-toolbar">
            <Link to={`/editar-entrada/${post.key}`}>
              <button><i className="fas fa-pencil-alt"></i> Editar</button>
            </Link>
          </div>
        }
        <h1 className="blog-reader-title">{ post.title }</h1>
        <ul className="blog-reader-topics">
          {
            post.topics.map(topic => (
              <li key={topic}> <Link to={`/topic/${topic}`} replace={true}>{ topic }</Link> </li>

            ))
          }
        </ul>
        <div className="blog-reader-date"> { moment(post.updatedAt).fromNow() }</div>
        <div className="blog-reader-content">
          <Markdown source={post.content}/>
        </div>

      </div>
    </div>
  );
};

export default BlogReader;