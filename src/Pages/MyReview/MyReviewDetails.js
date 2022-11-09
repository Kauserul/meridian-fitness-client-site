import React from 'react';

const MyReviewDetails = ({review, handleDelete}) => {
    
    const {img, name, message, _id} = review

    
    return (
        <div className='d-flex mb-4 align-items-center container'>
            <div className='me-3'>
                <button onClick={() => handleDelete(_id)} className='btn btn-danger'>X</button>
            </div>
            <div className='d-flex align-items-center'>
                <img className='me-3' style={{height:'100px', width : '100px'}} src={img} alt="" />
                <div>
                    <h5>{name}</h5>
                    <p><small>{message}</small></p>
                </div>
            </div>
            <div className='ms-5'>
                <button className='btn'>Update</button>
            </div>
        </div>
    );
};

export default MyReviewDetails;