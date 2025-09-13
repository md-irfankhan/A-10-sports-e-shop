import AllProduct from "../components/AllProduct/AllProduct";
import Home from "../components/Home/Home";

const childRoute=[
    {
        path:'/',
        element:<Home></Home>
    },
    {
        path:'/allproducts',
        element:<AllProduct></AllProduct>
    }
]

export default childRoute;