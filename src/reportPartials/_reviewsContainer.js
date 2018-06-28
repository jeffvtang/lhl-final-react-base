import React, { Component } from "react";
import Review from "./_review.js";

class ReviewsContainer extends Component {
  render() {
    console.log(this.props.reviews.review1);
    return (
      <div className="review-Container">
        {this.props.reviews.map(review => (
          <Review review={review} key={review.id} />
        ))}
      </div>
    );
  }
}

export default ReviewsContainer;
