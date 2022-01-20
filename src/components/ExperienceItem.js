import React from 'react';
import { motion } from 'framer-motion';

const colors = [
	'#C892FF',
	'#FFAFAF',
	'#B9B2FF',
	'#D7CAF2',
	'#DC96EE',
	'#EE96B0',
	'#FDAFFF',
	'#FF92CD',
	'#FFC092',
	'#FFC7AF',
];
function ExperienceItem({ skills }) {
	let randomNumber = Math.floor(Math.random() * colors.length);
	let randomColor = colors[randomNumber];

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
