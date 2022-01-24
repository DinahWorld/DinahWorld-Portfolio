import React from 'react';
import { motion } from 'framer-motion';
import { PersonnalColor } from '../helpers/Color';

export function ExperienceItem({ skills }) {
	let randomNumber = Math.floor(Math.random() * PersonnalColor.length);
	let randomColor = PersonnalColor[randomNumber];
	let fieldText = () => {
		switch (skills) {
			case 'Android Studio':
			case 'Communication':
			case 'English':
			case 'Web':
				return 'fieldExpBoxFirst';
				break;
			case 'JavaFX':
			case 'LeaderShip':
			case 'Tamil':
			case 'Mobile':
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
			variants={{
				visible: { opacity: 1, translateX: 0 },
				hidden: { opacity: 0, translateX: -50 },
			}}
			transition={{ duration: 0.2 }}
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
			transition={{ duration: 0.2 }}
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
