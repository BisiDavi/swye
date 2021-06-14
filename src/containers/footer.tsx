import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Logo, SocialIcons } from '../components';
import { footer } from '../styles/footer.module.css';

const Footer = () => {
    return (
        <footer className={footer}>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={2}>
                        <Logo white />
                    </Col>
                    <Col>
                        <p className='text-center mb-0'>
                            Connect with us | Home | Inquiry | Contact us |
                            Terms of Service | Privacy Policy{' '}
                        </p>
                    </Col>
                    <Col lg={1}>
                        <SocialIcons />
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
