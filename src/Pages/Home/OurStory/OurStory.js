import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import myStory from '../../../img/MyStory.jpg'

const OurStory = () => {
    
    return (
        <Container>
            <Row>
                <Col lg='6'>
                    <img className='img-fluid rounded' src={myStory} alt="" />
                </Col>
                <Col lg='6'>
                    <h2 className='text-center text-primary'>My Story</h2>
                    <p className='fs-4 ms-3'>Founded during the height of COVID-19 in 2020 as a platform for those who lost their jobs to make a living through their passion to cook, HomeMeal has grown to become a community-based marketplace that connects local chefs with customers craving authentic and high-quality homemade food. At HomeMeal, we empower talented home chefs to turn their passion into a business by sharing their culture with others through the love for food. Our C02 neutral delivery service also brings the food right to your doorstep without any food waste!</p>
                </Col>
            </Row>
        </Container>
    );
};

export default OurStory;