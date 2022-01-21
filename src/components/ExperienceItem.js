import React from 'react';
import { motion } from 'framer-motion';
import { PersonnalColor } from '../helpers/Color';

function ExperienceItem({ skills }) {
	let randomNumber = Math.floor(Math.random() * PersonnalColor.length);
	let randomColor = PersonnalColor[randomNumber];
	let fieldText = () => {
		switch (skills) {
			case 'PHP':
			case 'ReactJS':
			case 'Communication':
			case 'Anglais':
				return 'fieldExpBoxFirst';
				break;
			case 'C#':
			case 'Photoshop':
			case 'Enseignement':
			case 'Tamil':
				return 'fieldExpBoxLast';
				break;
			default:
				return 'fieldExpBox';
		}
	};
	return (
		<motion.div
			whileHover={{
				scale: 1.1,
			}}
			className={fieldText()}
			style={{
				backgroundColor: randomColor,
			}}>
			<h3>{skills}</h3>
		</motion.div>
	);
}

export default ExperienceItem;
