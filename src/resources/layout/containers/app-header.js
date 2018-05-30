import React, { Component } from 'react';
import './app-header.css';
// route
import { NavLink, Link } from 'react-router-dom';
// temporal
import UserAvatar from './images/user-avatar.png';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateAuthState } from '../../../redux/actions';

class AppHeader extends Component {

  state = {
    menuReference: null
  };

  logout = () => {
    this.props.updateAuthState(null);
    localStorage.removeItem("auth");
    this.props.history.push("/");
  }

  componentDidMount() {
    this.setState({
      menuReference: document.getElementById("app-modal-menu")
    });
  }

  toogleModalMenu = () => {
    this.state.menuReference.classList.toggle("app-modal-menu-visible");
  }

  render () {
    const authenticated = this.props.auth;

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
          {
            !authenticated && <div className="menu-buttons">
              <Link to="/login">
                <button className="btn-green btn-login">
                  Ingresar
                </button>
              </Link>
            </div>
          }

          { authenticated && <NavLink to="/perfil"><img className="user-avatar" src={UserAvatar} alt="User Avatar"/></NavLink> }
          { authenticated && <button className="btn-logout" onClick={this.logout}><i className="fas fa-sign-out-alt"></i></button> }
        </div>
      </header>
    );
  }

}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default withRouter(connect(mapStateToProps, { updateAuthState })(AppHeader));