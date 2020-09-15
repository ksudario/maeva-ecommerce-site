import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './ReviewForm.css';
import userService from '../utils/userService';

export default class ReviewForm extends Component {
  state = {
    reviewer:"",
    review:"",
  }

  handleChange = e => {
    this.setState({ 
      [e.target.reviewer]: e.target.value
  });
}

handleSubmit = e => {
  console.log(e)
    e.preventDefault();
    const userId = userService.getUser()._id
    console.log(userId) 
    this.props.handleAddReview(this.state, userId);
    this.setState({reviewer: "", 
                        review: "", 
                    }, () => {
                        this.props.history.push("/")
                        });
                      
    }
  
  render(){
  return (
    <form>
      <input 
        value={this.state.review}
        onChange={this.handleChange}
        placeholder='Please Enter Your Name'/>
      <input 
        value={this.state.reviewer}
        onChange={this.handleChange}
        placeholder='Share Your Thoughts'/>
      <button>Submit</button>
    </form>
  );
}

} 
