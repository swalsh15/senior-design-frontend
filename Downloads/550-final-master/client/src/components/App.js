import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './Home';
import Chains from './Chains';


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
							exact
							path="/second"
							render={() => <Home />}
						/>

					
					</Switch>
				</Router>
			</div>
		);
	};
};