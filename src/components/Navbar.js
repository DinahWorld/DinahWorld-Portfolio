import '../styles/Navbar.css';

import React from 'react';
import { Link } from 'react-router-dom';
import { CustomButtonFooter1, CustomButtonFooter2 } from './CustomButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Navbar() {
	return (
		<div className='navbar'>
			<CustomButtonFooter1>
				<GitHubIcon />
			</CustomButtonFooter1>
			<CustomButtonFooter2>
				<LinkedInIcon />
			</CustomButtonFooter2>
		</div>
	);
}

export default Navbar;
