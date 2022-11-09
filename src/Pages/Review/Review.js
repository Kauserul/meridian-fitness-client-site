import React from 'react';

const Review = () => {
    const handleReview = e =>{
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const img_url = form.image.value;
        const message = form.message.value;
        
        const review = {
            name,
            img_url,
            message
        }

        fetch('http://localhost:5000/review', {
            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div className='mb-5'>
            <h2>Review</h2>
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

export default Review;