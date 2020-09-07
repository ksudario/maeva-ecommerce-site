import React from 'react';
import './ReviewsList';
import { Link } from 'react-router-dom';
import './showReviewId.css';

export default props => {
    return (
            <div classname="rIdContainer">
            <div className="reviewId">
            <p>Created By: {props.user.name}</p><br/>
            <p> Review: {props.escort.review}</p><br/>
            <p>Created At: {new Date(props.review.createdAt).toLocaleDateString()} at {new Date(props.review.createdAt).toLocaleTimeString([], {timeStyle: 'short'})}</p><br/>       
        <Link className="editLink" to={`/reviews/${props.review._id}/edit`} onClick={() => props.handleEdit(props.id)}>✏️</Link><br/>
        <span className="deleteReviewButton" onClick={() => props.handleRemoveReview(props.escort._id)}>⛔️</span><br/>
        <Link className="backLink" to="/">Back</Link></div>
        </div>
    );
}