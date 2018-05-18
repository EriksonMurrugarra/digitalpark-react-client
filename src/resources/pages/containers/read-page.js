import React, { Component } from 'react';
// axios
import axios from 'axios';
// loading
import Loader from '../../loader/loader';
// components
import BlogReader from '../components/blog-reader';


class ReadPage extends Component {

  state = {
    post: null
  }

  componentDidMount () {
    axios.get(`${process.env.REACT_APP_BLOG_API_URL}/${this.props.match.params.key}`)
      .then(result => {
        this.setState({
          post: result.data
        });
      });
  }

  render () {
    const { post } = this.state;

    return (
      <div>
        {
          !post &&
            <Loader/>
        }
        {
          post &&
            <BlogReader post={post}/>
        }
      </div>
    );
  }

}

export default ReadPage;