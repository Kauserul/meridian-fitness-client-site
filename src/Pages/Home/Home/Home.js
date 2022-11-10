import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import OurStory from '../OurStory/OurStory';
import Services from '../Services/Services';
import WhatIsCookups from '../WhatIsCookups/WhatIsCookups';
import './Home.css'

const Home = () => {
    useTitle("Home")
    return (
        <div className='container mt-3'>
            <div className='home-banner rounded mb-5'>
                <div className='w-25 text-white ms-5'>
                    <h2 className='fs-2 banner-title'>Home Made Food
                        at your doorstep</h2>
                    <button className='classes-btn btn btn-primary mt-4'>Discover</button>
                </div>
            </div>
            <div>
                <WhatIsCookups></WhatIsCookups>
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