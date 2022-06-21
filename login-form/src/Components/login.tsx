import React from "react";
import { Link } from "react-router-dom";
import './styles.css';

class Login extends React.Component<{},any> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      username: "",
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
    const { username, password } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="input-container">
          <label className="label">Username: </label>
          <input
            type="text"
            name="username"
            className="input"
            placeholder="Username"
            value={username}
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
        <button type="submit" className="loginbutton">
          Login
        </button>
        <div className="">
        <Link to="/signup">
        <p>Sign Up</p>
        </Link>
        </div>
      </form>
    );
  }
}

export default Login;