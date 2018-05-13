import React, { Component } from 'react';
// components
import HomeBanner from '../components/home-banner';
// redux
import { connect } from 'react-redux';

class HomePage extends Component {
  render () {
    return (
      <HomeBanner authenticated={this.props.auth.authenticated}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(HomePage);