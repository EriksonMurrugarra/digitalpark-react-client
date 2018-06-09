import React, { Component } from 'react';
import './App.css';
// layout resources
import AppHeader from './resources/layout/containers/app-header';
import AppTopicList from './resources/layout/containers/app-topic-list';
import AppFooter from './resources/layout/components/app-footer';
import AppModalMenu from './resources/layout/components/app-modal-menu';
// pages
import BlogPage from './resources/pages/containers/blog-page';
import HomePage from './resources/pages/containers/home-page';
import ReadPage from './resources/pages/containers/read-page';
import ProfilePage from "./resources/pages/containers/profile-page";
import CreateBlogPage from "./resources/pages/containers/create-blog-page";
import AuthLoginPage from "./resources/pages/containers/auth-login-page";
import AuthRegisterPage from "./resources/pages/containers/auth-register-page";
// router
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
// redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './redux/reducers';
import TopicsPage from "./resources/pages/containers/topics-page";
import EditBlogPage from "./resources/pages/containers/edit-blog-page";


class App extends Component {

  createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

  render() {
    return (
      <div>
        <Provider store={this.createStoreWithMiddleware(reducers)}>
          <Router>
            <div>
              <AppHeader/>
              <AppTopicList/>
              <Switch>
                <Route exact path="/" component={BlogPage} />
                <Route exact path="/blog" component={BlogPage} />
                <Route exact path="/blog/:key" component={ReadPage} />
                <Route exact path="/topic/:key" component={TopicsPage} />
                <Route exact path="/perfil" component={ProfilePage} />
                <Route exact path="/crear-entrada" component={CreateBlogPage} />
                <Route exact path="/editar-entrada/:key" component={EditBlogPage} />
                <Route exact path="/login" component={AuthLoginPage} />
                <Route exact path="/registro" component={AuthRegisterPage} />
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
