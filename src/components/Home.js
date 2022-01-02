import React from 'react';
import '../styles/Home.css';
import { ReactComponent as HomeLogo } from '../assets/homeLogo.svg';

function Home() {
	return (
		<div className='home'>
			<div className='homeLeftSide'>
				<h1>
					Hi. I'm Dinath. <br /> A CS Student
				</h1>
			</div>
			<div className='homeRightSide'>
				<HomeLogo />
			</div>
		</div>
	);
}

export default Home;
