import React, { Component } from 'react';
import './app-header.css';

class AppHeader extends Component {

  render () {
    return (
      <header className="app-header">
        <div className="header-left">
          <h1 className="logo"> <i className="bar-pod fas fa-bars"></i> <i className="logo-pod fas fa-code"></i> DigitalPark </h1>
        </div>
        <div className="header-right">
          <ul className="menu">
            <li><a className="active">Blog</a></li>
            <li><a>Info</a></li>
          </ul>
          <div className="menu-buttons">
            <button className="btn-green">
              Ingresar
            </button>
          </div>
        </div>
      </header>
    );
  }

}

export default AppHeader;