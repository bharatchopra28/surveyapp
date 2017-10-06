import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import { fetchUser } from '../actions';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Header />
						<div style={{ margin: 20 }}>
							<Route exact path='/' component={Landing} />
							<Route exact path='/surveys' component={Dashboard} />
							<Route exact path='/surveys/new' component={SurveyNew} />
						</div>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, { fetchUser })(App);