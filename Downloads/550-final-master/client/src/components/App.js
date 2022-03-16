import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './Home';
import Cities from './Cities';
import Users from './Users';
import Chains from './Chains';
import Friends from './Friends';
import Restaurants from './Restaurants.js';

export default class App extends React.Component {

	render() {
		return (
			<div className="App">
				<Router>
					<Switch>
						<Route
							exact
							path="/"
							render={() => <Chains />}
						/>
						<Route
							exact
							path="/home"
							render={() => <Chains />}
						/>
						<Route
							path="/users"
							render={() => <Users />}
						/>
						<Route
							path="/friends"
							render={() => <Friends />}
            			/>
            			<Route
              				path="/cities"
              				render={() => <Cities />}
						/>
						<Route
							path="/food"
							render={() => <Restaurants />}
						/>
					</Switch>
				</Router>
			</div>
		);
	};
};