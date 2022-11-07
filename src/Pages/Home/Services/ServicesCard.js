import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const { img, des, name, price, rating, _id } = service
    return (
        <Card style={{ width: '22rem' }}>
            <Card.Img className='card-img' variant="top" src={img} />
            <Card.Body>
                <Card.Title>
                    <h4>{name}</h4>
                    <div className='d-flex justify-content-between align-items-center mt-3 fs-6'>
                        <p>{price}</p>
                        <p>{rating}</p>
                    </div>
                </Card.Title>
                <Card.Text>
                    {
                        des.length > 100 ? des.slice(0, 100) : des
                    }
                </Card.Text>
                <Link to={`/services/${_id}`}><Button variant="primary">View Details</Button></Link>
            </Card.Body>
        </Card>
    );
};

export default ServicesCard;