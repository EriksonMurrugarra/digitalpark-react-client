import React, { Component } from 'react';
import './app-topic-list.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class AppTopicList extends Component {

  state = {
    topics: []
  };

  componentDidMount () {
    axios.get(`${process.env.REACT_APP_TOPICS_API_URL}`)
      .then(topics => {
        this.setState({
          topics: topics.data
        });
      })
      .catch(error => {
        alert(error);
      });
  }

  render () {
    return (
      <section className="app-topic-list">
        <ul>
          {
            this.state.topics.map(topic => (
              <li key={topic.topic}> <NavLink to={`/topic/${topic.topic}`} replace={true} activeClassName="active" >{ topic.topic }</NavLink> </li>
            ))
          }
        </ul>
      </section>
    );
  }
};

export default AppTopicList;