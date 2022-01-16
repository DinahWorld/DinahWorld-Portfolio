import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

import Galaxy from '../components/CustomLogo';
import { CustomButton } from '../components/CustomButton';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import AboutMe from './AboutMe';
import Work from './Work';
function Home() {
	return (
		<div className='container'>
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
					<Galaxy />
				</div>
			</div>
			<AboutMe />
			<Work />
		</div>
	);
}
export default Home;
