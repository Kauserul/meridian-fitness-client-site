import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer w-100'>
            <div className='container'>
                <Container>
                    <Row>
                        <Col lg='4'>

                        </Col>
                        <Col lg='4'>
                            <h3>Content Me</h3>
                        </Col>
                        <Col lg='4'>
                            <h3>Follow Me</h3>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Footer;