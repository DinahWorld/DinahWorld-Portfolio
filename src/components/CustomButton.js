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
