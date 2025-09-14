import AllProduct from "../components/AllProduct/AllProduct";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";

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
    }
]

export default childRoute;