import React from 'react';
import OurStory from '../OurStory/OurStory';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='home-banner'>
                <div className='w-25 text-white ms-5'>
                    <h2 className='fs-2 banner-title'>Home Made Food
                        at your doorstep</h2>
                    <button className='classes-btn btn btn-primary mt-4'>Discover</button>
                </div>
            </div>
            <div>
                <Services></Services>
            </div>
            <div className='mt-5 mb-5'>
                <OurStory></OurStory>
            </div>
        </div>
    );
};

export default Home;