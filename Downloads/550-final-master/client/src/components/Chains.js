import React from 'react';
import '../style/Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNavbar from './PageNavbar';
import { Jumbotron } from 'react-bootstrap';
import './Chains.css';

export default class Chains extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 0
    };

    // You must always call the update function 
    // here so state is not undefined when page loads
    this.handleClick = this.handleClick.bind(this);

  };

  // React function that is called when the page load.
  componentDidMount() {
    //set initial state here
    this.setState({
      clicks: 0
    });
  };
    
  // sample state change function
  handleClick(event) {
    this.setState({
        clicks: this.state.clicks + 1
    });
  }


  render() {
    return (
      <div className="Home">
        <PageNavbar active="home" />
        <Jumbotron>
          <h1>Home Page</h1>
          <p>
            This is an example of how to work with React's state. This page shows 
            how many times you click the button lol 
          </p>

     
           <button className="submit-btn" id="submitBtn" onClick={this.handleClick}> Sample button </button>
           <p>Num clicks: {this.state.clicks} </p>
              
          <br></br>

        </Jumbotron>
      </div>
    );
  };
};
