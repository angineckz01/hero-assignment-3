import React from 'react';
import "./Navbar.css"
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa';
import hero from '../../assets/hero.png'

const Banner = () => {
    return (
        <div className='text-center my-12 space-y-6 mx-auto max-w-4xl'>
            <h3 className='text-6xl font-bold'>We Build <br />
            <span className='text-purple-400'>Productive</span> Apps</h3>
            <p>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex gap-3 justify-center'>
                <button className='btn btn-primary'><FaGooglePlay />Google Play</button>
                <button className='btn btn-primary'><FaAppStoreIos />App Store</button>
            </div>
            <div>
                <img src={hero} alt="banner hero image" />
            </div>
        </div>
    );
};

export default Banner;