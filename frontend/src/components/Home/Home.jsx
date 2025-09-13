import React from 'react';
import SportsCarouselBanner from '../SportsCarouselBanner/SportsCarouselBanner';
import ProductPage from '../ProductPage/ProductPage';

const Home = () => {
    return (
        <div>
           <header>
            <SportsCarouselBanner></SportsCarouselBanner>
           </header>
           <section>
            <ProductPage></ProductPage>
           </section>
        </div>
    );
};

export default Home;