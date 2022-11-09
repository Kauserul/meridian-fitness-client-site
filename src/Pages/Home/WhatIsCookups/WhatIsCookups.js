import React from 'react';
import logo1 from '../../../img/1000-cooks.jpg'
import logo2 from '../../../img/home-made-foods.jpg'
import logo3 from '../../../img/ensured-hygene.jpg'
import logo4 from '../../../img/highly-customizable.jpg'

const WhatIsCookups = () => {
    return (
        <div className='mt-5 mb-5 ms-5'>
            <h2 className='text-center mb-5'>What is Cookups</h2>
            <div className='d-flex'>
                <div>
                    <img className='img-fluid w-50' src={logo1} alt="" />
                    <h5 className='mt-3'>1500+ Cooks</h5>
                </div>

                <div>
                    <img className='img-fluid w-50'src={logo2} alt="" />
                    <h5 className='mt-3'>Homemade Food</h5>
                </div>

                <div>
                    <img className='img-fluid w-50' src={logo3} alt="" />
                    <h5 className='mt-3'>Ensured Hygiene</h5>
                </div>

                <div>
                    <img className='img-fluid w-50' src={logo4} alt="" />
                    <h5 className='mt-3'>Guaranteed Taste</h5>
                </div>
            </div>
        </div>
    );
};

export default WhatIsCookups;