import React from 'react';

const Design = () => {
    return (
        <div className='bg-gray-300 text-white text-center space-y-6 py-12'>
            <h2 className='text-4xl font-bold'>Trusted by Millions, Built for You</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 items-center'>
                <div className='text-center'>
                    <small>Total Downloads</small>
                    <h2 className='text-6xl font-bold'>29.6M</h2>
                    <small>21% more than last month</small>
                </div>
                <div className='text-center'>
                    <small>Total Reviews</small>
                    <h2 className='text-6xl font-bold'>906K</h2>
                    <small>21% more than last month</small>
                </div>
                <div className='text-center'>
                    <small>Active Apps</small>
                    <h2 className='text-6xl font-bold'>132+</h2>
                    <small>21% more than last month</small>
                </div>
            </div>
        </div>
    );
};

export default Design;