import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Logo, SocialIcons } from '../components';
import { StyledFooter } from '../styles';

const Footer = () => {
    return (
        <StyledFooter>
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
        </StyledFooter>
    );
};

export default Footer;
