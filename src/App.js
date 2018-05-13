import React, { Component } from 'react';
import './App.css';
// layout resources
import AppHeader from './resources/layout/containers/app-header';
import AppTopicList from './resources/layout/components/app-topic-list';
import AppFooter from './resources/layout/components/app-footer';
import AppModalMenu from './resources/layout/components/app-modal-menu';
// pages
import BlogPage from './resources/pages/containers/blog-page';
import HomePage from "./resources/pages/containers/home-page";
// router
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <AppHeader/>
            <AppTopicList topics={['Docker', 'NodeJS', 'Jenkins', 'ReactJS']}/>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/blog" component={BlogPage} />
            </Switch>
            <AppFooter></AppFooter>
            <AppModalMenu></AppModalMenu>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
