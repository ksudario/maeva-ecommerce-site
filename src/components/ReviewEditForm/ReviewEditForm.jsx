import React, { Component } from 'react';
import './ReviewEditForm.css';
import { Link } from 'react-router-dom';


export default class ReviewEditForm extends Component {
    state = this.props.review

handleEdit = (e) => {
    const reviewId = this.state._id;
        e.preventDefault();
        this.props.handleEditReview(reviewId, this.state) 
        this.setState({name: "", 
                        review: ""
                    },
          function () {
            this.props.history.push(`/reviews/${reviewId}`)
          });
      }

    handleChange = e => {
      this.setState({
          [e.target.name]: e.target.value 
      });
  }
render(){
    return (
        <>
        <div className="editform">
        <form className="EditReviewForm" onSubmit={this.handleEdit}><br/><br/><br/><br/>
          <header className="rHeader">Edit Review</header><br/><br/><br/>
            <label>Name: </label>
            <input onChange={ this.handleChange } 
            value={this.state.name}
            name="name"
            /><br/>
            <label>Review: </label>
            <input onChange={ this.handleChange } 
            value={this.state.review}
            name="review"
             /><br/>
           
            <button className="editButton">EDIT</button><br/>
            <Link className="editCancel" to="/">Cancel</Link> 
            </form>
            </div>
        </>
     );
    }
  }