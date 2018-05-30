import React, { Component } from 'react';
import './register-page.css';
import { Link } from 'react-router-dom';
import { updateAuthState } from '../../../redux/actions';
import { connect } from 'react-redux';
import axios from 'axios';

class AuthRegisterPage extends Component {

  state = {
    email: '',
    password: '',
    fullName: ''
  };

  login = (event) => {

    axios.post(`${process.env.REACT_APP_AUTH_API_URL}/register`, this.state)
      .then(result => {
        const token = result.data;
        localStorage.setItem('auth', JSON.stringify(token));
        this.props.updateAuthState(token);
        this.props.history.push('/');
      })
      .catch(error => alert(error));


    event.preventDefault();
  }

  handleName = event => {
    this.setState({
      fullName: event.target.value
    });
  }

  handleEmail = event => {
    this.setState({
      email: event.target.value
    });
  }

  handlePassword = event => {
    this.setState({
      password: event.target.value
    });
  }

  render () {
    return (
      <section className="register-section">
        <form className="login-form" onSubmit={this.login} autoComplete="off">
          <label>
            Tu Nombre:
          </label>
          <input type="text" onChange={this.handleName} value={this.state.fullName}  autoComplete="off"/>
          <label>
            Correo Eletrónico:
          </label>
          <input type="text" onChange={this.handleEmail} value={this.state.email}  autoComplete="off"/>
          <label>
            Contraseña:
          </label>
          <input type="password" onChange={this.handlePassword} value={this.state.password}  autoComplete="off"/>
          <div className="create-login-toolbar">
            <Link className="register-link" to="/login">Ingresar</Link>
            <button className="btn-green">Crear Cuenta</button>
          </div>
        </form>
      </section>
    );
  }

}

export default connect(null, { updateAuthState })(AuthRegisterPage);