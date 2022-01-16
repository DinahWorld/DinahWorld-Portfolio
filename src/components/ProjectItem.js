import React from 'react';

function ProjectItem({ text }) {
	return (
		<div className='workPresentation'>
			<div className='workSquare'></div>
			<div className='workDescription'>
				<p>{text}</p>
			</div>
		</div>
	);
}

export default ProjectItem;
