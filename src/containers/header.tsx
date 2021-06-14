import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Auth, Homebanner, Logo } from '../components';
import { header } from '../styles/header.module.css';

const Header = () => {
    return (
        <header className={`${header} py-4`}>
            <Container>
                <Row className='align-items-center justify-content-between'>
                    <Col lg={2}>
                        <Logo />
                    </Col>
                    <Col lg={2}>
                        <Auth />
                    </Col>
                </Row>
                <Homebanner />
            </Container>
        </header>
    );
};

export default Header;
