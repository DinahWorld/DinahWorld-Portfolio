import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

import CustomLogo from '../components/CustomLogo';
import { CustomButton } from '../components/CustomButton';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
function Home() {
	return (
		<div className='home'>
			<div className='homeTitle'>
				<h1>
					Hi. I'm Dinath. <br /> A CS Student.
				</h1>
				<p>Welcome to my DinahWorld</p>
				<Link to='/AboutMe'>
					<CustomButton>
						<ArrowUpwardRoundedIcon />
					</CustomButton>
				</Link>
			</div>
			<div className='homeAnimatedLogo'>
				<CustomLogo />
			</div>
		</div>
	);
}
export default Home;
