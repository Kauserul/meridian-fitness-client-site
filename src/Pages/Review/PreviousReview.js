import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Review from './Review';

const PreviousReview = ({service}) => {
    const {_id} = service
    const [reviews, setReviews] = useState([])

    useEffect( () =>{
        fetch(`https://meridian-fitness-server.vercel.app/review/${_id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setReviews(data)
        })
    }, [_id])
    return (
        <div>
            <h2>Total Review ({reviews.length})</h2>
            {
                reviews.map(review => <Review
                    key={review._id}
                    review={review}
                >
                </Review>)
            }
        </div>
    );
};

export default PreviousReview;