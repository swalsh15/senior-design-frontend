import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toast} from 'react-bootstrap';

export default class TravelerRow extends React.Component {
  render() {
    return (
      <div className="travelerResults" style={{
        position: 'relative',
      }}>
        <Toast style={{
          position: 'relative',
          padding: '1px',
        }}>
          <Toast.Header closeButton={false}>
            <strong className="mr-auto text-primary"><div className="user-id">{this.props.id}</div></strong>
            <small> <div className="postal-code">{this.props.code}</div> </small>
          </Toast.Header>
        </Toast>


        <br></br>
      </div>
    );
  };
};
