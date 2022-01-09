import React from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import '../styles/AboutMe.css';
import face from '../assets/face_001.png';

function AboutMe() {
	return (
		<div>
			<div className='aboutMe'>
				<div className='aboutMeSquare'>
					<motion.div
						animate={{
							scale: 1,
						}}
					>
						<div className='aboutMyFace'>
							<img src={face} />
						</div>
					</motion.div>
				</div>
				<div className='aboutMeText'>
					<h1>I'm Dinath, a CS Student</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Atque, velit,
						<br /> corrupti reprehenderit doloremque ducimus iusto
						laudantium quisquam earum provident quidem dolores
						itaque debitis,
						<br />
						<br /> sapiente tenetur quaerat ullam id nemo
						asperiores.
					</p>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
