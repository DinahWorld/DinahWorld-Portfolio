import '../styles/Navbar.css';

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<div className='navbar'>
			<div className='leftSide'>
				<Link to='/'> A Propos de Moi </Link>
				<Link to='/'> Projets </Link>
			</div>

			<div className='middleSide'></div>
			<div className='rightSide'>
				<Link to='/'> Random </Link>
				<Link to='/'> Contact </Link>
			</div>
		</div>
	);
}

export default Navbar;
