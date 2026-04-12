import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import TrendingApp from '../TrendingApp/TrendingApp';
import { FaSearch } from 'react-icons/fa';

const Apps = () => {
    const appsData = useLoaderData()
    const [apps, setApps] = useState(0)
    // console.log('all apps data', appsData);
    return (
        <div className='my-12 space-y-4'>
            <div className='text-center my-8'>
                <h3 className='font-bold text-4xl'>Our All Applications</h3>
                <p>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex items-center justify-between'>
                <h3 className='font-semibold text-2xl'> ({appsData.length}) Apps Found</h3>
                <div className='border flex gap-3 items-center border-gray-300 p-2 rounded-md'>
                    <FaSearch/>
                    <input type="text" name='search' placeholder='searchBar' />
                </div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3'>
                {
                    appsData.map(app => <TrendingApp
                        key={app.id}
                        app={app}></TrendingApp>)
                }
            </div>
        </div>
    );
};

export default Apps;