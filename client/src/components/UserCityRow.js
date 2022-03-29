import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

// shows the business name, review text and stars of a given business
export default class UserCityRow extends React.Component {

  render() {
    return (
      <div className="movie">
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <div className="city">{this.props.city}</div>
          <span class="badge badge-primary badge-pill">
            <div className="frequency">{this.props.frequency}</div>
          </span>
        </li>

      </div>
    );
  };
};
