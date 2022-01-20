import React from 'react';
import Button from '@mui/material/Button';
import ButtonUnstyled, {
	buttonUnstyledClasses,
} from '@mui/base/ButtonUnstyled';

import { styled } from '@mui/system';

const StyledButton = styled(Button)`
	aspect-ratio: 1;
	color: white;
	width: 4vw;
	height: 4vw;
	transition: all 150ms ease;
	border-radius: 100%;

	&:hover {
		background-color: #fdc45c;
	}
	&:focus {
		outline: none;
		background-color: #e0a9b4;
	}
`;
const StyledButtonFooter1 = styled(Button)`
	aspect-ratio: 1;
	color: white;
	transition: all 150ms ease;
	border-radius: 100%;
	margin-bottom: 30px;
	margin-left: 30px;
	&:hover {
		background-color: #c892ff;
	}
	&:focus {
		outline: none;
		background-color: #e0a9b4;
	}
`;
const StyledButtonFooter2 = styled(Button)`
	aspect-ratio: 1;
	color: white;
	transition: all 150ms ease;
	border-radius: 100%;
	margin-bottom: 30px;
	margin-left: 30px;
	&:hover {
		background-color: #fdc45c;
	}
	&:focus {
		outline: none;
		background-color: #e0a9b4;
	}
`;
const color = {
	500: '#b6afff',
	600: '#fdc45c',
	700: '#e0a9b4',
};

const CustomButtonRoot = styled('span')`
	font-family: IBM Plex Sans, sans-serif;
	font-weight: bold;
	font-size: 0.875rem;
	background-color: ${color[500]};
	padding: 10px 60px;
	border-radius: 90px;
	color: white;
	transition: all 150ms ease;
	cursor: pointer;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		background-color: ${color[600]};
	}

	&.${buttonUnstyledClasses.active} {
		background-color: ${color[700]};
	}

	&.${buttonUnstyledClasses.focusVisible} {
		box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
			0 0 0 5px rgba(0, 127, 255, 0.5);
		outline: none;
	}

	&.${buttonUnstyledClasses.disabled} {
		opacity: 0.5;
		cursor: not-allowed;
	}
`;

export function CustomButton(props) {
	return (
		<ButtonUnstyled
			sx={{ minWidth: 0 }}
			{...props}
			component={StyledButton}
		/>
	);
}

export function CustomButtonFooter1(props) {
	return (
		<ButtonUnstyled
			sx={{ minWidth: 0 }}
			{...props}
			component={StyledButtonFooter1}
		/>
	);
}
export function CustomButtonFooter2(props) {
	return (
		<ButtonUnstyled
			sx={{ minWidth: 0 }}
			{...props}
			component={StyledButtonFooter2}
		/>
	);
}

export function CustomButtonAboutMe(props) {
	return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}
