import React from 'react';
import { Link } from 'react-router';

const NoApps = ({ onReset }) => {
    return (
        <div className='flex flex-col col-span-4 my-12 space-y-3 text-center'>
            <h2 className='text-4xl font-bold'>Apps not found.</h2>
            <Link to={'/apps'}><button onClick={onReset} className='btn btn-secondary'>Show All Apps</button></Link>
        </div>
    );
};

export default NoApps;