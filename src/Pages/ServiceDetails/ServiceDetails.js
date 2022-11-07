import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ServiceDetails = () => {

    const service = useLoaderData();

    const {img, _id, name, des, price, rating} = service
    return (
        <Container className='mt-5 mb-5'>
            <Row>
                <Col lg='6'>
                    <img  style={{height : '500px', width:'32rem'}} src={img} alt="" srcset="" />
                </Col>
                <Col lg='6'>
                    <h2>{name}</h2>
                    <div className='d-flex justify-content-between align-items-center mt-3 fs-5'>
                        <p>Price : {price}</p>
                        <p>Rating : {rating}</p>
                    </div>
                    <p className='fs-4'>{des}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default ServiceDetails;