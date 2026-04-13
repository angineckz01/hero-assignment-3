import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import TrendingApp from '../TrendingApp/TrendingApp';
import { FaSearch } from 'react-icons/fa';
import NoApps from '../NoApps/NoApps';

const Apps = () => {
    const appsData = useLoaderData()
    const [search, setSearch] = useState("")
    const handleSearch = (e) => {
        e.preventDefault()
        const searchResult = e.target.value;
        setSearch(searchResult);
    }

    const filteredApps = appsData.filter(app =>
        app.title.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div className='my-12 space-y-4'>
            <div className='text-center my-8'>
                <h3 className='font-bold text-4xl'>Our All Applications</h3>
                <p>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='md:flex space-y-3 md:space-y-0 items-center justify-between'>
                <h3 className='font-semibold text-2xl'> ({filteredApps.length}) Apps Found</h3>
                <form className='border flex gap-3 items-center border-gray-300 p-2 rounded-md'>
                    <FaSearch/>
                    <input onChange={handleSearch} defaultValue={search} type="text" placeholder='searchBar' />
                </form>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3'>
                {
                    filteredApps.length > 0? filteredApps.map(app => <TrendingApp
                        key={app.id}
                        app={app} />): <NoApps onReset={() => setSearch("")}></NoApps>
                }
            </div>
        </div>
    );
};

export default Apps;