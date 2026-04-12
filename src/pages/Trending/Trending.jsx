import React from 'react';
import { NavLink, useLoaderData } from 'react-router';
import TrendingApp from '../TrendingApp/TrendingApp';

const Trending = () => {
    const trendingData = useLoaderData()
    // console.log(trendingData);
    return (
        <div className='my-12'>
            <div className='text-center my-4'>
                <h2 className='text-4xl font-bold my-3'>Trending Apps</h2>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>

            {/* ::::::::::TRENDING APPS ARE HERE:::::::::::::*/}
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3'>
                {
                    [...trendingData].map(app => <TrendingApp
                        key={app.id}
                        app={app}></TrendingApp>)
                }
            </div>
            <div className='text-center mt-8'>
                <NavLink to={'/apps'} className='btn bg-purple-500 text-white'>Show All</NavLink>
            </div>
        </div>
    );
};

export default Trending;