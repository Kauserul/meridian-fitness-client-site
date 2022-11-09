import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const AddService = () => {
    return (
        <Form onSubmit={handleAddFood} className='container mt-5 w-50 border p-4 rounded'>
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