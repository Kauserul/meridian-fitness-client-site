import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyReviewDetails from './MyReviewDetails';

const MyReview = () => {
    const {user} = useContext(AuthContext)
    const [myReview, setReview] = useState([])
    // console.log(myReview)
    useEffect( () =>{
        fetch(`http://localhost:5000/myReview?email=${user?.email}`)
        .then(res => res.json())
        .then(data =>{
            setReview(data)
        })
    }, [user?.email])

    const handleDelete = id =>{
        fetch(`http://localhost:5000/review/${id}`, {
            method : "DELETE",
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                alert('Deleted')
            }
            const remaining = myReview.filter(review => review._id !== id)
            setReview(remaining)

        })
    }

    return (
        <div className='container mb-4'>
            <h2>Total Review : {myReview.length}</h2>
            {
                myReview.map(review => <MyReviewDetails
                    key={review._id}
                    review={review}
                    handleDelete={handleDelete}
                >
                </MyReviewDetails>)
            }
        </div>
    );
};

export default MyReview;