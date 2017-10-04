import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';

import { handleToken } from '../actions';

class Payments extends Component {
	render() {
		return (
			<StripeCheckout 
				name='Survey App'
				description='Rs.50 for 5 email credits'
				amount={5000}
				currency='INR'
				token={token => this.props.handleToken(token)}
				stripeKey={process.env.REACT_APP_STRIPE_KEY}
			>
				<button className="btn">
					Add Credits
				</button>
			</StripeCheckout>
		);
	}
}

export default connect(null, { handleToken })(Payments);