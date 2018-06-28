import React, { Component } from 'react';

class ReviewsContainer extends Component {
  render() {
    console.log(this.props.reviews.review1)
    return (
      <div className="review">
        Review 
      </div>
    );
  }
}

export default ReviewsContainer;
