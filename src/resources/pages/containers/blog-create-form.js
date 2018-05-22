import React, { Component } from 'react';
import './blog-create-form.css';

class BlogCreateForm extends Component {

  state = {
    key: '',
    title: '',
    description: '',
    topics: '',
    content: ''
  };

  handleSubmit = (event) => {
    const payload = {
      key: this.state.key,
      title: this.state.title,
      description: this.state.description,
      topics: this.state.topics,
      content: this.state.content
    };

    this.props.submit(payload);

    event.preventDefault();
  }

  handleKey = (event) => {
    this.setState({
      key: event.target.value
    });
  }

  handleTitle = (event) => {
    this.setState({
      title: event.target.value
    });
  }

  handleDescription = (event) => {
    this.setState({
      description: event.target.value
    });
  }

  handleTopics = (event) => {
    this.setState({
      topics: event.target.value
    });
  }

  handleContent = (event) => {
    this.setState({
      content: event.target.value
    });
  }

  render () {
    const { key, title, description, topics, content } = this.state;

    return (
      <form className="blog-create-form" onSubmit={this.handleSubmit}>
        <label>
          Shortcut:
        </label>
          <input type="text" value={key} onChange={this.handleKey}/>
        <label>
          Titulo:
        </label>
        <input type="text" value={title} onChange={this.handleTitle}/>
        <textarea className="blog-create-form-description" value={description} onChange={this.handleDescription}></textarea>
        <label>
          Topicos:
        </label>
        <input type="text" value={topics} onChange={this.handleTopics}/>
        <label>
          Contenido:
        </label>
        <textarea rows={10} value={content} onChange={this.handleContent}></textarea>
        <div className="create-blog-page-toolbar">
          <button className="btn-green">Publicar</button>
        </div>
      </form>
    );
  }

};

export default BlogCreateForm;