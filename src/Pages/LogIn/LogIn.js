import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import Spinner from 'react-bootstrap/Spinner';
import { ToastContainer, toast } from 'react-toastify';

const LogIn = () => {
    useTitle("Login")
    const { userLogIn, googleLogIn , loading} = useContext(AuthContext)

    const handleLogIn = e => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)
        userLogIn(email, password)
            .then(result => {
                toast.success('Log in success')
                const user = result.user;
                const currentUser = {
                    email: user.email
                }

                fetch('https://meridian-fitness-server.vercel.app/jwt', {
                    method: "POST",
                    headers: {
                        'content-type': "application/json"
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        localStorage.setItem('Token', data.token)
                    })

                form.reset()
            })
            .catch(err => console.error(err))


    }
    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(result => {
                const user = result.user;

                const currentUser = {
                    email: user.email
                }

                fetch('https://meridian-fitness-server.vercel.app/jwt', {
                    method: "POST",
                    headers: {
                        'content-type': "application/json"
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        localStorage.setItem('Token', data.token)
                    })
            })
            .catch(err => console.err(err))
    }

    if(loading){
        return <Spinner className='spinner' animation="grow" />;
    }
    return (
        <div className='w-25 m-auto mt-5 mb-5 border p-5 rounded'>
            <Form onSubmit={handleLogIn}>
                <h3 className='text-center'>Log In</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    LogIn
                </Button>

                <div className='text-center mt-4 mb-5'>
                    <h6>Or other log In </h6>
                    <button onClick={handleGoogleLogIn} className='btn btn-primary'>Google</button>
                </div>

                <p className='mt-2'>Don't have any account? Please <Link to='/register'>Register</Link> </p>
            </Form>
        </div>
    );
};

export default LogIn;