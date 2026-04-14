import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import TrendingApp from '../TrendingApp/TrendingApp';

const Trending = () => {
    const trendingData = useLoaderData()
    const navigate = useNavigate()
    // console.log(trendingData);
    const handleShowAll =() => {
        window.scrollTo({top: 0, behavior: 'smooth'})
        navigate('/apps')
    }
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
                <button onClick={()=> handleShowAll()} className='btn bg-purple-500 text-white'>Show All</button>
            </div>
        </div>
    );
};

export default Trending;