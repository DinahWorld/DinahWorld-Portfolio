import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/FieldOfExp.css';
import { PersonnalColor } from '../helpers/Color';

import {
	SkillList1,
	SkillList2,
	SkillList3,
	SkillList4,
} from '../helpers/ExperienceList';
import { ExperienceItem, LanguageItem } from '../components/ExperienceItem';

function FieldOfExp() {
	let randomNumber = Math.floor(Math.random() * PersonnalColor.length);
	let randomColor = PersonnalColor[randomNumber];

	return (
		<AnimatePresence>
			<motion.div
				className='fieldExp'
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				variants={{
					visible: { opacity: 1, translateX: 0 },
					hidden: { opacity: 0, translateX: -50 },
				}}>
				<div className='fieldExpResume'>
					<div className='fieldExpText'>
						<h1>
							Field of <font color={randomColor}>Experience</font>
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Atque, velit,
							<br /> corrupti reprehenderit doloremque ducimus
							iusto laudantium quisquam <br />
							earum provident quidem dolores itaque debitis,
							<br />
							<br /> sapiente tenetur quaerat ullam id nemo
							asperiores. Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Sunt maiores ullam cum odit culpa
							laudantium. Voluptas nostrum optio eveniet corrupti
							ducimus facilis deserunt voluptatibus, fugit tenetur
							pariatur dolore tempore rerum.
						</p>
					</div>
					<div className='fieldExpLanguageList'>
						{SkillList1.map((item, key) => {
							console.log(item);
							return <LanguageItem key={key} img={item} />;
						})}
					</div>
				</div>
				<div className='fieldExpList'>
					<div className='fieldExpLine'>
						{SkillList2.map((item, key) => {
							return <ExperienceItem key={key} skills={item} />;
						})}
					</div>
					<div className='fieldExpLine'>
						{SkillList3.map((item, key) => {
							return <ExperienceItem key={key} skills={item} />;
						})}{' '}
					</div>
					<div className='fieldExpLine'>
						{SkillList4.map((item, key) => {
							return <ExperienceItem key={key} skills={item} />;
						})}{' '}
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
}

export default FieldOfExp;
