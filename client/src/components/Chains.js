import React from 'react';
import '../style/Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNavbar from './PageNavbar';
import { Jumbotron } from 'react-bootstrap';
import './Chains.css';
//import { Button } from '@material-ui/core';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default class Chains extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 0,
      rows: []
    };

    // You must always call the update function 
    // here so state is not undefined when page loads
    this.handleClick = this.handleClick.bind(this);

  };

  // React function that is called when the page load.
  componentDidMount() {
    //set initial state here
    this.setState({
      clicks: 0,
      rows: []
    });
  };
    
  // sample state change function
  handleClick(event) {
    this.setState({
        clicks: this.state.clicks + 1,
        rows: [...this.state.rows, {'id': 1, 'type': 2, 'notes': 3, 'verify': 'YES'}]
    });
    console.log(this.state);
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

          

       
          
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Notes</TableCell>
            <TableCell align="right">Verified</TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
         
          
          {this.state.rows.map((row) => (
            <TableRow>
              <TableCell> {row.id}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.notes}</TableCell>
              <TableCell align="right">{row.verify}</TableCell>
            </TableRow>
          ))}

        
          
        </TableBody>

      </Table>
    </TableContainer> 

        </Jumbotron>
      </div>
    );
  };
};
