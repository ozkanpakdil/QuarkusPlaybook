import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import './App.css';
import {Home, Results} from "./screens";
import withRoot from "./theme/withRoot";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/home' component={Home}/>
				<Route path='/results' component={Results}/>
				<Route path="*">
					<Redirect to="/home"/>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default withRoot(App);
