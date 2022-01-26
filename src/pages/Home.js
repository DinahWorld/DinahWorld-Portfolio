import React from 'react';
import '../styles/Home.css';
import { motion } from 'framer-motion';
import Galaxy from '../components/CustomLogo';
import HomeFooter from '../components/HomeFooter';
import AboutMe from './AboutMe';
import Work from './Work';
import FieldOfExp from './FieldOfExp';
function Home() {
	return (
		<div className='container'>
			<div className='home'>
				<motion.div
					className='homeTitle'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					variants={{
						visible: { opacity: 1, translateY: 0 },
						hidden: { opacity: 0, translateY: 50 },
					}}>
					<h1>
						Hi. I'm Dinath. <br /> A CS Student.
					</h1>
				</motion.div>
				<motion.div
					className='homeSubTitle'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					variants={{
						visible: { opacity: 1, translateY: 0 },
						hidden: { opacity: 0, translateY: 50 },
					}}>
					<p>Welcome to my DinahWorld</p>
				</motion.div>
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
			<HomeFooter />
			<AboutMe />
			<FieldOfExp />
			<Work />
		</div>
	);
}
export default Home;
