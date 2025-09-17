import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { useEffect, useState } from "react";
import { useAuth } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const MyProducts = () => {
  const { user } = useAuth()
  const [myProd, setmyProd] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3000/all/${user?.email}`).then(res => res.json())
      .then(data => {
        setmyProd(data)
      })

  }, [])

  const handleDelete = (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/delete/${id}`, {
          method: 'DELETE'
        }).then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your product has been deleted.",
                icon: "success"
              });

              const filtered=myProd.filter(prod=>prod._id!=id)
              setmyProd(filtered);

            }
          })

      }
    });

  }
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
            myProd.map(product => (
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {product.productName}
                </TableCell>
                <TableCell>{product.productColor}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                  <Link to={`/dashboard/update/${product._id}`} className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Edit
                  </Link>
                </TableCell>
                <TableCell>
                  <a onClick={() => handleDelete(product._id)} className="font-medium text-primary-600 hover:underline dark:text-primary-500">
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