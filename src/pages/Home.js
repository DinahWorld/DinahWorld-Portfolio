import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
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
				<motion.div
					className='homeAnimatedLogo'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					variants={{
						visible: { opacity: 1, scale: 1 },
						hidden: { opacity: 0, scale: 0 },
					}}>
					<Galaxy />
				</motion.div>
			</div>
			<AboutMe />
			<Work />
		</div>
	);
}
export default Home;
