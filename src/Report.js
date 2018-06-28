import React, { Component } from 'react';
import PositivityChart from './reportPartials/_positivityChart'
import Reviews from './reportPartials/_reviews'
import SentimentChart from './reportPartials/_sentimentChart'

class Report extends Component {
  render() {
    return (
      <div className="Report">
        <h1>Report</h1>
        <Reviews />
        <PositivityChart />
        <SentimentChart />
      </div>
    );
  }
}

export default Report;
