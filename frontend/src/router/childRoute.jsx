import AllProduct from "../components/AllProduct/AllProduct";
import Dashbored from "../components/Dashboard/Dashbored";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Profile from "../components/Profile/Profile";
import Register from "../components/Register/Register";
import Users from "../components/Users/Users";

const childRoute=[
    {
        path:'/',
        element:<Home></Home>
    },
    {
        path:'/allproducts',
        element:<AllProduct></AllProduct>
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<Register></Register>
    }
    ,
    {
        path:'/details',
        element:<ProductDetails></ProductDetails>
    },
    {
        path:'/dashboard',
        element:<Dashbored></Dashbored>,
        children:[
            {
                path:'/dashboard/profile',
                element:<Profile></Profile>
            },
            {
                path:'/dashboard/users',
                element:<Users></Users>
            },
        ]
    }
]

export default childRoute;