import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { CustomButtonFooter1, CustomButtonFooter2 } from './CustomButton';

import '../styles/Footer.css';

function Footer() {
	return (
		<div className='footer'>
			<div className='footerIcons'>
				<CustomButtonFooter1>
					<GitHubIcon />
				</CustomButtonFooter1>
				<CustomButtonFooter2>
					<LinkedInIcon />
				</CustomButtonFooter2>
			</div>
		</div>
	);
}

export default Footer;
