import React from 'react';
import '../style/Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNavbar from './PageNavbar';
import { ListGroup, CardColumns, Jumbotron } from 'react-bootstrap';
import ReactAutocomplete from './Autocomplete';
import JSONResult from './categories.json';
import JSONCuisine from './cuisines.json';
import MaxBusinessCityRow from './MaxBusinessCityRow';
import BestCityRows from './BestCityRows';

export default class Cities extends React.Component {
  constructor(props) {
    super(props);

    // The state maintained by this React Component. This component maintains the list of keywords,
    // and a list of movies for a specified keyword.
    this.state = {
      category1: '',
      category2: '',
      maxBusinessCities: [],
      cuisine: '',
      retirementCities: [],
    };

    this.submitCategories = this.submitCategories.bind(this);
    this.submitCuisine = this.submitCuisine.bind(this);
  };

  // React function that is called when the page load.
  componentDidMount() {

  };

  submitCategories() {
    if (!this.state.category1 || !this.state.category2) {
      alert("Please pick two categories to query!");
    } else {
      var args = "?category1=" + this.state.category1 + "&category2=" + this.state.category2;
      console.log(args);
      fetch("http://localhost:8081/getBestCityCategory/" + args, {
        method: 'GET'
      }).then(res => {
        return res.json();
      }, err => {
        console.log(err);
      }).then(cityList => {
        if (!cityList) {
          alert("No results found");
          return;
        }
        const cityDiv = cityList.map((cityObj, i) =>
          <div>
            <MaxBusinessCityRow
              count1={cityObj.count1}
              city1={cityObj.city1}
              count2={cityObj.count2}
              city2={cityObj.city2}
              state={cityObj.state}
            />
          </div>
        );
        this.setState({
          maxBusinessCities: cityDiv,
        });
      })
    }
  };

  submitCuisine() {
    if (!this.state.cuisine) {
      alert("Please select the type of cuisine you're interested in");
      return;
    }

    fetch("http://localhost:8081/getRetirementCity/" + this.state.cuisine,
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
        if (!cityList) {
          alert("No results found");
          return;
        }

        const cityRows = cityList.map((cityObj, i) =>
          <BestCityRows
            city={cityObj.city}
            count={cityObj.count}
            avg={cityObj.avg}
          />
        );

        // Set the state of the keywords list to the value returned by the HTTP response from the server.
        this.setState({
          retirementCities: cityRows
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
        <Jumbotron>
          <h1>Cities Page</h1>
          <p>Page to find best cities for some search criteria</p>
        </Jumbotron>
        <br />
        <div className="container movies-container">
          <div className="jumbotron">
            <div className="h5">Best cities in each state for...</div>
            <p> This query returns the cities for each state that have the highest count of businesses matching
            the two categories that you're interested in. Try searching for hotels and restaurants to figure out
            where to go to on your next vacation!
            </p>

            <div id="search">
              <p class="search-component"> I'm looking for businesses that are </p>
              <ReactAutocomplete
                items={JSONResult}
                shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                getItemValue={item => item.label}
                renderItem={(item, highlighted) =>
                  <div key={item.id} style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}>
                    {item.label}
                  </div>}
                value={this.state.category1}
                onChange={e => this.setState({ category1: e.target.value })}
                onSelect={value => this.setState({ category1: value })}
              />

              <p class="search-component"> and </p>

              <ReactAutocomplete
                items={JSONResult}
                shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                getItemValue={item => item.label}
                renderItem={(item, highlighted) =>
                  <div key={item.id} style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}>
                    {item.label}
                  </div>}
                value={this.state.category2}
                onChange={e => this.setState({ category2: e.target.value })}
                onSelect={value => this.setState({ category2: value })}
              />

              <button className="submit-btn" id="submitBtn" onClick={this.submitCategories} class="search-component">Submit</button>
              <br></br>

            </div>
            <div className="keywords-container">
              <CardColumns> {this.state.maxBusinessCities}</CardColumns>

            </div>
          </div>
        </div>

        <div className="container movies-container">
          <div className="jumbotron">
            <div className="h5">Looking for a city to live after you retire with good food and medical care? </div>
            <p> This query looks for the top cities that have a higher average rating of businesses for the input cuisine
            compared to the state-wide average rating, and out of those cities, returns ones that also have a medical center
            that's four stars or above!
            </p>
            <div id="search">
              <p class="search-component"> I'm looking for</p>
              <ReactAutocomplete
                items={JSONCuisine}
                shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                getItemValue={item => item.label}
                renderItem={(item, highlighted) =>
                  <div key={item.id} style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}>
                    {item.label}
                  </div>}
                value={this.state.cuisine}
                onChange={e => this.setState({ cuisine: e.target.value })}
                onSelect={value => this.setState({ cuisine: value })}
              />
              <p class="search-component"> cuisines</p>
              <button className="submit-btn" id="submitBtn" onClick={this.submitCuisine} class="search-component">Submit</button>
              <br></br>

            </div>
            <div className="keywords-container">
              <CardColumns> {this.state.retirementCities} </CardColumns>

            </div>
          </div>
        </div>
      </div>
    );
  };
};
