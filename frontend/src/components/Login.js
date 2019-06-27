import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <div>
        <div>Login</div>
        <form
          action="/users/login"
          method="POST"
          id="login-form"
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            name="email"
            placeholder="Email"
            require={true}
            onChange={e => this.setState({ email: e.target.value })}
            value={this.state.email}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            require={true}
            onChange={e => this.setState({ password: e.target.value })}
            value={this.state.password}
          />
          <br />
        </form>
        {this.props.msg ? <span>* {this.props.msg}</span> : ""}
        <input type="submit" value="Submit" form="login-form" />
        <br />
        <Link to="/">HomePage</Link>
      </div>
    );
  }
}
