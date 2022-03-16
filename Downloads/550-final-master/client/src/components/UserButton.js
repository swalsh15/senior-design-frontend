import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toast} from 'react-bootstrap';

//Returns a user button containing user_id and their activity score
//When clicked, lists businesses that user has reviewed
export default class UserButton extends React.Component {
  /* props looks like:
    {
      id
      onClick
      user_id
      activity
    }
  */

  render() {
    return (
      <div className="keyword" id={this.props.id} onClick={this.props.onClick} aria-live="polite"
  aria-atomic="true"
  style={{
    position: 'relative',
    minHeight: '43px',
  }}>
      <Toast>
        <Toast.Header closeButton={false}>
          <img src="https://img.icons8.com/ios-glyphs/30/000000/user-male-circle.png" className="rounded mr-2"/>
          <strong className="mr-auto text-primary">{this.props.user_id} </strong>
          <small> {this.props.activity}</small>
        </Toast.Header>
      </Toast>
      </div>
    );
  };
};
