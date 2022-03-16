import React from 'react';
import '../style/Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNavbar from './PageNavbar';
import { Jumbotron } from 'react-bootstrap';

export default class Friends extends React.Component {
  constructor(props) {
    super(props);

    // The state maintained by this React Component. This component maintains the list of keywords,
    // and a list of movies for a specified keyword.
    /*this.state = {
      selectedId: "8k3aO-mPeyhbR5HUucA5aA",
      ids: [],
      percent: -1
    };

    this.handleIdChange = this.handleIdChange.bind(this);
    this.submitId = this.submitId.bind(this);*/
  };

  handleIdChange(e) {
    /*console.log(e.target.value);
    this.setState({
      selectedId: e.target.value
    });
    console.log(this.state)*/
  };

  submitId() {
    /*console.log(this.state.selectedId)
    var url = "http://localhost:8081/percent/" + this.state.selectedId + "/";
    fetch(url,
    {
      method: 'GET'
    }).then(res => {
      return res.json();
    }, err => {
      console.log(err);
    }).then(percent => {
      if (!percent) {
        console.log("here")
        return;
      }
      console.log(percent)
      var value = percent[0].percent
      this.setState({
        percent: value
      });
      console.log(this.state)
    }, err => {
      console.log(err);
    });*/
  }

  // React function that is called when the page load.
  // Gets top 50 active users as clickable buttons
  componentDidMount() {
    /*fetch("http://localhost:8081/idList",
      {
        method: 'GET'
      }).then(res => {
        return res.json();
      }, err => {
        console.log(err);
      }).then(idList => {
        if (!idList) return;
        
        const fetchedIds = idList.map((id, i) => 
          <option className="idOption" value={id.user_id}>{id.user_id}</option>
        );

        this.setState({
          ids: fetchedIds
        });
      }, err => {
        console.log(err);
      });*/
  };

  render() {
    return (
      <div className="Home">
        <PageNavbar active="home" />
        <Jumbotron>
          <h1>Friends Page</h1>
          <p>
            This page lists the top 50 most active reviewers, ranked by the number of reviews and number of friends.
            After clicking on a user, the page displays the percent of businesses that the user's friends also reviewed.
            It also displays a list of businesses that both the input user and at least one of their friends have reviewed, and the friend rated the business higher than the input user.
          </p>
        </Jumbotron>
        <br />
        <div className="friends-container">
        <div className="jumbotron">
          <div className="h5">Select a Top Reviewer</div>
        </div>
        </div>
      </div>
    );
  };
};
