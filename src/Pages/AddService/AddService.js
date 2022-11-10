import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import useTitle from '../../Hooks/useTitle';
import { ToastContainer, toast } from 'react-toastify';

const AddService = () => {
    useTitle("Add Service")
    const handleAddFood = e =>{
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const rating = form.rating.value;
        const img = form.img.value;
        const des = form.des.value;
        const price = form.price.value;

        const food = {
            name, 
            rating,
            img,
            des,
            price
        }

        fetch('https://meridian-fitness-server.vercel.app/services', {
            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(food)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.acknowledged){
                toast.success('Service added')
            }
        })
        
    }
    return (
        <Form onSubmit={handleAddFood} className='container mt-5 mb-5 w-50 border p-4 rounded'>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter The food Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control name='rating' type="text" placeholder="Rating" />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Image</Form.Label>
                <Form.Control name='img' placeholder="Image_URL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Description</Form.Label>
                <Form.Control name='des' placeholder="The food description" />
            </Form.Group>

            <Row className="mb-3 w-25">
                <Form.Group controlId="formGridCity">
                    <Form.Label>Price</Form.Label>
                    <Form.Control name='price' placeholder='Food Price'/>
                </Form.Group>
            </Row>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default AddService;