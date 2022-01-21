import React from 'react';
import { motion } from 'framer-motion';
import { PersonnalColor } from '../helpers/Color';

export function ExperienceItem({ skills }) {
	let randomNumber = Math.floor(Math.random() * PersonnalColor.length);
	let randomColor = PersonnalColor[randomNumber];
	let fieldText = () => {
		switch (skills) {
			case 'ReactJS':
			case 'Communication':
			case 'Anglais':
				return 'fieldExpBoxFirst';
				break;
			case 'JavaFX':
			case 'Software':
			case 'Tamil':
				return 'fieldExpBoxLast';
				break;
			default:
				return 'fieldExpBox';
		}
	};
	return (
		<motion.div
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
			transition={{ duration: 1 }}
			variants={{
				visible: { opacity: 1, translateX: 0 },
				hidden: { opacity: 0, translateX: -50 },
			}}
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

export function LanguageItem({ img }) {
	return (
		<motion.div
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			variants={{
				visible: { opacity: 1, translateX: 0 },
				hidden: { opacity: 0, translateX: -50 },
			}}
			whileHover={{
				scale: 1.1,
			}}
			className='fieldExpLanguage'
			style={{
				backgroundColor: '#3B4A61',
				backgroundImage: `url(${img})`,
				backgroundSize: 'cover',
			}}></motion.div>
	);
}
