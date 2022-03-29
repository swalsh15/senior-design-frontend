import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

// shows the business name and review text
export default class FoodieReviewText extends React.Component {

  render() {
    return (
      <div className="foodie-review">
        <div className="text">{this.props.text}</div>
      </div>
    );
  };
};