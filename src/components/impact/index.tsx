import React, { FC } from 'react';
import { StyledImpactSection } from 'src/styles';
import { checkIcon } from '../../images';

const Impact: FC<ImpactProps> = ({ data }) => {
    return (
        <StyledImpactSection>
            <h3>Impact:</h3>
            {data.map((item, index) => (
                <span key={index}>
                    <img src={checkIcon} alt='check icon' />
                    <p>{item}</p>
                </span>
            ))}
        </StyledImpactSection>
    );
};

interface ImpactProps {
    data: string[];
}

export default Impact;
