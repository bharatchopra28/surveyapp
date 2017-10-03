import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<nav>
			    <div class="nav-wrapper" style={{ paddingLeft: 10 }}>
			      	<a href="#" class="left brand-logo">Survey</a>
			      	<ul class="right">
			        	<li><a>Login With Google</a></li>
			      	</ul>
			    </div>
			</nav>
		);
	}
}

export default Header;