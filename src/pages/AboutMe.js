import React, { useState } from 'react';
import {
	motion,
	AnimateSharedLayout,
	AnimatePresence,
	useAnimation,
} from 'framer-motion';
import '../styles/AboutMe.css';
import faceLycee from '../assets/face_lycee.png';
import faceBac1 from '../assets/face_bac_0.png';
import faceBac2 from '../assets/face_bac_1.png';
import faceBac3 from '../assets/face_bac_2.png';
import faceDiplome from '../assets/face_bac_3.png';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import '../styles/Slider.css';

const marks = [
	{
		value: 10,
		label: 'Lycée Mozart\n      Bac SSI\n\t 2019',
	},
	{
		value: 35,
		label: 'Univ.Paris VIII\n  Bac + 1 Info\n\t2020',
	},
	{
		value: 65,
		label: 'Univ.Paris VIII\n  Bac + 2 Info\n\t2021',
	},
	{
		value: 90,
		label: 'Univ.Paris VIII\n  Bac + 3 Info\n\t2022',
	},
];

function AboutMe() {
	const controls = useAnimation();
	const [openLinks, setOpenLinks] = useState(3);
	const image = (value) => {
		controls.start({
			scale: [1, 1.2, 1],
			transition: { duration: 0.5 },
		});
	};
	const changeImage = (value) => {
		if (value >= 0 && value < 10) {
			setOpenLinks(0);
		} else if (value >= 10 && value < 35) {
			setOpenLinks(1);
		} else if (value >= 35 && value < 65) {
			setOpenLinks(2);
		} else if (value >= 65 && value < 90) {
			setOpenLinks(3);
		} else if (value >= 90 && value < 100) {
			setOpenLinks(4);
		} else {
		}
	};
	controls.start({
		scale: [1, 1.1, 1],
		transition: { duration: 0.5 },
	});
	return (
		<div>
			<div className='aboutMe'>
				<div className='aboutMeResume'>
					<div className='aboutMeSquare'>
						<AnimatePresence>
							<motion.div animate={controls}>
								<div className='aboutMyFace'>
									<motion.img
										animate={controls}
										src={
											openLinks === 0
												? faceLycee
												: openLinks === 1
												? faceBac1
												: openLinks === 2
												? faceBac2
												: openLinks === 3
												? faceBac3
												: faceDiplome
										}
									/>
								</div>
							</motion.div>
						</AnimatePresence>
					</div>
					<div className='aboutMeText'>
						<h1>I'm Dinath, a CS Student</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Atque, velit,
							<br /> corrupti reprehenderit doloremque ducimus
							iusto laudantium quisquam <br />
							earum provident quidem dolores itaque debitis,
							<br />
							<br /> sapiente tenetur quaerat ullam id nemo
							asperiores.
						</p>
					</div>
				</div>
				<div className='aboutMeSlider'>
					<Box sx={{ width: '80vw' }}>
						<Slider
							aria-label='Restricted values'
							defaultValue={85}
							marks={marks}
							getAriaValueText={changeImage}
						/>
					</Box>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
