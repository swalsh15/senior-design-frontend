import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

// shows the business name and review text
export default class BusinessReviewText extends React.Component {

  render() {
    return (
      <div className="business">
        <div className="text">{this.props.text}</div>
      </div>
    );
  };
};