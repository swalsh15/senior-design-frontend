import React from 'react';
import '../style/Dashboard.css';
import '../style/Restaurants.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNavbar from './PageNavbar';
import { Jumbotron } from 'react-bootstrap';
import ReactAutocomplete from './Autocomplete';
import JSONRest from './restaurants.json';
import FoodieReviewRow from './FoodieReviewRow';
import FoodieReviewText from './FoodieReviewText';
import TravelerRow from './TravelerRow';


export default class Restaurants extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: '',
      rests: [],
      review: "",
      travelers: []
    };

    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.submitCategory = this.submitCategory.bind(this);
    this.showReviewText = this.showReviewText.bind(this);
  }

  showReviewText(text) {
    const reviewComp =
      <FoodieReviewText text={text}/>

      this.setState({
        review: reviewComp
      });
  }

  componentDidMount() {

  }

  handleCategoryChange(e) {
    this.setState({
      selectedCategory: e.target.value
    });
  }

  submitCategory() {
    if (!this.state.selectedCategory) {
      alert("Please choose a category!");
    } else {
      var url1 = "http://localhost:8081/getFoodieReviews/" + this.state.selectedCategory;
      fetch(url1, {
        method: 'GET'
      }).then(res => {
        return res.json();
      }, err => {
        console.log(err);
      }).then(restList => {
        if (!restList) {
          alert("No results found!");
          return;
        }
        const restDiv = restList.map((restObj, i) =>
          <div>
            <FoodieReviewRow
              name={restObj.name}
              code={restObj.postal_code}
              stars={restObj.stars}
              onClick={() => this.showReviewText(restObj.text)}
            />
          </div>
        );

        this.setState({
          rests: restDiv
        });
      });

      var url2 = "http://localhost:8081/getTravelers/" + this.state.selectedCategory;
      fetch(url2, {
        method: 'GET'
      }).then(res => {
        return res.json();
      }, err => {
        console.log(err);
      }).then(travelersList => {
        if (!travelersList) {
          alert("No results found!");
          return;
        }
        const travelersDiv = travelersList.map((travelerObj, i) =>
          <div>
            <TravelerRow
              id={travelerObj.user_id}
              code={travelerObj.postal_code}
            />
          </div>
        );

        this.setState({
          travelers: travelersDiv
        });
      });
    }
  };

  render() {
    return (
      <div className="Restaurants">
        <PageNavbar active="home" />


        <div className="restaurants-container">

        <div style={{
          padding: '20px',
        }}>
            <div class="row">
            <div class = "col-md-12">
            <Jumbotron>
              <h1>Food page</h1>
              <p>
                Craving a certain food?  Select a category below and learn from Yelp's most active foodies.
                Find out the postal codes where the top 10 most well-traveled Yelpers who sought out restaurants in your category are the most useful!
              </p>


              <p class="search-component">I'm craving ...</p>
                <ReactAutocomplete
                  items={JSONRest}
                  shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                  getItemValue={item => item.label}
                  renderItem={(item, highlighted) =>
                    <div key={item.id} style={{backgroundColor: highlighted ? '#eee' : 'transparent'}}>
                      {item.label}
                    </div>}
                  value={this.state.selectedCategory}
                  onChange={this.handleCategoryChange}
                  onSelect={value => this.setState({ selectedCategory: value })}
                />
                <button className="submit-btn" id="submitBtn" onClick={this.submitCategory} class="search-component">Submit</button>

            </Jumbotron>
            </div>
            </div>


            <div class="row">
                <div class="col-md-8" >
                <div>
                    <Jumbotron>
                            <h5 class="card-title">Find recommendations from foodies who've enjoyed at least 10 restaurants that serve the food you want.</h5>

                            <div class= "row">
                              <div class= "col-md-4">
                              <p class="card-text">
                                  <div className="results-container" id="rests" class="scrollable" style={{overflow: 'auto',
                    minHeightheight: '100px',}}>{this.state.rests}</div>
                              </p>
                              </div>
                              <div class = "col-md-8">
                                <div className="h5">Recommended Review:</div>
                                <div className="results-container" id="review">{this.state.review}</div>
                              </div>
                            </div>

                    </Jumbotron>
                  </div>
                </div>
                <div class="col-md-4">
                    <Jumbotron>
                            <h6 class="card-title">These 5 foodies have visited the most restaurants that serve the food you want in the following zipcodes. </h6>
                            <p class="card-text"><div className="results-container" id="travelers">{this.state.travelers}</div></p>
                    </Jumbotron>
                </div>
            </div>
        </div>


        </div>
      </div>
    );
  }
};
