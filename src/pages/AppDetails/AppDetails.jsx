import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadIcon from '../../assets/icon-downloads.png'
import ratingsIcon from '../../assets/icon-ratings.png'
import reviewIcon from '../../assets/icon-review.png'
import { toast, ToastContainer } from 'react-toastify';
import { addToLS } from '../../utilities/localStorage';

const AppDetails = () => {
    const {id} = useParams()
    const appId = parseInt(id)
    const appsData = useLoaderData()
    const [install, setInstall] = useState(true)
    const handleInstall = (id) => {
        setInstall(false)
        toast('successfully installed the app')
        addToLS('installedApps', id)

    }

    const singleApp = appsData.find(app => app.id === appId);
    const {image, title, description, companyName, downloads, ratingAvg, reviews, size} = singleApp;
    return (
        <div className='my-12 space-y-4'>
            <div className='grid gap-8 grid-cols-12 my-4'>
                <div className='col-span-4'>
                    <img src={image} alt="" />
                </div>
                <div className='col-span-8'>
                    <h4 className='font-bold text-2xl'>{title}</h4>
                    <p>Developed by: {companyName}</p>
                    <div className="divider"></div>
                    <div className='flex items-center gap-6'>
                        <div>
                            <img src={downloadIcon} alt="" />
                            <p>downloads</p>
                            <span className='font-bold text-lg'>{downloads}</span>
                        </div>
                        <div>
                            <img src={ratingsIcon} alt="" />
                            <p>Average Ratings</p>
                            <span className='font-bold text-lg'>{ratingAvg}</span>
                        </div>
                        <div>
                            <img src={reviewIcon} alt="" />
                            <p>Total Reviews</p>
                            <span className='font-bold text-lg'>{reviews}</span>
                        </div>
                    </div>
                    <button onClick={()=> handleInstall(id)} className={`${install && 'disabled'} btn bg-green-400 text-white`}>{`${install? `Install Now (${size} MB)`: 'Installed'}`}</button>
                </div>
            </div>
            <div className="divider"></div>
            <div>
                <h3 className='font-semibold text-lg'>Ratings:</h3>
            </div>
            <div className="divider"></div>
            <div>
                <h3 className='font-semibold text-lg'>Description: </h3>
                <p>{description}</p>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AppDetails;