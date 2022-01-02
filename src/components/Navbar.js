import '../styles/Navbar.css';

import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo.svg';

function Navbar() {
	return (
		<div className='navbar'>
			<div className='leftSide'>
				<Link to='/'> About Me </Link>
				<Link to='/'> Work </Link>
			</div>

			<div className='middleSide'>
				<Logo />
			</div>
			<div className='rightSide'>
				<Link to='/'> Random </Link>
				<Link to='/'> Contact </Link>
			</div>
		</div>
	);
}

export default Navbar;
