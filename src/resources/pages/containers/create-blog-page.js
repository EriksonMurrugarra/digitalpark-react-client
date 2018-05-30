import React, { Component } from 'react';
import BlogCreateForm from './blog-create-form';
import './create-blog-page.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

class CreateBlogPage extends Component {

  createBlog = blogPayload => {
    const token = this.props.auth.accessToken;

    axios.post(`${process.env.REACT_APP_BLOG_API_URL}`, blogPayload, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
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

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default withRouter(connect(mapStateToProps)(CreateBlogPage));