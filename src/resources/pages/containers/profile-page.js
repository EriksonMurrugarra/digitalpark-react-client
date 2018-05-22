import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './profile-page.css';

class ProfilePage extends Component {

  render () {
    return (
      <section className="profile-page">
        <Link to="/crear-entrada"><button className="btn-green">Crear Blog</button></Link>
      </section>);
  }

};

export default ProfilePage;