import React from 'react';
import '../style/Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNavbar from './PageNavbar';
import { Jumbotron, CardDeck, Card } from 'react-bootstrap';
import UserButton from './UserButton';
import UserBusinessRow from './UserBusinessRow';
import BusinessReviewText from './BusinessReviewText';
import UserCityRow from './UserCityRow';

export default class Users extends React.Component {
  constructor(props) {
    super(props);

    // The state maintained by this React Component. This component maintains the list of keywords,
    // and a list of movies for a specified keyword.
    this.state = {
      users: [],
      businesses: [],
      review: "",
      cities: [],
    };
    this.showBusinessReviewed = this.showBusinessReviewed.bind(this);
    this.showReviewText = this.showReviewText.bind(this);
    this.showVisitedCity = this.showVisitedCity.bind(this);
  };

  // React function that is called when the page load.
  // Gets top 50 active users as clickable buttons
  componentDidMount() {
    // Send an HTTP request to the server; handled by router in server/index.js
    fetch("http://localhost:8081/rankUsers",
      {
        method: 'GET' // The type of HTTP request.
      }).then(res => {
        // Convert the response data to a JSON.
        return res.json();
      }, err => {
        // Print the error if there is one.
        console.log(err);
      }).then(userList => {
        console.log(userList);
        if (!userList) return;

        // Map each user in this.state.users to an HTML element:
        // A button which triggers the showMovies function for each keyword.
        const userDivs = userList.map((userObj, i) =>
          <UserButton
            id={"button-" + userObj.user_id}
            onClick={() => {
              this.showBusinessReviewed(userObj.user_id);
              this.showVisitedCity(userObj.user_id);
            }}
            user_id={userObj.user_id}
            activity={userObj.activity}
          />
        );

        // Set the state of the keywords list to the value returned by the HTTP response from the server.
        this.setState({
          users: userDivs
        });
      }, err => {
        // Print the error if there is one.
        console.log(err);
      });
  };

  showBusinessReviewed(userId) {
    fetch("http://localhost:8081/businessReviewed/" + userId,
      {
        method: 'GET' // The type of HTTP request.
      }).then(res => {
        // Convert the response data to a JSON.
        return res.json();
      }, err => {
        // Print the error if there is one.
        console.log(err);
      }).then(businessList => {
        // console.log(businessList);
        if (!businessList) return;

        // Map each {name, text, stars} to an HTML element
        const businessDivs = businessList.map((businessObj, i) =>
          <UserBusinessRow
            name={businessObj.name}
            onClick={() => this.showReviewText(businessObj.text)}
            stars={businessObj.stars}
          />
        );

        // Set the state of the keywords list to the value returned by the HTTP response from the server.
        this.setState({
          businesses: businessDivs
        });

      }, err => {
        // Print the error if there is one.
        console.log(err);
      });
  };

  showReviewText(text) {
    const reviewComp =
      <BusinessReviewText
        text={text}
      />

    this.setState({
      review: reviewComp
    });
  };

  showVisitedCity(user_id) {
    fetch("http://localhost:8081/userVisitedCity/" + user_id,
      {
        method: 'GET' // The type of HTTP request.
      }).then(res => {
        // Convert the response data to a JSON.
        return res.json();
      }, err => {
        // Print the error if there is one.
        console.log(err);
      }).then(cityList => {
        // console.log(businessList);
        if (!cityList) return;

        // Map each {name, text, stars} to an HTML element
        const visitedCities = cityList.map((cityObj, i) =>
          <UserCityRow
            city={cityObj.city}
            frequency={cityObj.frequency}
          />
        );

        // Set the state of the keywords list to the value returned by the HTTP response from the server.
        this.setState({
          cities: visitedCities
        });

      }, err => {
        // Print the error if there is one.
        console.log(err);
      });
  }

  render() {
    return (
      <div className="Home">
        <PageNavbar active="home" />
        <br />
        <div className="container movies-container">
          <div className="jumbotron">
            <div className="h5">Instructions</div>
            <p> In the "Top Active Users pane, you can see the ids of the top 50 active users, with their activity
            score calculated by the number of reviews they left and the number of interactions they had with other
            user's reviews. In the "Visited Cities" pane, you can see the cities that this user visited and the number
            of times that they visited each city. In the "Business Reviewed" pane, you can see the businesses that selected
            user reviewed and the stars that they gave. Finally, if you click on the business, you can see the review that
            the user wrote in the "Review" pane.
          </p>
          </div>
        </div>
        <CardDeck>
          <Card>
            <Card.Body>
              <Card.Title>Top 50 Active Users</Card.Title>
              <Card.Text>
                <div class="scrollable" style={{
                  overflow: 'auto',
                  height: '300px',
                }}>
                  <div>{this.state.users}</div>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Visited Cities</Card.Title>
              <Card.Text>
                <div class="scrollable" style={{
                  overflow: 'auto',
                  height: '300px',
                }}>
                  <div>{this.state.cities}</div>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Businesses Reviewed </Card.Title>
              <Card.Text>
                <div class="scrollable" style={{
                  overflow: 'auto',
                  height: '300px',
                }}>
                  <div>{this.state.businesses}</div>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>

        <br />

        <CardDeck>
          <Card>
            <Card.Body>
              <Card.Title>Review</Card.Title>
              <Card.Text>
                <div class="scrollable" style={{
                  overflow: 'auto',
                  height: '150px',
                }}>
                  <div>{this.state.review}</div>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>

        <br />
      </div>
    );
  };
};
