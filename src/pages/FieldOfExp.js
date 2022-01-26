import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/FieldOfExp.css';
import { PersonnalColor } from '../helpers/Color';
import { CustomButtonAboutMe as CustomButton } from '../components/CustomButton';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import {
	SkillList1,
	SkillList2,
	SkillList3,
	SkillList4,
	SkillList5,
} from '../helpers/ExperienceList';
import { ExperienceItem, LanguageItem } from '../components/ExperienceItem';

function FieldOfExp() {
	let rColor = () => {
		let r = Math.floor(Math.random() * PersonnalColor.length);
		return PersonnalColor[r];
	};
	//we don't care if all the color are the same
	let webColor = rColor();
	let guiColor = rColor();
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
							Field of <font color={rColor()}>Experience</font>
						</h1>
						<p>
							I learned a lot of programming languages and
							technologies during my university years and gained a
							lot of experience in many fields such as{' '}
							<font color={webColor}>
								<b>Web</b>
							</font>{' '}
							with <font color={webColor}>NodeJS</font>,{' '}
							<font color={webColor}>ExpressJS</font> and{' '}
							<font color={webColor}>Canva</font>,{' '}
							<font color={guiColor}>
								<b>GUI</b>
							</font>{' '}
							with <font color={guiColor}>GTK</font>,{' '}
							<font color={guiColor}>SDL2</font> and{' '}
							<font color={guiColor}>JavaFX</font>,{' '}
							<font color={rColor()}>
								<b>Network</b>
							</font>{' '}
							or{' '}
							<font color={rColor()}>
								<b>Software</b>
							</font>
							<br />
							<br />
							I'm still learning new technology like{' '}
							<font color={webColor}>ReactJS</font> framework with
							which I made this PortFolio.
							<br />
							<br />
							Here are the programming languages I have acquired :
						</p>
					</div>
					<div className='fieldExpLanguageList'>
						{SkillList1.map((item, key) => {
							console.log(item);
							return <LanguageItem key={key} img={item} />;
						})}
					</div>
					<div className='fieldExpCV'>
						<CustomButton>
							<FileUploadRoundedIcon />
							CV
						</CustomButton>
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
					<div className='fieldExpLine'>
						{SkillList5.map((item, key) => {
							return <ExperienceItem key={key} skills={item} />;
						})}{' '}
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
}

export default FieldOfExp;
