import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { CustomButtonFooter1, CustomButtonFooter2 } from './CustomButton';

import '../styles/Footer.css';

function Footer() {
	return (
		<div className='footer'>
			<CustomButtonFooter1>
				<GitHubIcon />
			</CustomButtonFooter1>
			<CustomButtonFooter2>
				<LinkedInIcon />
			</CustomButtonFooter2>
		</div>
	);
}

export default Footer;
