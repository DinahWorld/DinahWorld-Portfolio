import React from 'react';
import Button from '@mui/material/Button';
import ButtonUnstyled, {
	buttonUnstyledClasses,
} from '@mui/base/ButtonUnstyled';

import { styled } from '@mui/system';

const StyledButton = styled(Button)`
	font-family: 'Montserrat', sans-serif;
	font-weight: 500;
	font-size: 0.875rem;

	background-color: #c892ff;
	color: white;
	padding: 0.3vh 10vw;
	transition: all 150ms ease;

	&:hover {
		background-color: #fdc45c;
	}
	&:focus {
		background-color: #e0a9b4;
	}
`;
function CustomButton(props) {
	return <ButtonUnstyled {...props} component={StyledButton} />;
}
export default CustomButton;
