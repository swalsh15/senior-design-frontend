import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Badge, ListGroup } from 'react-bootstrap';

export default class MaxBusinessCityRow extends React.Component {
  render() {
    return (
      <div className="movieResults">
      <Card className="text-center" border="primary" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{this.props.city1}, {this.props.state}</Card.Title>
          <Card.Text>
            <div className="rating">
              <div><Badge variant="primary"> Count 1 {this.props.count1}</Badge> </div>
              <div><Badge variant="primary"> Count 2 {this.props.count2}</Badge> </div>
            </div>
          </Card.Text>
          <Card.Text>

          </Card.Text>
        </Card.Body>
      </Card>

        <br></br>
      </div>
    );
  };
};
