import React, { Component } from 'react';
// components
import BlogPostList from '../components/blog-post-list';
// rest
import axios from 'axios';
import Pager from '../../pager/Pager';

class BlogPage extends Component {

  state = {
    blogEntries: null,
    stats: null,
    page: 1
  }

  componentDidMount () {
    this.retrievePosts(1);
  }

  retrievePosts = page => {
    this.setState({
      blogEntries: null,
      page
    });

    axios.get(`${process.env.REACT_APP_BLOG_API_URL}/?page=${page}`)
      .then(results => {
        this.setState({
          blogEntries: results.data.posts,
          stats: results.data.stats
        });
      })
      .catch(error => {
        alert(error);
      });
  }

  render () {
    const { blogEntries, stats } = this.state;

    return (
      <section className="blog-page">
        { stats && <Pager current={stats.page} pages={stats.pages} onPageSelected={this.retrievePosts} /> }
        <BlogPostList blogEntries={blogEntries}/>
        { stats && <Pager current={stats.page} pages={stats.pages} onPageSelected={this.retrievePosts} /> }
      </section>
    );
  }
}

export default BlogPage;