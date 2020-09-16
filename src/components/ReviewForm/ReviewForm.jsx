import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './ReviewForm.css';
import userService from '../utils/userService';

export default class ReviewForm extends Component {
  state = {
    reviewer:'',
    review:'',
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
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

    <form className="reviewForm" onSubmit={this.handleSubmit}>
      <input
        type='text'
        value={this.state.reviewer}
        onChange={this.handleChange}
        name='reviewer'
        placeholder='Please Enter Your Name'
      />
      <input
        type='text'
        value={this.state.review}
        onChange={this.handleChange}
        name='review'
        placeholder='Share Your Thoughts'
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

} 

