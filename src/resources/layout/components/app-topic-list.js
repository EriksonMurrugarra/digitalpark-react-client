import React from 'react';
import './app-topic-list.css';

const AppTopicList = ({ topics }) => (
  <section className="app-topic-list">
    <ul>
      {
        topics.map(topic => (
          <li key={topic}> { topic } </li>
        ))
      }
    </ul>
  </section>
);

export default AppTopicList;