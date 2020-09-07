import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ReviewForm.css';
import userService from '../utils/userService';



export default class ReviewForm extends Component {
    state = {
            name: "", 
            review: "", 
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
        this.props.handleAddReviewt(this.state, userId);
        this.setState({ 
                        name: "", 
                        review: ""
    });
  }
  

    render() {
    return(
      <div>
          {this.props.reviewToEdit ?
          <>
          
            <input onChange={ this.handleChange } 
            value={this.state.name}
            name="name"
            placeholder={this.props.reviewToEdit.name} />
            
            <input onChange={ this.handleChange } 
            value={this.state.review}
            name="review"
            placeholder={this.props.reviewToEdit.review} />

            
            <button onClick={() => this.handleEditReview()}>EDIT</button>
          </>
          :
          <div className="rform">
          <form className="reviewForm " onSubmit={this.handleSubmit}><br/><br/><br/><br/>
          <header className="rHeader">Add A Review</header><br/><br/><br/>
            <label>Name:</label>
            <input onChange={this.handleChange} name="name" value={this.state.name} /> <br/>
            <label>Review:</label>
            <input onChange={this.handleChange} name="review" value={this.state.review} /><br/>
            
            <button className="button is-primary">Submit</button><br/><br/>
            <Link className="rcancel" to="/">Cancel</Link>  
          </form>  
          
          </div>
    }
      </div>
    );
  }
}
