import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Review from './Review';

const PreviousReview = () => {
    const [reviews, setReviews] = useState([])

    useEffect( () =>{
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => {
            setReviews(data)
        })
    }, [])
    return (
        <div>
            <h2>Total Review ({reviews.length})</h2>
            {
                reviews.map(review => <Review
                    review={review}
                >

                </Review>)
            }
        </div>
    );
};

export default PreviousReview;