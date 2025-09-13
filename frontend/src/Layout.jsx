import React from 'react';
import { Outlet } from 'react-router';
import Nav from './components/Nav/Nav';
import SportsCarouselBanner from './components/SportsCarouselBanner/SportsCarouselBanner';
import FooterS from './components/FooterS/FooterS';

const Layout = () => {
    return (
       
        <div>
            <nav>
                <Nav></Nav>
            </nav>
            
            <section>
                <Outlet></Outlet>
            </section>

            <footer>
                <FooterS></FooterS>
            </footer>
        </div>
    );
};

export default Layout;