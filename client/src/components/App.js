import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './Home';
import Chains from './Chains';
import Scanner from './Scanner';


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
							path="/simple-table"
							render={() => <Chains />}
						/>
						<Route
							exact
							path="/timeline"
							render={() => <Home />}
						/>
						<Route
							exact
							path="/qr-scanner"
							render={() => <Scanner />}
						/>

					
					</Switch>
				</Router>
			</div>
		);
	};
};