import React, { Component } from 'react';
import './App.css';
// layout resources
import AppHeader from './resources/layout/containers/app-header';
import AppTopicList from './resources/layout/components/app-topic-list';
import AppBanner from './resources/layout/components/app-banner';
import AppFooter from './resources/layout/components/app-footer';
// pages
import BlogPage from './resources/pages/containers/blog-page';

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader/>
        <AppTopicList topics={['Docker', 'NodeJS', 'Jenkins', 'ReactJS']}/>
        <AppBanner/>
        <BlogPage/>
        <AppFooter></AppFooter>
      </div>
    );
  }
}

export default App;
