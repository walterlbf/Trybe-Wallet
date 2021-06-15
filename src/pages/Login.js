import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../actions/index';

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    console.log(email);
    console.log(password);
    const minPasswordLength = 6;
    return (
      <main>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            data-testid="email-input"
            onChange={ this.handleChange }
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
          <button
            type="submit"
            disabled={
              !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email)
                || password.length < minPasswordLength
            }
          >
            Entrar
          </button>
        </form>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(userLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);
