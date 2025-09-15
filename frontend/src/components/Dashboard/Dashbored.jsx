
import { Sidebar, SidebarCollapse, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineMinusSm,
  HiOutlinePlusSm,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiUserGroup,
  
} from "react-icons/hi";
import { Link, Outlet, useLocation } from "react-router";
import { useState,useEffect } from "react";
import DashboardTab from "../DashboardTab/DashboardTab";
const Dashbored = () => {
      const [width, setWidth] = useState(window.innerWidth);
         useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

    
        window.addEventListener("resize", handleResize);
        // return () => window.removeEventListener("resize", handleResize);
      }, []);
      console.log( width<1024);
      const location=useLocation();
      const currents=location.pathname;
    
      
      
    return (
        <div className="flex flex-col lg:flex-row gap-4">
           <div>
            {width<1024?<DashboardTab></DashboardTab>:
             <Sidebar aria-label="Sidebar with multi-level  dropdown example ">
                <SidebarItems>
                    <SidebarItemGroup>
                        <SidebarItem className={currents==('/dashboard/profile'||'/dashboard/profile/edit')?'bg-blue-300 hover:bg-blue-300':''} icon={HiUser}>
                            <Link  to={'/dashboard/profile'}>Profile</Link>
                        </SidebarItem>
                        <SidebarItem className={currents==('/dashboard/users'||'/dashboard/users/edit')?' bg-blue-300 hover:bg-blue-300 ':''}  icon={HiUserGroup}>
                            <Link to={'/dashboard/users'}>Users</Link>
                        </SidebarItem>
                        <SidebarItem className={currents==('/dashboard/products'||'/dashboard/products/edit')?' bg-blue-300 hover:bg-blue-300 ':''} icon={HiShoppingBag}>
                            Products
                        </SidebarItem>
                        <SidebarItem href="#" icon={HiArrowSmRight}>
                            Sign Out
                        </SidebarItem>
                      
                    </SidebarItemGroup>
                </SidebarItems>
            </Sidebar>
}
           </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashbored;