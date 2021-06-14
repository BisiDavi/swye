import React from 'react';
import { linkedin, twitter } from '../../images';

const SocialIcons = () => {
    return (
        <div className='social-icon d-flex align-items-center'>
            <img className='mx-2' src={twitter} alt='twitter' />
            <img className='mx-2' src={linkedin} alt='linkedin' />
        </div>
    );
};

export default SocialIcons;
