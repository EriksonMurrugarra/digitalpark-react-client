import React, { Component } from 'react';
import './app-header.css';
// route
import { NavLink } from 'react-router-dom';

class AppHeader extends Component {

  state = {
    menuReference: null
  };

  componentDidMount() {
    this.setState({
      menuReference: document.getElementById("app-modal-menu")
    });
  }

  toogleModalMenu = () => {
    this.state.menuReference.classList.toggle("app-modal-menu-visible");
  }

  render () {
    return (
      <header className="app-header">
        <div className="header-left">
          <h1 className="logo">
            <i className="bar-pod fas fa-bars" onClick={() => this.toogleModalMenu()}></i>
            <i className="logo-pod fas fa-code"></i>
            <NavLink to="/">DigitalPark</NavLink>
          </h1>
        </div>
        <div className="header-right">
          <ul className="menu">
            <li><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
            <li><NavLink to="/info" activeClassName="active">Info</NavLink></li>
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