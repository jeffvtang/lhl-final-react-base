import React, { Component } from "react";

const Review = ({ review }) => (
  <div key={review.id}>
    Name: {review.name}
    <br />
    Content: {review.content}
    <br />
    Date: {review.date}
    <br />
    Rating: {review.rating} | Overall: {review.overall}
    <br />
    <br />
  </div>
);

export default Review;
