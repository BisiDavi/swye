import React, { FC } from 'react';
import { checkIcon } from '../../images';
import { checked, impact } from '../../styles/impact.module.css';

const Impact: FC<ImpactProps> = ({ data }) => {
    return (
        <section className={impact}>
            <h3>Impact:</h3>
            {data.map((item, index) => (
                <span className={checked} key={index}>
                    <img src={checkIcon} alt='check icon' />
                    <p>{item}</p>
                </span>
            ))}
        </section>
    );
};

interface ImpactProps {
    data: string[];
}

export default Impact;
