import React, { Component } from 'react';
import './App.css';
// layout resources
import AppHeader from './resources/layout/containers/app-header';
import AppTopicList from './resources/layout/components/app-topic-list';
import AppFooter from './resources/layout/components/app-footer';
import AppModalMenu from './resources/layout/components/app-modal-menu';
// pages
import BlogPage from './resources/pages/containers/blog-page';
import HomePage from './resources/pages/containers/home-page';
import ReadPage from './resources/pages/containers/read-page';
import ProfilePage from "./resources/pages/containers/profile-page";
import CreateBlogPage from "./resources/pages/containers/create-blog-page";

// router
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
// auth0
import { Auth0Lock } from 'auth0-lock';
// redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './redux/reducers';

class App extends Component {

  createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

  constructor () {
    super();
    this.lock = new Auth0Lock(
      'dW5hdeN1LAguH4CkZQe6u4AX2F3deKNw',
      'digitalpark.auth0.com',
      {
        auth: { redirect: true},
        language: 'es',
        languageDictionary: {
          title: ''
        },
        theme: {
          labeledSubmitButton: false,
          logo: 'https://s3.us-east-2.amazonaws.com/digitalpark-media/app_logo.png',
          primaryColor: "#218282"
        }
      }
    );
  }

  render() {
    return (
      <div>
        <Provider store={this.createStoreWithMiddleware(reducers)}>
          <Router>
            <div>
              <AppHeader lock={this.lock}/>
              <AppTopicList topics={['Docker', 'NodeJS', 'Jenkins', 'ReactJS']}/>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/blog" component={BlogPage} />
                <Route exact path="/blog/:key" component={ReadPage} />
                <Route exact path="/perfil" component={ProfilePage} />
                <Route exact path="/crear-entrada" component={CreateBlogPage} />
              </Switch>
              <AppFooter></AppFooter>
              <AppModalMenu></AppModalMenu>
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
