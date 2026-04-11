import React from 'react';
import Banner from '../../components/Header/Banner';
import Design from '../Design/Design';
import Trending from '../Trending/Trending';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Design></Design>
            <Trending></Trending>
        </div>
    );
};

export default Home;