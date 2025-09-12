import React from 'react';
import { Outlet } from 'react-router';
import Nav from './components/Nav/Nav';

const Layout = () => {
    return (
       
        <div>
            <nav>
                <Nav></Nav>
            </nav>
            <section>
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default Layout;