import AddProduct from "../components/AddProduct/AddProduct";
import AllProduct from "../components/AllProduct/AllProduct";
import Dashbored from "../components/Dashboard/Dashbored";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import MyProducts from "../components/MyProducts/MyProducts";
import Private from "../components/Private/Private";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Profile from "../components/Profile/Profile";
import ProfileUpdate from "../components/ProfileUpdate/ProfileUpdate";
import Register from "../components/Register/Register";
import Users from "../components/Users/Users";

const childRoute=[
    {
        path:'/',
        loader:()=>fetch('http://localhost:3000/all'),
        element:<Home></Home>
    },
    {
        path:'/allproducts',
        loader:()=>fetch('http://localhost:3000/all'),
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
        path:'/details/:id',
        loader:({params})=>fetch(`http://localhost:3000/find/${params.id}`),
        element:<ProductDetails></ProductDetails>
    },
    {
        path:'/dashboard',
        element:<Private><Dashbored></Dashbored></Private>,
        children:[
            {
                path:'/dashboard/profile',
                element:<Profile></Profile>
            },
            {
                path:'/dashboard/profile/edit',
                element:<ProfileUpdate></ProfileUpdate>
            },
            {
                path:'/dashboard/users',
                loader:()=>fetch('http://localhost:3000/users'),
                element:<Users></Users>
            },
            {
                path:'/dashboard/myproducts',
                
                element:<MyProducts></MyProducts>
            },
            {
                path:'/dashboard/add',
                element:<AddProduct></AddProduct>
            },
        ]
    }
]

export default childRoute;