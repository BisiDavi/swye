import React, { FC } from 'react';
import { Row } from 'react-bootstrap';
import { StyledImpactSection } from '../../styles';
import { checkIcon, arrow } from '../../images';

const Impact: FC<ImpactProps> = ({ data }) => {
    return (
        <Row>
            <StyledImpactSection className='col-12 p-5'>
                <img src={arrow} className='arrow' alt='arrow' />
                <h3>Impact:</h3>
                <div className='d-flex align-items-center justify-content-center'>
                    {data.map((item, index) => (
                        <span className='features' key={index}>
                            <img src={checkIcon} alt='check icon' />
                            <p>{item}</p>
                        </span>
                    ))}
                </div>
            </StyledImpactSection>
        </Row>
    );
};

interface ImpactProps {
    data: string[];
}

export default Impact;
