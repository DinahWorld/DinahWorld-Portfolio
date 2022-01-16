import React, { useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import '../styles/AboutMe.css';
import faceLycee from '../assets/face_lycee.png';
import faceBac1 from '../assets/face_bac_0.png';
import faceBac2 from '../assets/face_bac_1.png';
import faceBac3 from '../assets/face_bac_2.png';
import faceDiplome from '../assets/face_bac_3.png';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
//import '../styles/Slider.css';
import { styled } from '@mui/material/styles';
const marks = [
	{
		value: 10,
		label: '\t   |\nLycée Mozart\n      Bac SSI\n\t 2019',
	},
	{
		value: 35,
		label: '\t   |\nUniv.Paris VIII\n  Bac + 1 Info\n\t2020',
	},
	{
		value: 65,
		label: '\t   |\nUniv.Paris VIII\n  Bac + 2 Info\n\t2021',
	},
	{
		value: 90,
		label: '\t   |\nUniv.Paris VIII\n  Bac + 3 Info\n\t2022',
	},
];

const AboutMeSlider = styled(Slider)({
	'& .MuiSlider-markLabel': {
		fontFamily: 'Montserrat, sans-serif',
		fontSize: '1vw',
		color: 'white',
		whiteSpace: 'break-spaces',
		alignItems: 'center',
		justifyContent: 'center',
	},
	'& .MuiSlider-track': {
		background: 'linear-gradient(#e0a9b4, #cc96ee)',
		border: 'none',
	},
	'& .MuiSlider-rail': {
		height: '0.7vw',
		color: '#293757',
	},
	'& .MuiSlider-thumb ': {
		background: 'linear-gradient(#e0a9b4, #cc96ee)',
		width: '3vw',
		height: '3vw',
	},
	'&.MuiSlider-mark': {
		opacity: '0%',
	},
});

function AboutMe() {
	const controls = useAnimation();
	const [openLinks, setOpenLinks] = useState(3);
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
						<h1>
							I'm <font color='#fdc45c'>Dinath,</font> a CS
							Student
						</h1>
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
						<AboutMeSlider
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
