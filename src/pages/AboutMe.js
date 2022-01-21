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
import { styled } from '@mui/material/styles';
import { ReactComponent as World } from '../assets/World.svg';
import { ReactComponent as Meteor } from '../assets/Meteor.svg';
import { CustomButtonAboutMe as CustomButton } from '../components/CustomButton';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import { PersonnalColor } from '../helpers/Color';

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
		label: '‍🎓',
	},
];

const AboutMeSlider = styled(Slider)({
	'& .MuiSlider-markLabel': {
		fontFamily: 'Montserrat, sans-serif',
		fontSize: '15px',
		fontWeight: '500',
		color: 'white',
		whiteSpace: 'break-spaces',
		alignItems: 'center',
		justifyContent: 'center',
		['@media (max-width:1100px)']: {
			fontSize: '10px',
		},
	},
	'& .MuiSlider-track': {
		background: 'linear-gradient(#e0a9b4, #cc96ee)',
		border: 'none',
		height: '15px',
		['@media (max-width:820px)']: {
			height: '10px',
		},
	},
	'& .MuiSlider-rail': {
		height: '15px',
		color: '#293757',
		['@media (max-width:820px)']: {
			height: '10px',
		},
	},
	'& .MuiSlider-thumb ': {
		background: 'linear-gradient(#e0a9b4, #cc96ee)',
		width: '50px',
		height: '50px',
		['@media (max-width:820px)']: {
			width: '30px',
			height: '30px',
		},
	},
	'&.MuiSlider-mark': {
		opacity: '0%',
	},
});

function AboutMe() {
	let randomNumber = () => Math.floor(Math.random() * PersonnalColor.length);
	let randomColor1 = PersonnalColor[randomNumber()];
	let randomColor2 = PersonnalColor[randomNumber()];

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
		<div className='aboutMe'>
			<div className='aboutMeteor'>
				<Meteor />
			</div>
			<motion.div
				className='aboutMeResume'
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				variants={{
					visible: { opacity: 1, translateX: 0 },
					hidden: { opacity: 0, translateX: -50 },
				}}>
				<div
					className='aboutMeSquare'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					variants={{
						visible: { opacity: 1, translateX: 0 },
						hidden: { opacity: 0, translateX: -50 },
					}}>
					<h1>About Me</h1>
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
						<motion.div
							className='aboutMeSlider'
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							variants={{
								visible: { opacity: 1, translateX: 0 },
								hidden: { opacity: 0, translateX: -50 },
							}}>
							<Box
								sx={{
									marginLeft: '10px',
									marginRight: '10px',
									width: '500px',

									['@media (max-width:1100px)']: {
										width: '350px',
									},
								}}>
								<AboutMeSlider
									aria-label='Restricted values'
									defaultValue={85}
									marks={marks}
									getAriaValueText={changeImage}
								/>
							</Box>
						</motion.div>
					</AnimatePresence>
				</div>
				<motion.div
					className='aboutMeText'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					variants={{
						visible: { opacity: 1, translateX: 0 },
						hidden: { opacity: 0, translateX: -50 },
					}}>
					<div className='aboutMeTitle'>
						<h1>
							I'm <font color={randomColor1}>Dinath,</font> a{' '}
							<font color={randomColor2}>CS Student</font>
						</h1>
					</div>
					<p>
						Je m'apelle Dinath et je suis développeur et étudiant à
						l'Université de Paris 8 en 3e année de Licence
						Informatique
						<br />
						<br />
						Ces trois année m'ont permis de découvrire la
						programmation et de concevoir plusieurs programmes
						telles que des Jeux Web, des Applications Bureautique ou
						bien même une Application Mobile !
						<br />
						<br />
						J'étais Tuteur Etudiant en Informatique durant l'année
						2021, c'étais une assez bonne expérience
						<br />
						<br />
						En dehors de l'école et la programmation, je vais
						souvent à Fitness Park pour bouger un peu ( le métier de
						développeur n'est pas facile haha ).
					</p>
					<CustomButton>
						<FileUploadRoundedIcon />
						CV
					</CustomButton>
				</motion.div>
			</motion.div>

			<motion.div
				className='aboutWorld'
				animate={{ rotate: 360 }}
				transition={{ ease: 'linear', duration: 20, repeat: Infinity }}>
				<World />
			</motion.div>
		</div>
	);
}

export default AboutMe;
