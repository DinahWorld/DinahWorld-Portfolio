import React from 'react';
import '../styles/Home.css';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CustomLogo from './CustomLogo';
import CustomButton from './CustomButton';

function Home() {
	return (
		<div className='home'>
			<div className='homeTitle'>
				<h1>
					Hi. I'm Dinath. <br /> A CS Student.
				</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				<Stack spacing={2} direction='column'>
					<CustomButton>Work</CustomButton>
					<CustomButton>About Me</CustomButton>
				</Stack>
			</div>
			<div className='homeAnimatedLogo'>
				<CustomLogo />
			</div>
		</div>
	);
}
export default Home;
