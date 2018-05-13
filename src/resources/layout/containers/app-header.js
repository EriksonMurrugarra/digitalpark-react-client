import React, { Component } from 'react';
import './app-header.css';
// route
import { NavLink } from 'react-router-dom';
// temporal
import UserAvatar from './images/user-avatar.png';
// redux
import { connect } from 'react-redux';
import { updateAuthState } from '../../../redux/actions';

class AppHeader extends Component {

  state = {
    menuReference: null
  };

  login = () => {
    this.props.lock.show();
  }

  logout = () => {
    this.props.updateAuthState({ authenticated: false });
    localStorage.removeItem('dp-auth');
  }

  componentDidMount() {
    this.setState({
      menuReference: document.getElementById("app-modal-menu")
    });

    // check localstorage for session
    if (localStorage.getItem('dp-auth')) {
      const authData = JSON.parse(localStorage.getItem('dp-auth'));
      authData.authenticated = new Date().getTime() < authData.expiresAt;
      this.props.updateAuthState(authData);

      if(!authData.authenticated) {
        localStorage.removeItem('dp-auth');
      }
    }

    // configure lock
    const { lock } = this.props;
    lock.on('authenticated', (authResult) => {
      if (authResult) {
        lock.getUserInfo(authResult.accessToken, (error, profile) => {
          const userData = {
            accessToken: `${authResult.tokenType} ${authResult.accessToken}`,
            profile: profile,
            expiresAt: JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime()),
            authenticated: true
          };

          this.props.updateAuthState(userData);

          // save in localstorage
          localStorage.setItem("dp-auth", JSON.stringify(userData));
        })
      }
    });
  }

  toogleModalMenu = () => {
    this.state.menuReference.classList.toggle("app-modal-menu-visible");
  }

  render () {
    const { authenticated } = this.props.auth;

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
              <button className="btn-green btn-login" onClick={this.login}>
                Ingresar
              </button>
            </div>
          }

          { authenticated && <img className="user-avatar" src={UserAvatar} alt="User Avatar"/> }
          { authenticated && <button className="btn-logout" onClick={this.logout}><i className="fas fa-sign-out-alt"></i></button> }
        </div>
      </header>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
}


export default connect(mapStateToProps, {updateAuthState})(AppHeader);