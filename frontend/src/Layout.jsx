import React from 'react';
import { Outlet } from 'react-router';
import Nav from './components/Nav/Nav';
import SportsCarouselBanner from './components/SportsCarouselBanner/SportsCarouselBanner';

const Layout = () => {
    return (
       
        <div>
            <nav>
                <Nav></Nav>
            </nav>
            <header>
                <SportsCarouselBanner></SportsCarouselBanner>
            </header>
            <section>
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default Layout;