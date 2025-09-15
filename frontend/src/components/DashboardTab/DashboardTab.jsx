import { TabItem, Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router";
import { User, Users, Package, LogOut } from 'lucide-react';
import './DashboardTab.css'
const DashboardTab = () => {
  const handleSignOut=(e)=>{
    console.log('clicked');
    
  }
    const tabs = [
    {
      id: 'profile',
      label: 'Profile',
      icon: User,
      href: '/profile'
    },
    {
      id: 'users',
      label: 'Users',
      icon: Users,
      href: '/users'
    },
    {
      id: 'products',
      label: 'Products',
      icon: Package,
      href: '/products'
    },
    {
      id: 'signout',
      label: 'Sign Out',
      icon: LogOut,
      // href: '/signout',
      onClick:handleSignOut
    }
  ];

  // You can set this based on current route/path
  const location=useLocation()
  const currentPath = location.pathname; 
  console.log(location.pathname);
  



    return (
      
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Tab Navigation */}
                <div className="bg-white rounded-2xl shadow-lg overflow-x-scroll">
                    <div className="border-b border-gray-200">
                        <nav className="flex">
                            {tabs.map((tab) => {
                                const Icon = tab.icon;
                                const isSignOut = tab.id === 'signout';
                                const isActive = ((currentPath === tab?.href)||currentPath === `${tab.href}/edit`) && !isSignOut;

                                return (
                                    <NavLink
                                        key={tab.id}
                                        to={`/dashboard${tab?.href}`}
                                        onClick={tab?.onClick}
                                        className={`flex-1 flex items-center justify-center space-x-2 py-4 px-6 text-sm font-medium transition-all duration-300 no-underline ${isActive
                                                ? 'border-b-2 border-blue-500 text-blue-600 bg-blue-50'
                                                : isSignOut
                                                    ? 'text-red-600 hover:text-red-700 hover:bg-red-50'
                                                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                                            }`}
                                    >
                                        <Icon className="w-5 h-5" />
                                        <span>{tab.label}</span>
                                    </NavLink>
                                );
                            })}
                        </nav>
                    </div>
                </div>
                </div>
                
     );
};

                export default DashboardTab;