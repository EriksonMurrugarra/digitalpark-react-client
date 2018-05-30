import React, { Component } from 'react';
import BlogPostList from "../components/blog-post-list";
import axios from 'axios';
import './topics-page.css';

class TopicsPage extends Component {

  state = {
    blogEntries: null,
    topic: '...'
  };

  componentDidMount () {
    const topic = this.props.match.params.key;

    this.retrieveBlogEntries(topic);
  }

  componentWillReceiveProps (nextProps) {
    const topic =  nextProps.match.params.key;

    this.retrieveBlogEntries(topic);
  }

  retrieveBlogEntries = (topic) => {
    this.setState({
      topic,
      blogEntries: null
    });

    axios.get(`${process.env.REACT_APP_BLOG_API_URL}?topic=${topic}`)
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
    const { topic, blogEntries } = this.state;
    return (
      <div>
        <aside className="topicTitle">{topic}</aside>
        <BlogPostList blogEntries={blogEntries}/>
      </div>
    )
  }

};

export default TopicsPage;