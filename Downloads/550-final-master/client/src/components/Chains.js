import React from 'react';
import '../style/Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNavbar from './PageNavbar';
import { Jumbotron } from 'react-bootstrap';
import KeywordButton from './UserButton';
import BestMoviesRow from './BestMoviesRow';
import ReactAutocomplete from './Autocomplete';
import JSONResult from './categories.json';
import MapSection from './Map' // import the map here
//import DashboardMovieRow from './DashboardMovieRow';
import './Chains.css';
import GoogleMapReact from 'google-map-react';

export default class Chains extends React.Component {
  constructor(props) {
    super(props);

    // The state maintained by this React Component. This component maintains the list of keywords,
    // and a list of movies for a specified keyword.
    this.state = {
      keywords: [],
      selectedCity: "",
      categories: [],
      businesses: [],
      map: [],
      lats: [],
      longs: [],
      typedZip: "",
      category: ""
    };

    //this.handleCityChange = this.handleCityChange.bind(this);
    this.submitCity = this.submitCity.bind(this)
    this.showOnMap = this.showOnMap.bind(this)
    this.handleZipChange = this.handleZipChange.bind(this)
    this.handleCategoryChange = this.handleCategoryChange.bind(this)

  };

  // React function that is called when the page load.
  componentDidMount() {
    // load query from preprocessing
    this.setState({
      categories: JSONResult
    });

  };

  handleCityChange(e) {
    this.setState({
      selectedCity: e.target.value
    });
  };

  submitCity() {
    if (this.state.typedZip === "") {
      alert("Please enter a zip code");
    } else if (this.state.category === "") {
      // query zip only
      fetch("http://localhost:8081/getAboveAvgBusiness/?city=" + this.state.typedZip, {
      method: 'GET'
      }).then(res => {
        return res.json();
      }, err => {
        console.log(err);
      }).then(businessList => {
        if (!businessList) {
          alert("No results found");
          return;
        }
        const businessDiv = businessList.map((businessObj, i) =>
        <div>
          <BestMoviesRow
            name={businessObj.name}
            address={businessObj.address}
            categories={businessObj.categories.split(',')}
            stars={businessObj.stars}
          />
        </div>
        );
        this.setState({
          businesses: businessDiv,
        });
        this.showOnMap(businessList);
      })

    } else {
      var cat = this.state.category.replace(' ', '%20');
      var args = "?city=" + this.state.typedZip + "&category=" + cat;
      fetch("http://localhost:8081/getBusinessFromCategory/" + args, {
      method: 'GET'
      }).then(res => {
        return res.json();
      }, err => {
        console.log(err);
      }).then(businessList => {
        if (!businessList) {
          alert("No results found");
          return;
        }
        const businessDiv = businessList.map((businessObj, i) =>
        <div>
          <BestMoviesRow
            name={businessObj.name}
            address={businessObj.address}
            categories={businessObj.categories.split(',')}
            stars = {businessObj.stars}
          />
        </div>
        );
        this.setState({
          businesses: businessDiv,
        });
        this.showOnMap(businessList);
      })
    }


  };

  showOnMap(list) {
    var lats = [];
    var lngs = [];
    for (var i = 0; i < list.length; i++) {
      lats.push(list[i].latitude);
      lngs.push(list[i].longitude);
    }
    let location = {
          center: {
            lat: lats[0],
            lng: lngs[0]
          },
          latitudes: lats,
          longitudes: lngs,
          zoom: 7
        };

    const mapDiv = (
      <MapSection center = {location.center} lat = {location.latitudes} lng = {location.longitudes}
      />
    )
    this.setState({
      map: mapDiv
    });

  }

  handleZipChange(event) {
    this.setState({
      typedZip: event.target.value
    });
  }

  handleCategoryChange(event) {
    this.setState({
      category: event.target.value
    });
  }


  render() {
    return (
      <div className="Home">
        <PageNavbar active="home" />
        <Jumbotron>
          <h1>Home Page</h1>
          <p>
            This page helps you search for the top ranked businesses by zipcode and category of business.
            These businesses have a star rating above average for that city. Information about each businesses is displayed and
            a map appears with each businesses location.
           </p>

          <div id="search">
            <p class="search-component"> I'm looking for </p>
            <div id="autocomplete">
            <ReactAutocomplete
            items={JSONResult}
            shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
            getItemValue={item => item.label}
            renderItem={(item, highlighted) =>
              <div
                key={item.id}
                style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
              >
                {item.label}
              </div>
            }
            value={this.state.category}
            onChange={e => this.setState({ category: e.target.value })}
            onSelect={value => this.setState({ category: value })}
          />
          </div>
          <p class="search-component"> Near </p>
          <input type="text" class="search-component" id = "zip" value={this.state.typedZip} onChange={this.handleZipChange} />
          <button className="submit-btn" id="submitBtn" onClick={this.submitCity} class="search-component" id="search-btn">Search</button>
          </div>
          <br></br>

        <div id='display'>
          <div className="movies-container" id="results">
            {this.state.businesses}
          </div>
          <div id="map"> {this.state.map} </div>
        </div>


        </Jumbotron>
      </div>
    );
  };
};
