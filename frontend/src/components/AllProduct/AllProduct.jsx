import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Tooltip } from "flowbite-react";
import { Link, useLoaderData } from "react-router";

const AllProduct = () => {
    const data=useLoaderData()
    return (
        <div className="overflow-x-auto max-w-[1250px] mx-auto my-4">
            <Table hoverable>
                <TableHead>
                    <TableRow>
                        <TableHeadCell>Product name</TableHeadCell>
                        <TableHeadCell>Color</TableHeadCell>
                        <TableHeadCell>Category</TableHeadCell>
                        <TableHeadCell>Supplier Name</TableHeadCell>
                        <TableHeadCell>Price</TableHeadCell>
                        
                        <TableHeadCell>
                            <span className="sr-only">View Details</span>
                        </TableHeadCell>
                    </TableRow>
                </TableHead>
                <TableBody className="divide-y">
                    {
                        data.map(product=>(
                    
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {product.productName}
                        </TableCell>
                        <TableCell>{product.productColor}</TableCell>
                        <TableCell>Laptop</TableCell>
                        <Tooltip content={product.supplierEmail}>
                            <TableCell>{product.supplierName}</TableCell>

                        </Tooltip>
                        <TableCell>${product.price}</TableCell>
                        <TableCell>
                            <Link to={`/details/${product._id}`} className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                View Details
                            </Link>
                        </TableCell>
                    </TableRow>
                     ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default AllProduct;