import React, { Component } from 'react';
import BlogPostList from "../components/blog-post-list";
import axios from 'axios';
import Pager from '../../pager/Pager';
import './topics-page.css';

class TopicsPage extends Component {

  state = {
    blogEntries: null,
    topic: '...',
    stats: null,
    page: 1
  };

  componentDidMount () {
    const topic = this.props.match.params.key;

    this.retrieveBlogEntries(1, topic);
  }

  componentWillReceiveProps (nextProps) {
    const topic =  nextProps.match.params.key;

    this.retrieveBlogEntries(1, topic);
  }

  retrieveBlogEntries = (page, topic) => {
    this.setState({
      topic,
      blogEntries: null
    });

    this.retrievePosts(page, topic)

  }

  retrievePosts = (page, topic) => {
    axios.get(`${process.env.REACT_APP_BLOG_API_URL}?topic=${topic}&page=${page}`)
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



  onPageSelected = page => {
    this.setState({
      blogEntries: null
    });
    this.retrievePosts(page, this.state.topic);
  }

  render () {
    const { blogEntries, stats } = this.state;
    return (
      <div>
        { stats && <Pager current={stats.page} pages={stats.pages} onPageSelected={this.onPageSelected} /> }
        <BlogPostList blogEntries={blogEntries}/>
        { stats && <Pager current={stats.page} pages={stats.pages} onPageSelected={this.onPageSelected} /> }
      </div>
    )
  }

};

export default TopicsPage;