import React from 'react';
import '../styles/Work.css';
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helpers/ProjectList';
import { ReactComponent as World } from '../assets/World.svg';
import { motion, AnimatePresence } from 'framer-motion';

function Work() {
	return (
		<AnimatePresence>
			<motion.div className='work'>
				<h1>Project</h1>
				<div className='workProject'>
					{ProjectList.map((projectItem, key) => {
						return (
							<ProjectItem
								key={key}
								text={projectItem.text}
								projectName={projectItem.projectName}
								image={projectItem.image}
								additional={projectItem.additional}
								date={projectItem.date}
							/>
						);
					})}
				</div>
				<div className='workWorld'>
					<World />
				</div>
				<div className='workMiniWorld'>
					<World />
				</div>
			</motion.div>
		</AnimatePresence>
	);
}

export default Work;
