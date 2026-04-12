import React from 'react';
import downloadsIcon from '../../assets/icon-downloads.png'
import iconRatings from '../../assets/icon-ratings.png'
import { Link } from 'react-router';

const TrendingApp = ({app}) => {
    const{title, image, downloads, ratingAvg} = app;
    return (
        <Link to={`/appDetails/${app.id}`} className='p-5 border border-gray-300 rounded-2xl'>
            <div>
                <img className='h-72 object-cover w-full rounded-lg' src={image} alt="trending image" />
            </div>
            <div>
                <h3 className='font-semibold text-xl'>{title}</h3>
                <div className='flex items-center justify-between'>
                    <button className='flex btn btn-sm text-green-400 font-semibold'>
                        <img className='h-5 w-5' src={downloadsIcon} alt="" /> 
                        {downloads} </button>
                    <button className='flex btn btn-sm text-green-400 font-semibold'>
                        <img className='h-5 w-5' src={iconRatings} alt="" /> 
                        {ratingAvg} </button>
                </div>
            </div>
        </Link>
    );
};

export default TrendingApp;