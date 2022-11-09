import React from 'react';

const Review = ({review}) => {
    const {img_url, userName, message} = review
    return (
        <div className='d-flex align-items-center mb-3 w-50'>
            <div className='me-2'>
                <img className='img-fluid rounded' style={{height: '50px', width: '50px'}} src={img_url} alt="" />
            </div>
            <div>
                <h6 className='m-0 pb-0'>{userName}</h6>
                <p className='m-0 pt-0'><small>{message}</small></p>
            </div>
        </div>
    );
};

export default Review;