import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Toast} from 'react-bootstrap';

export default class FoodieReviewRow extends React.Component {
  render() {
    return (
      <div className="restsResults" onClick={this.props.onClick}
      style={{
        position: 'relative',
        minHeight: '100px',
        padding: '10px',
      }}
      >
        <Toast style={{width: '250px'}}>
          <Toast.Header closeButton={false}>
            <strong className="mr-auto"><div className="name"><div className="name">{this.props.name}</div></div> </strong>
            <small> <div className="postal-code">{this.props.code}</div> </small>
          </Toast.Header>
          <Toast.Body>
          <div className="stars">{Array(this.props.stars).fill(<span>
                  <img src="https://img.icons8.com/officexs/16/000000/filled-star.png"/>
                 </span>)}</div>
          </Toast.Body>
        </Toast>

      </div>
    );
  };
};
