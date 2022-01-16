import React from 'react';
import '../styles/Work.css';
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helpers/ProjectList';
function Work() {
	return (
		<div className='work'>
			<div className='workProject'>
				<h1>Project</h1>
			</div>
			{ProjectList.map((projectItem, key) => {
				return <ProjectItem key={key} text={projectItem.text} />;
			})}
		</div>
	);
}

export default Work;
