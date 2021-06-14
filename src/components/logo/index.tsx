import React, { FC } from 'react';
import { logo, logoWhite } from '../../images';

const Logo: FC<LogoProps> = ({ white }) => {
    const ifWhite = white ? logoWhite : logo;

    return <div className='logo'>{<img src={ifWhite} alt='logo' />}</div>;
};
interface LogoProps {
    white?: boolean;
}

export default Logo;
