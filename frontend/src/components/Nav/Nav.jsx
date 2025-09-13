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
import { NavLink } from "react-router";



const Nav = () => {
    return (
        <div>
            <Navbar fluid rounded>
                <NavbarBrand href="/">
                    {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Sports E-Shop</span>
                </NavbarBrand>
                <div className="flex md:order-2 z-30">
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                        }
                    >
                        <DropdownHeader>
                            <span className="block text-sm">Bonnie Green</span>
                            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                        </DropdownHeader>
                        <DropdownItem>Dashboard</DropdownItem>
                        <DropdownItem>Settings</DropdownItem>
                        
                        <DropdownDivider />
                        <DropdownItem>Sign out</DropdownItem>
                    </Dropdown>
                    <NavbarToggle />
                </div>
                <NavbarCollapse>
                    <NavbarLink active>
                        <NavLink to={'/'}>Home</NavLink>
                    </NavbarLink>
                    <NavbarLink ><NavLink to={'/about'}>About</NavLink></NavbarLink>
                    <NavbarLink ><NavLink to={'/allitems'}>All Items</NavLink></NavbarLink>
                    <NavbarLink ><NavLink to={'/mylist'}>My List</NavLink></NavbarLink>
                   
                    
                </NavbarCollapse>
            </Navbar>

        </div>
    );
};

export default Nav;