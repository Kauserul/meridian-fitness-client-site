import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';



const ReviewAdded = ({ service }) => {
    const { name, img, price } = service
    const { user } = useContext(AuthContext)
    const handleReview = e => {
        e.preventDefault()

        const form = e.target;
        const userName = form.name.value;
        const img_url = form.image.value;
        const message = form.message.value;
        console.log(userName, img_url, message)
        const review = {
            serviceId: service._id,
            name,
            img,
            price,
            userName,
            img_url,
            message,
            email: user?.email
        }

        fetch('https://meridian-fitness-server.vercel.app/review', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    // toast.error('Review added')
                    toast.success('Review added')
                }
            })
    }
    return (
        <div className='mb-5'>
            {
                user?.email ?
                    <>
                        <h4>Add Review</h4>
                        <form onSubmit={handleReview}>
                            <input className='me-3 mb-3' type="text" name='name' placeholder='name' required />
                            <input type="text" name='image' placeholder='image_URL' />
                            <br />
                            <textarea name="message" id="" cols="50" rows="3" placeholder='Your comment'></textarea>
                            <br />
                            <button className='btn btn-success' type="submit">Add Review</button>
                        </form>
                    </>
                    :
                    <Link to='/login' className='fs-3'>Please login to add a review</Link>
            }
            
        </div>
    );
};

export default ReviewAdded;