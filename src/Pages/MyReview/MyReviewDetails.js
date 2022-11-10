import React from 'react';

const MyReviewDetails = ({ review, handleDelete }) => {

    const { img, name, message, _id } = review


    return (
        <div className='d-flex mb-4 align-items-center container bg-info p-4 rounded w-75'>
            <div className='me-3 d-flex'>
                <button onClick={() => handleDelete(_id)} style={{height:'40px'}} className='btn btn-danger mt-4 me-3'>X</button>
                <img className='me-3' style={{ height: '100px', width: '100px' }} src={img} alt="" />
            </div>
            <div className='d-flex align-items-center justify-content-between w-100'>
                <div>
                    <h5>{name}</h5>
                    <p className='d-block'>{message}</p>
                </div>
                <button className='btn btn-outline-primary'>Edit</button>
            </div>

        </div>
    );
};

export default MyReviewDetails;