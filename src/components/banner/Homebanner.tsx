import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Divider } from '@styles/.';
import { Button } from '..';
import { laptopGirl } from '@images/.';
import { homeBanner, column1, column2 } from '@styles/homebanner.module.css';

const Homebanner = () => {
    return (
        <Row className={`${homeBanner} row`}>
            <Col className={column1} lg={6}>
                <h1 className='mt-5'>Revolutionizing</h1>
                <h1>the classroom</h1>
                <Divider />
                <p className='mb-0 mt-3'>
                    One platform for all, to engage ALL learners
                </p>
                <div className='buttonGroup d-flex align-items-center mt-5'>
                    <Button bgColor='#055EB8' text='Try it Now' />
                    <Button bgColor='#48AC15' text='Schedule Demo' />
                </div>
            </Col>
            <Col className={`position-relative ${column2}`} lg={6}>
                <img
                    height='100%'
                    width='100%'
                    src={laptopGirl}
                    alt='girl learning using her laptop'
                />
            </Col>
        </Row>
    );
};

export default Homebanner;
