import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email: '',
       password: '',
    };
  }
  
  }
  render() {
    return (
      <main>
        <form>
          <input
            type="email"
            name="user"
            id="user"
            placeholder="Email address"
            data-testid="email-input"
          />
          <input
            type="password"
            name="password"
            id="password"
            min="6"
            placeholder="Password"
            data-testid="password-input"
          />
          <button type="submit">Entrar</button>
        </form>
      </main>
    );
  }
}
