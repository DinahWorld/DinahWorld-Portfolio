import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MarkunreadRoundedIcon from '@mui/icons-material/MarkunreadRounded';
import {
	CustomButtonFooter1,
	CustomButtonFooter2,
	CustomButtonFooter3,
} from './CustomButton';
import '../styles/HomeFooter.css';

function OpenMail() {
	return (
		<motion.div
			className='homeFooterMail'
			layout
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}>
			dinath.sh@outlook.fr
		</motion.div>
	);
}

function Footer() {
	const [isOpen, setIsOpen] = useState(false);
	const toggleOpen = () => setIsOpen(!isOpen);

	return (
		<motion.div
			className='homeFooter'
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			variants={{
				visible: { opacity: 1, translateX: 0 },
				hidden: { opacity: 0, translateX: -50 },
			}}>
			<CustomButtonFooter1 href='https://github.com/DinahWorld'>
				<GitHubIcon />
			</CustomButtonFooter1>
			<CustomButtonFooter2 href='https://www.linkedin.com/in/dinath-sh'>
				<LinkedInIcon />
			</CustomButtonFooter2>
			<motion.div layout onClick={toggleOpen}>
				<CustomButtonFooter3>
					<MarkunreadRoundedIcon />
				</CustomButtonFooter3>
			</motion.div>
			<AnimatePresence>{isOpen && <OpenMail />}</AnimatePresence>
		</motion.div>
	);
}

export default Footer;
