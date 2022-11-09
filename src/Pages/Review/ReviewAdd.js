import React from 'react';

const ReviewAdded = ({service}) => {
    const handleReview = e =>{
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const img_url = form.image.value;
        const message = form.message.value;
        
        const review = {
            serviceId : service._id,
            name,
            img_url,
            message,
           
        }

        fetch('http://localhost:5000/review', {
            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert("Review added")
            }
        })
    }
    return (
        <div className='mb-5'>
            <h4>Add Review</h4>
            <form onSubmit={handleReview}>
                <input className='me-3 mb-3' type="text" name='name' placeholder='name' />
                <input type="text" name='image' placeholder='image_URL' />
                <br />
                <textarea name="message" id="" cols="50" rows="3" placeholder='Your comment'></textarea>
                <br />
                <button type="submit">Add Review</button>
            </form>
        </div>
    );
};

export default ReviewAdded;