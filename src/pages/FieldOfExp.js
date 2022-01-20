import React from 'react';
import { motion } from 'framer-motion';
import '../styles/FieldOfExp.css';
import {
	SkillList1,
	SkillList2,
	SkillList3,
	SkillList4,
} from '../helpers/ExperienceList';
import ExperienceItem from '../components/ExperienceItem';

function FieldOfExp() {
	return (
		<motion.div
			className='FieldExp'
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			variants={{
				visible: { opacity: 1, scale: 1 },
				hidden: { opacity: 0, scale: 0 },
			}}>
			<div className='FieldExpResume'>
				<h1>Field of Experience</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Atque, velit,
					<br /> corrupti reprehenderit doloremque ducimus iusto
					laudantium quisquam <br />
					earum provident quidem dolores itaque debitis,
					<br />
					<br /> sapiente tenetur quaerat ullam id nemo asperiores.{' '}
				</p>
			</div>
			<div className='FieldExpList'>
				<div className='FieldExpLine'>
					{SkillList1.map((item, key) => {
						return <ExperienceItem key={key} skills={item} />;
					})}
				</div>
				<div className='FieldExpLine'>
					{SkillList2.map((item, key) => {
						return <ExperienceItem key={key} skills={item} />;
					})}
				</div>
				<div className='FieldExpLine'>
					{SkillList3.map((item, key) => {
						return <ExperienceItem key={key} skills={item} />;
					})}{' '}
				</div>
				<div className='FieldExpLine'>
					{SkillList4.map((item, key) => {
						return <ExperienceItem key={key} skills={item} />;
					})}{' '}
				</div>
			</div>
		</motion.div>
	);
}

export default FieldOfExp;