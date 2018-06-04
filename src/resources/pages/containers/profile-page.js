import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './profile-page.css';
import axios from 'axios';
import { connect } from 'react-redux';
import Loader from '../../loader/loader';
import Avatar from './images/user-avatar.png';

class ProfilePage extends Component {

  state = {
    userInfo: null
  };

  componentDidMount() {
    const token = this.props.auth.accessToken;

    axios.post(`${process.env.REACT_APP_AUTH_API_URL}/me`, null, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(result => {
        const userInfo = result.data;
        this.setState({
          userInfo
        });
      })
      .catch(error => alert(error));
  }

  render () {
    const { userInfo } = this.state;
    let isWriter = null;

    if (userInfo) {
      isWriter = userInfo.roles.includes('writer');
    }

    return (
      <section className="profile-page">
        {
          !userInfo &&
            <Loader/>
        }
        {
          userInfo &&
            <div>
              <img className="profile-page-avatar" src={Avatar} alt="user avatar"/>
              <h1>{ userInfo.fullName }</h1>
              {
                isWriter &&
                  <Link to="/crear-entrada"><button className="btn-green">Crear Blog</button></Link>
              }
            </div>
        }
      </section>
      );
  }

};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};


export default connect(mapStateToProps)(ProfilePage);