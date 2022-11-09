import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
    const {userRegister} = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password)
        userRegister(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
            form.reset()
        })
        .catch(err => console.error(err))
    }
    return (
        <div className='w-25 m-auto mt-5 mb-5 border p-5 rounded'>
            <Form onSubmit={handleRegister}>
                <h3 className='text-center'>Log In</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter Your Name" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>

                <p className='mt-2'>Already have an account? Please <Link to='/login'>Log in</Link> </p>
            </Form>
        </div>
    );
};

export default Register;