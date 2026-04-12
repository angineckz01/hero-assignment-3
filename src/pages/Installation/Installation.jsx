import React, { useState } from 'react';
import { getStoredData } from '../../utilities/localStorage';
import { useLoaderData } from 'react-router';
import InstalledApps from '../InstalledApps/InstalledApps';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Installation = () => {
    const appsData = useLoaderData()
    const storedData = getStoredData('installedApps')
    const convertedStoredData = storedData.map(data => parseInt(data));
    const filteredApps = appsData.filter(app => convertedStoredData.includes(app.id))

    return (
        <div className='my-12'>
            <div className='text-center my-8'>
                <h3 className='font-bold text-4xl'>Your Installed Apps</h3>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex items-center font-semibold text-xl justify-between'>
                <h3>{storedData.length} Apps Found</h3>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By:</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a>High - Low</a></li>
                        <li><a>Low - High</a></li>
                    </ul>
                </div>
            </div>
            <div className='my-12'>
                <InstalledApps 
                filteredApps={filteredApps}></InstalledApps>
            </div>
        </div>
    );
};

export default Installation;