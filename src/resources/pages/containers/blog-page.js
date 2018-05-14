import React, { Component } from 'react';
// components
import BlogPostList from '../components/blog-post-list';
// rest
import axios from 'axios';

class BlogPage extends Component {

  state = {
    blogEntries: null
  }

  componentDidMount () {
    axios.get(`${process.env.REACT_APP_BLOG_API_URL}`)
      .then(posts => {
        this.setState({
          blogEntries: posts.data
        });
      })
      .catch(error => {
        alert(error);
      });
  }

  render () {
    const { blogEntries } = this.state;

    return (
      <section className="blog-page">
        <BlogPostList blogEntries={blogEntries}/>
      </section>
    );
  }
}

export default BlogPage;