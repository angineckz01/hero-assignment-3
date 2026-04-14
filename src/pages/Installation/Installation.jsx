import React, { useState } from 'react';
import { getStoredData, removeFromLS } from '../../utilities/localStorage';
import { useLoaderData } from 'react-router';
import InstalledApps from '../InstalledApps/InstalledApps';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Installation = () => {
    const appsData = useLoaderData()

    const getFilteredApps =() => {
    const storedData = getStoredData('installedApps')
    const convertedStoredData = storedData.map(data => parseInt(data));
    return appsData.filter(app => convertedStoredData.includes(app.id))
}
    const [filteredApps, setFilteredApps] = useState(getFilteredApps)
    const [sort, setSort] = useState(false)
    // console.log('filtered apps are here', filteredApps);
    const handleSort = (type)=> {
        setSort(type)
        if(sort === 'descending'){
            const updatedApps = filteredApps.sort((a, b) => a.size - b.size);
            setFilteredApps(updatedApps)
        } else if(sort === 'ascending'){
            const updatedApps = filteredApps.sort((a, b)=> b.size - a.size);
            setFilteredApps(updatedApps);
        }
    }
    const handleUninstall = (appId) => {
        removeFromLS('installedApps', appId);
        setFilteredApps(getFilteredApps());
    }

    return (
        <div className='my-12'>
            <div className='text-center my-8'>
                <h3 className='font-bold text-4xl'>Your Installed Apps</h3>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex items-center font-semibold text-xl justify-between'>
                <h3>{filteredApps.length} Apps Found</h3>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By: {sort ==='ascending'? 
                    'Low - High' : 'High - Low'} </div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => handleSort('descending')}>High - Low</a></li>
                        <li><a onClick={() => handleSort('ascending')}>Low - High</a></li>
                    </ul>
                </div>
            </div>
            <div className='my-12'>
                <InstalledApps 
                handleUninstall={handleUninstall}
                filteredApps={filteredApps}></InstalledApps>
            </div>
        </div>
    );
};

export default Installation;