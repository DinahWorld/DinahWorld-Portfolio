import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import '../styles/Slider.css';

const marks = [
	{
		value: 10,
		label: 'Lycée Mozart\n      Bac SSI\n\t 2019',
	},
	{
		value: 35,
		label: 'Univ.Paris VIII\n  Bac + 1 Info\n\t2020',
	},
	{
		value: 65,
		label: 'Univ.Paris VIII\n  Bac + 2 Info\n\t2021',
	},
	{
		value: 90,
		label: 'Univ.Paris VIII\n  Bac + 3 Info\n\t2022',
	},
];

function valuetext(value) {
	return `${value}`;
}

export default function DiscreteSliderValues() {
	return (
		<Box sx={{ width: '80vw' }}>
			<Slider
				aria-label='Restricted values'
				defaultValue={65}
				marks={marks}
				getAriaValueText={valuetext}
			/>
		</Box>
	);
}
