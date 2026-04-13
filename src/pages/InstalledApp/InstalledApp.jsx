import React from 'react';
import downloadIcon from '../../assets/icon-downloads.png'
import ratingsIcon from '../../assets/icon-ratings.png'


const InstalledApp = ({data}) => {
    // console.log('installed app' , data);
    const {image, title, downloads, ratingAvg, size} = data;
    return (
        <div className='flex items-center justify-between border border-gray-300 p-4 rounded-xl'>
            <div className='flex gap-2'>
                <img className='w-16 h-16 object-cover rounded-md' src={image} alt="" />
                <div>
                    <h3 className='font-semibold text-lg'>{title}</h3>
                    <div className='md:flex items-center gap-3'>
                        <div className='flex items-center gap-0.5'>
                            <img className='h-4 w-4' src={downloadIcon} alt="downloadIcon" />
                            <small>{downloads}</small>
                        </div>
                        <div className='flex items-center gap-0.5'>
                            <img className='h-4 w-4' src={ratingsIcon} alt="downloadIcon" />
                            <small>{ratingAvg}</small>
                        </div>
                        <small>{size} MB</small>
                    </div>
                </div>
            </div>
            <div>
                <button className='btn bg-green-400 text-white'>Uninstall</button>
            </div>
        </div>
    );
};

export default InstalledApp;