import AllProduct from "../components/AllProduct/AllProduct";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Register from "../components/Register/Register";

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
    }
]

export default childRoute;