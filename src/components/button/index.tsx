import React, { FC } from 'react';
import { StyledButton } from '../../styles';

const Button: FC<ButtonProps> = ({ text, bgColor }) => {
    return <StyledButton bgColor={bgColor}>{text}</StyledButton>;
};

interface ButtonProps {
    text: string;
    bgColor: string;
}

export default Button;
