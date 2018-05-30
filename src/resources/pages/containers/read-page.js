import React, { Component } from 'react';
// axios
import axios from 'axios';
// loading
import Loader from '../../loader/loader';
// components
import BlogReader from '../components/blog-reader';
import { connect } from 'react-redux';

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
    let isAuthor = false;

    if (post) {
      const me = this.props.auth;
      isAuthor = me && (post.author === me.email);
    }

    return (
      <section>
        {
          !post &&
            <Loader/>
        }
        {
          post &&
            <BlogReader post={post} isAuthor={isAuthor}/>
        }
      </section>
    );
  }

}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(ReadPage);