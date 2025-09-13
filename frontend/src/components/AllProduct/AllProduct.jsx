import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Tooltip } from "flowbite-react";

const AllProduct = () => {
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
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Apple MacBook Pro 17"
                        </TableCell>
                        <TableCell>Sliver</TableCell>
                        <TableCell>Laptop</TableCell>
                        <Tooltip content={'irf@gt'}>
                            <TableCell>Irfan Khan</TableCell>

                        </Tooltip>
                        <TableCell>$2999</TableCell>
                        <TableCell>
                            <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                View Details
                            </a>
                        </TableCell>
                    </TableRow>
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Microsoft Surface Pro
                        </TableCell>
                        <TableCell>White</TableCell>
                        <TableCell>Laptop PC</TableCell>
                         <Tooltip content={'irf@gt'}>
                            <TableCell>Irfan Khan</TableCell>

                        </Tooltip>
                        <TableCell>$1999</TableCell>
                        <TableCell>
                            <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                View Details
                            </a>
                        </TableCell>
                    </TableRow>
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</TableCell>
                        <TableCell>Black</TableCell>
                        <TableCell>Accessories</TableCell>
                         <Tooltip content={'irf@gt'}>
                            <TableCell>Irfan Khan</TableCell>

                        </Tooltip>
                        <TableCell>$99</TableCell>
                        <TableCell>
                            <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                View Details
                            </a>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
};

export default AllProduct;