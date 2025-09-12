import React from 'react';
import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;