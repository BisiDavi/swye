import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Impact from '../impact';

const Article: FC<ArticleProps> = ({ data }) => {
    const { image, inverted, title, description, impact, brand } = data;
    return (
        <Container as='section' fluid>
            {inverted ? (
                <Row className='p-5'>
                    <Col lg={6}>
                        <h6>
                            <span>SWYE</span>
                            {brand}
                        </h6>
                        <h3 className='mt-2 mb-5'>{title}</h3>
                        <p>{description}</p>
                    </Col>
                    <Col lg={6}>{image && <img src={image} alt={title} />}</Col>
                </Row>
            ) : (
                <Row className='p-5'>
                    <Col lg={6}>{image && <img src={image} alt={title} />}</Col>
                    <Col lg={6}>
                        <h6>
                            <span>SWYE</span>
                            {brand}
                        </h6>
                        <h3 className='mt-2 mb-5'>{title}</h3>
                        <p>{description}</p>
                    </Col>
                </Row>
            )}
            {impact && <Impact data={impact} />}
        </Container>
    );
};

interface ArticleProps {
    data: {
        image?: string;
        title: string;
        brand?: string;
        description: string;
        impact: string[];
        inverted?: boolean;
    };
}

export default Article;