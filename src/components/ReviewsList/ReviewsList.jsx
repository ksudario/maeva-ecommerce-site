import React, { Component } from 'react';
import reviewEntry from '../utils/reviewEntry';
import './ReviewsList.css';
import { Link } from 'react-router-dom';



export default class ReviewsList extends Component {
    state = { };


      handleReviewsDoneUpdate = async id => {
          const reviews = await reviewEntry.updateDoneReview(id);
          this.setState({ reviews });
      }
      
      handleRemoveReview = async id => {
          const reviews = await reviewEntry.removeReview(id);
          this.setState({ reviews });
      }
  
      
  
      handleEdit = async id => {
          const reviewToEdit = await this.state.reviews.find(function(review) {
              return review._id === id;
          })
       this.setState({ reviewToEdit });
      }

      showReview = async (id, data) => {
        const reviewToShow = await this.state.reviewes.find(function(review) {
            return review._id === id, data;
        })
        this.setState({reviewToShow});
    } 
  

    render () {
    
      const reviews = this.props.reviews.map(({_id, name, review, createdAt, timestamps}) =>
        <Link to={`/reviews/${_id}`} className="reviewList" key={_id} >
        <h3>{name}</h3><br/>
            <h4>Posted: {new Date(createdAt).toLocaleDateString()} at {new Date(createdAt).toLocaleTimeString([], {timeStyle: 'short'})}</h4>   
        </Link>
        );
    return (   
      <>
        <div className="rTitle">Reviews</div>
        <div className="container">{reviews}</div>
      </>
    );
  }
}