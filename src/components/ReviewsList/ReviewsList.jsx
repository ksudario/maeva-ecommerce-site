import React, { Component } from 'react';
import reviewEntry from '../utils/reviewEntry';
import './ReviewsList.module.css';
import { Link } from 'react-router-dom';
import ReviewListItem from './ReviewListItem';



export default class ReviewsList extends Component {
    state = {
      reviews: []
    };


    render () {
    
      const reviews = this.state.reviews.map(({_id, review, reviewer}) =>
        <ReviewListItem key={_id} review = {review} reviewer={reviewer}/>
      );
    return (   
      <ul className='ListContainer'>
        {reviews}
      </ul>
    );

    }
  }