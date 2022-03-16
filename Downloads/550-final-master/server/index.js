const bodyParser = require('body-parser');
const express = require('express');
//var routes = require("./routes.js");
const cors = require('cors');
const app = express();

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* ---------------------------------------------------------------- */
/* ------------------- Route handler registration ----------------- */
/* ---------------------------------------------------------------- */

/* ---- (Restaurants.js) ---- */
//app.get('/getFoodieReviews/:category', routes.getReviewsFromFoodies);
//app.get('/getTravelers/:category', routes.getWellTraveledFoodieZips);

/* ---- (Chains.js) ---- */
// The route localhost:8081/keywords is registered to the function
// app.get('/citylist', routes.getCityList);
// app.get('/getAboveAvgBusiness', routes.getAboveAvgBusiness);
// app.get('/getBusinessFromCategory', routes.getBusinessFromCategory);


/* ---- (Users.js) ---- */
// app.get('/rankUsers', routes.rankUsers);
// app.get('/businessReviewed/:user_id', routes.businessReviewed);
// app.get('/userVisitedCity/:user_id', routes.citiesVisted);

/* ---- (Cities.js) --- */
// app.get('/getBestCityCategory', routes.getBestCityCategory);
// app.get('/getRetirementCity/:cuisine', routes.getRetirementCity);

app.listen(8081, () => {
  console.log(`Server listening on PORT 8081`);
});
