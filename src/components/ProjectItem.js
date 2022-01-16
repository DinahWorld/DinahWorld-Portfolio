import React, { useStat, useEffect } from 'react';
import { motion } from 'framer-motion';
function AdditionalItem({ add }) {
	return <div className='workAdditionalItem'>{add}</div>;
}

function ProjectItem({ text, projectName, image, additional }) {
	const showProject = true;
	const [lastYPos, setLastYPos] = use;

	return (
		<motion.div
			className='workPresentation'
			animate={{ opacity: 1 }}
			initial={{ opacity: showProject ? 0 : 1 }}>
			<div
				className='workSquare'
				style={{
					backgroundImage: `url(${image})`,
					backgroundSize: '64px',
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
