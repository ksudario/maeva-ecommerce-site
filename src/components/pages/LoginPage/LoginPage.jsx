import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import userService from '../../utils/userService';

class LoginPage extends Component {
  
  state = {
    email: '',
    pw: ''
  };

  handleChange = (e) => {
   
    this.setState({
      [e.target.name]: e.target.value
    })
  }

   handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      // Successfully logged in- show GamePage
      this.props.handleSignupOrLogin();
      this.props.history.push('/');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      alert('Invalid Credentials!');
    }
  }


  render() {
    return (
      <div className="LoginPage">
        <header className="header-footer liHeader">Log In</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12"><br/>
              <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12"><br/>
              <input type="password" className="form-control" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center"> <br/><br/><br/><br/>
              <button className="loginButton">Log In</button>&nbsp;&nbsp;&nbsp;
              <Link className="cancelButton" to='/'>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;