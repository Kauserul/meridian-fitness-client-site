import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='home-banner'>
            <div className='w-50 text-white ms-5'>
                <h2 className='fs-2 banner-title'>Meridian Fitness is the best feminine fitness theme on the market</h2>
                <p className='fs-6 mt-3 mb-3'>SAY HELLO TO TO MERIDIAN FITNESS</p>
                <p className='small-pera'><small>Nam consectetur volutpat nulla eget mollis. Nam auctor sodales ex, sed tincidunt est bibendum sit amet.</small></p>
                <button className='classes-btn btn btn-primary'>View the classes</button>
            </div>
        </div>
    );
};

export default Home;