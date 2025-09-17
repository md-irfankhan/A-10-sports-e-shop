import React from 'react';
import SportsCarouselBanner from '../SportsCarouselBanner/SportsCarouselBanner';
import ProductPage from '../ProductPage/ProductPage';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data=useLoaderData();
    console.log(data);
    
    return (
        <div>
           <header>
            <SportsCarouselBanner></SportsCarouselBanner>
           </header>
           <section>
            <ProductPage data={data}></ProductPage>
           </section>
        </div>
    );
};

export default Home;