import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { useEffect, useState } from "react";
import { useAuth } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router";

const MyProducts = () => {
  const {user}=useAuth()
  const [myProd,setmyProd]=useState([])
  useEffect(()=>{
    fetch(`http://localhost:3000/all/${user?.email}`).then(res=>res.json())
    .then(data=>{
      setmyProd(data)
    })

  },[])
    return (
         <div className="overflow-x-auto">
      <Table hoverable>
        <TableHead>
          <TableRow>
            <TableHeadCell>Product name</TableHeadCell>
            <TableHeadCell>Color</TableHeadCell>
            <TableHeadCell>Category</TableHeadCell>
            <TableHeadCell>Price</TableHeadCell>
            <TableHeadCell>
              <span className="sr-only">Edit</span>
            </TableHeadCell>
            <TableHeadCell>
              <span className="sr-only">Delete</span>
            </TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">

          {
            myProd.map(product=>(
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {product.productName}
            </TableCell>
            <TableCell>{product.productColor}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>
              <Link to={`/update/${product._id}`} className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Edit
              </Link>
            </TableCell>
            <TableCell>
              <a className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Delete
              </a>
            </TableCell>
          </TableRow>
            )

          )
          }

         
        </TableBody>
      </Table>
    </div>
    );
};

export default MyProducts;