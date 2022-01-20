import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function AdditionalItem({ add }) {
	const color = new Array(19);
	color['C'] = '#96A9EE';
	color['JavaScript'] = '#F1A695';
	color['ExpressJS'] = '#FFDEAD';
	color['Canvas'] = '#FFA18B';
	color['ReactJS'] = '#CC96EE';
	color['HTML'] = '#96E9EE';
	color['CSS'] = '#CAFAFD';
	color['Rust'] = '#EE96B0';
	color['GTK-RS'] = '#EE96B0';
	color['C'] = '#96A9EE';
	color['API Watson additional Translator'] = '#96A9EE';
	color['Java'] = '#EE9696';
	color['JavaFX'] = '#D65757';
	color['Android Studio'] = '#69C024';
	color['Python'] = '#96EE9F';

	let selectColor = color[add];
	return (
		<div
			className='workAdditionalItem'
			style={{
				backgroundColor: selectColor,
			}}>
			{add}
		</div>
	);
}

function ProjectItem({ text, projectName, image, additional, date }) {
	const [showProject, setShowProject] = useState(false);
	const [lastYPos, setLastYPos] = useState(0);
	useEffect(() => {
		function handleScroll() {
			const yPos = window.scrollY;
			const isScrollingUp = yPos < lastYPos;
			setShowProject(isScrollingUp);
			setLastYPos(yPos);
		}

		window.addEventListener('scroll', handleScroll, false);

		return () => {
			window.removeEventListener('scroll', handleScroll, false);
		};
	}, [lastYPos]);

	return (
		<motion.div
			className='workPresentation'
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			variants={{
				visible: { opacity: 1, scale: 1 },
				hidden: { opacity: 0, scale: 0 },
			}}>
			<div
				className='workSquare'
				style={{
					backgroundImage: `url(${image})`,
					backgroundSize: 'cover',
				}}></div>
			<div className='workInfo'>
				<div className='workProjectName'>
					<h2>{projectName}</h2>
				</div>
				<div className='workDescription'>
					<p>{text}</p>
				</div>
				<div className='workAdditional'>
					{additional.map((add, key) => {
						return <AdditionalItem key={key} add={add} />;
					})}
				</div>
			</div>
		</motion.div>
	);
}

export default ProjectItem;
