import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: ""
    };
  }
  //   handleSubmit = async e => {
  //     e.preventDefault();
  //     await fetch("/users/register", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({
  //         email: this.state.email,
  //         passward: this.state.password
  //       })
  //     });
  //   };

  render() {
    return (
      <div>
        <div>Register</div>
        <form action="/users/register" method="post" id="register-form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <br />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
          />
          <br />
          <input
            type="password"
            name="password2"
            placeholder="Password again"
            value={this.state.password2}
            onChange={e => this.setState({ password2: e.target.value })}
          />
          <br />
        </form>
        {this.props.msg ? <span>* {this.props.match.params.msg}</span> : ""}
        <input type="submit" value="Submit" form="register-form" />
        <Link to="/">HomePage</Link>
      </div>
    );
  }
}
