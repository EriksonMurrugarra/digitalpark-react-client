import React, { Component } from 'react';
import BlogCreateForm from './blog-create-form';
import './create-blog-page.css';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class CreateBlogPage extends Component {

  createBlog = blogPayload => {
    axios.post(`${process.env.REACT_APP_BLOG_API_URL}`, blogPayload)
      .then(post => {
        this.props.history.push('/blog');
      })
      .catch(error => alert(error));
  }

  render () {
    return (
      <section className="create-blog-page">
        <BlogCreateForm submit={this.createBlog}/>
      </section>
    );
  }

};

export default withRouter(CreateBlogPage);