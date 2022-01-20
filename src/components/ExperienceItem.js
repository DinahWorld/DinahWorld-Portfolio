import React from 'react';
import { motion } from 'framer-motion';
import { PersonnalColor } from '../helpers/Color';

function ExperienceItem({ skills }) {
	let randomNumber = Math.floor(Math.random() * PersonnalColor.length);
	let randomColor = PersonnalColor[randomNumber];

	return (
		<motion.div
			whileHover={{
				scale: 1.1,
			}}
			className='FieldExpBox'
			style={{
				backgroundColor: randomColor,
			}}>
			<h3>{skills}</h3>
		</motion.div>
	);
}

export default ExperienceItem;
