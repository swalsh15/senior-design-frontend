import React from 'react';
import '../style/Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNavbar from './PageNavbar';
import { Jumbotron } from 'react-bootstrap';
// import KeywordButton from './KeywordButton';
//import DashboardMovieRow from './DashboardMovieRow';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    // The state maintained by this React Component. This component maintains the list of keywords,
    // and a list of movies for a specified keyword.
    this.state = {
      businesses: [],
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
          <h1>Home Page</h1>
          <p>Page to search for businesses</p>
        </Jumbotron>
      </div>
    );
  };
};
