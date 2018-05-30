import React, { Component } from 'react';
import './login-form.css';
import { Link } from 'react-router-dom';
import { updateAuthState } from '../../../redux/actions';
import { connect } from 'react-redux';
import axios from 'axios';

class AuthLoginPage extends Component {

  state = {
    email: '',
    password: ''
  };

  login = (event) => {

    axios.post(`${process.env.REACT_APP_AUTH_API_URL}/login`, this.state)
      .then(result => {
        const token = result.data;
        localStorage.setItem('auth', JSON.stringify(token));
        this.props.updateAuthState(token);
        this.props.history.push('/');
      })
      .catch(error => alert(error));


    event.preventDefault();
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
      <section className="login-section">
        <form className="login-form" onSubmit={this.login}>
          <label>
            Correo Eletrónico:
          </label>
          <input type="text" onChange={this.handleEmail} value={this.state.email}/>
          <label>
            Contraseña:
          </label>
          <input type="password" onChange={this.handlePassword} value={this.state.password}/>
          <div className="create-login-toolbar">
            <Link className="register-link" to="/registro">Registrate</Link>
            <button className="btn-green">Ingresar</button>
          </div>
        </form>
      </section>
    );
  }

}

export default connect(null, { updateAuthState })(AuthLoginPage);