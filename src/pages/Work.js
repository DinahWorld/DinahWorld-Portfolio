import React from 'react';
import '../styles/Work.css';
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helpers/ProjectList';
function Work() {
	return (
		<div className='work'>
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
		</div>
	);
}

export default Work;
