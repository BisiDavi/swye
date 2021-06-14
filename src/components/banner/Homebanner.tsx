import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Button } from '..';
import { laptopGirl } from '../../images';
import { homeBanner, imgColumn } from '../../styles/homebanner.module.css';

const Homebanner = () => {
    return (
        <Row className={`${homeBanner} row`}>
            <Col lg={6}>
                <h1>Revolutionizing</h1>
                <h1>the classroom</h1>
                <div className='divider'></div>
                <p>One platform for all, to engage ALL learners</p>
                <div className='buttonGroup d-flex align-items-center'>
                    <Button bgColor='#055EB8' text='Try it Now' />
                    <Button bgColor='#48AC15' text='Schedule Demo' />
                </div>
            </Col>
            <Col className={`position-relative ${imgColumn}`} lg={6}>
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
