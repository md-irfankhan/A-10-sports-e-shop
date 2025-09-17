import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { useLoaderData } from "react-router";

const Users = () => {
    const data=useLoaderData();
    const dateC=(a)=>{
        const time=Number(a);
        const date =new Date(time);
        return date.toLocaleString()

    }
    return (
        <div className="overflow-x-auto">
            <Table hoverable>
                <TableHead>
                    <TableRow>
                        <TableHeadCell>Name</TableHeadCell>
                        <TableHeadCell>Email</TableHeadCell>
                        <TableHeadCell>Creation Time</TableHeadCell>
                        <TableHeadCell>Last Logdin</TableHeadCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody className="divide-y">
                    {
                        data.map(user=>    
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {user.name}
                        </TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{dateC(user.creationTime)}</TableCell>
                        <TableCell>{dateC(user.lastLogin)}</TableCell>
                     
                    </TableRow>
                    )
                    }
                 
                </TableBody>
            </Table>
        </div>
    );
};

export default Users;