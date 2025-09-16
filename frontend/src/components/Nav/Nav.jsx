import {
    Avatar,
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
} from "flowbite-react";
import { Link, NavLink } from "react-router";
import { useAuth } from "../../AuthProvider/AuthProvider";
import { LogOut, User } from 'lucide-react';



const Nav = () => {
    const {user,logOut}=useAuth();
    const handleSignOut=()=>{
        logOut()

    }
    return (
        <div>
            <Navbar fluid rounded>
                <NavbarBrand href="/">
                    {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Sports E-Shop</span>
                </NavbarBrand>

                {user?
                <div className="flex md:order-2 z-30">
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar alt="User settings" img={user?.photoURL} rounded />
                        }
                    >
                        <DropdownHeader>
                            <span className="block text-sm">{user?.displayName}</span>
                            <span className="block truncate text-sm font-medium">{user?.email}</span>
                        </DropdownHeader>
                        <DropdownItem><Link to={'/dashboard/profile'}>Dashboard</Link></DropdownItem>
                        <DropdownItem>Settings</DropdownItem>
                        
                        <DropdownDivider />
                        <DropdownItem onClick={handleSignOut}>Sign out</DropdownItem>
                    </Dropdown>
                    <NavbarToggle />
                </div>:<div className="flex md:order-2 z-30">

                   <button className="w-full  bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200">
             <Link to={'/login'}>Login</Link>
          </button>
                    </div>}
                <NavbarCollapse>
                    <NavbarLink active>
                        <NavLink to={'/'}>Home</NavLink>
                    </NavbarLink>
                    <NavbarLink ><NavLink to={'/about'}>About</NavLink></NavbarLink>
                    <NavbarLink ><NavLink to={'/allproducts'}>All Items</NavLink></NavbarLink>
                    <NavbarLink ><NavLink to={'/dashboard/myproducts'}>My List</NavLink></NavbarLink>
                   
                    
                </NavbarCollapse>
            </Navbar>

        </div>
    );
};

export default Nav;