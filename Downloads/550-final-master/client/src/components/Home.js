import React from 'react';
import '../style/Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNavbar from './PageNavbar';
import { Jumbotron } from 'react-bootstrap';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    // The state maintained by this React Component. 
    this.state = {
      x: [],
    };

  };

  // React function that is called when the page load.
  componentDidMount() {
  };

  render() {    
    return (
      <div className="Home">
        <PageNavbar active="home" />
        <Jumbotron>
          <h1>Page 2</h1>
          <p>This is another page</p>
        </Jumbotron>
      </div>
    );
  };
};
