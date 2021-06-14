import React, { FC } from 'react';
import { button } from '../../styles/button.module.css';

const Button: FC<ButtonProps> = ({ text, bgColor }) => {
    return (
        <button className={button} style={{ background: bgColor }}>
            {text}
        </button>
    );
};

interface ButtonProps {
    text: string;
    bgColor: string;
}

export default Button;
