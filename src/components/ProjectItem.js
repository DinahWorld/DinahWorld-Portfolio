import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import { CustomButtonFooter1 } from './CustomButton';

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
	color['API Watson Additional Translator'] = '#96A9EE';
	color['GL4D'] = '#96A9EE';
	color['Java'] = '#EE9696';
	color['JavaFX'] = '#D65757';
	color['Android Studio'] = '#D7EE96';
	color['Python'] = '#96EE9F';

	let selectColor = color[add];
	return (
		<motion.div
			className='workAdditionalItem'
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
			variants={{
				visible: { opacity: 1, translateX: 0 },
				hidden: { opacity: 0, translateX: -50 },
			}}
			transition={{ duration: 0.3 }}
			whileHover={{
				scale: 1.1,
			}}
			style={{
				backgroundColor: selectColor,
			}}>
			{add}
		</motion.div>
	);
}

function ProjectItem({
	text,
	projectName,
	image,
	additional,
	github,
	date,
	index,
}) {
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
				visible: { opacity: 1, translateX: 0 },
				hidden: { opacity: 0, translateX: -50 },
			}}>
			<motion.div
				className='workImg'
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				variants={{
					visible: { opacity: 1, translateX: 0 },
					hidden: { opacity: 0, translateX: -50 },
				}}
				transition={{ duration: 0.3 }}
				whileHover={{
					scale: 1.1,
				}}>
				<div
					className='workSquare'
					style={{
						backgroundImage: `url(${image})`,
						backgroundSize: 'cover',
					}}></div>
			</motion.div>
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
			<div className='workGit'>
				<CustomButtonFooter1 href={github}>
					<GitHubIcon />
				</CustomButtonFooter1>
			</div>
		</motion.div>
	);
}

export default ProjectItem;
