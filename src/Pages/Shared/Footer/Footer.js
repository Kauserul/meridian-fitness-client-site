import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer w-100 bg-secondary text-white'>
            <div className='container'>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <h1>Cookups</h1>
                            <div>
                                <h5>Email : support@cookupsapp.com</h5>
                                <p>To order or to place a complaint: +8801887454024 (Ext:01)</p>
                                <p> My Address: House: 26, Road: 7, Block: G, Banani, Dhaka - 1213.</p>
                            </div>
                        </Col>
                        
                        <Col lg='3'>
                            <ul>
                                <li>About Cookups</li>
                                <li>Blogs</li>
                                <li>FAQ</li>
                                <li>Community</li>
                            </ul>
                        </Col>
                        <Col lg='3'>
                            <ul>
                                <li>Contact Us</li>
                                <li>Privacy Policy</li>
                                <li>Terms & condition</li>
                            </ul>
                        </Col>
                        <hr />
                        <Col lg='9'>

                        </Col>
                        <Col lg='3'>
                            <p><small>Copyright Cookups Technologies Limited</small></p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Footer;