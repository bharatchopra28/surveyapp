import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<nav>
			    <div className="nav-wrapper" style={{ paddingLeft: 10 }}>
			      	<a href="#" className="left brand-logo">Survey</a>
			      	<ul className="right">
			        	<li><a>Login With Google</a></li>
			      	</ul>
			    </div>
			</nav>
		);
	}
}

export default Header;