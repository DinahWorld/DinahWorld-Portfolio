import React from 'react';
import '../styles/Home.css';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CustomLogo from './CustomLogo';
import { CustomButton } from './CustomButton';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
function Home() {
	return (
		<div className='home'>
			<div className='homeTitle'>
				<h1>
					Hi. I'm Dinath. <br /> A CS Student.
				</h1>
				<p>Welcome in my DinahWorld</p>
				<CustomButton>
					<ArrowUpwardRoundedIcon />
				</CustomButton>
			</div>
			<div className='homeAnimatedLogo'>
				<CustomLogo />
			</div>
		</div>
	);
}
export default Home;
