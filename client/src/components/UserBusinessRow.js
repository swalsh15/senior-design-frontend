import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Toast} from 'react-bootstrap';

// shows the business name, review text and stars of a given business
export default class UserBusinessRow extends React.Component {

  render() {
    return (
      <div onClick={this.props.onClick} style={{
        position: 'relative',
        minHeight: '90px',
      }}>
                 <Toast>
                   <Toast.Header closeButton={false}>
                     <strong className="mr-auto"><div className="name">{this.props.name}</div> </strong>
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
