import React from "react";
import { Link } from "react-router-dom";
import {Component} from "react";
import './styles.css';


class SignUp extends React.Component <{},any>{
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      emailaddress: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: { target: any; }) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    const { firstname,lastname, emailaddress, password } = this.state;
    return (
      <form className="Signup-form" onSubmit={this.handleSubmit}>
         <div className="input-container">
          <label className="label">Firstname: </label>
          <input
            type="text"
            name="firstname"
            className="input"
            placeholder="Firstname"
            value={firstname}
            onChange={this.handleChange}
          />
        </div>
        <div className="input-container">
          <label className="label">Lastname: </label>
          <input
            type="text"
            name="lastname"
            className="input"
            placeholder="Lastname"
            value={lastname}
            onChange={this.handleChange}
          />
        </div>
        <div className="input-container">
          <label className="label">Emailaddress: </label>
          <input
            type="text"
            name="emailaddress"
            className="input"
            placeholder="Emailaddress"
            value={emailaddress}
            onChange={this.handleChange}
          />
        </div>
        <div className="input-container">
          <label className="label">Password: </label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
            value={password}
            onChange={this.handleChange}
            />
            </div>
            <div className="Signuplink">
        <button type="submit" className="signupbutton">
          Sign Up
        </button>

        <Link to="/login">

        <p>Login</p>
        </Link>
        </div>
      </form>
    );
  }
}

export default SignUp;
