import React from 'react';
import errorImage from '../../assets/error-404.png'
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col items-center justify-center my-16'>
            <img src={errorImage} alt="" />
            <div className='text-center space-y-2 my-3'>
                <h3 className='text-4xl font-bold'>Oops, Page not found!</h3>
                <p>The page you are looking for is not available.</p>
                <button onClick={()=> navigate(-1)} className='btn btn-secondary'>Go Back</button>
            </div>
        </div>
    );
};

export default ErrorPage;