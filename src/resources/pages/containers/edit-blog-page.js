import React, { Component } from 'react';
import BlogCreateForm from './blog-create-form';
import './create-blog-page.css';
import axios from 'axios';
import Loader from '../../loader/loader';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class EditBlogPage extends Component {

  state = {
    post: null
  };

  editBlog  = blogPayload => {
    const token = this.props.auth.accessToken;

    axios.put(`${process.env.REACT_APP_BLOG_API_URL}/${blogPayload.key}`, blogPayload, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(results => {
        this.props.history.push(`/blog/${results.data.key}`);
      })
      .catch(error => alert(error));
  }

  componentDidMount() {
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
      <section className="create-blog-page">
        <h1> Editar Post </h1>
        {
          !post &&
            <Loader/>
        }
        { post &&
            <BlogCreateForm submit={this.editBlog} post={post} buttonTitle="Guardar"/> }
      </section>
    );
  }

}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default withRouter(connect(mapStateToProps)(EditBlogPage));