import { useState } from "react";
import { useAuth } from "../../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
const ProductUpdate = () => {
    const {user}=useAuth()
    const data=useLoaderData()
    const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});

    
    const [formData, setFormData] = useState({
            _id:data._id,
            productName:data.productName,
            category: data.category,
            photoUrl: data.photoUrl,
            productColor: data.productColor,
            supplierName: user?.displayName,
            supplierEmail: user?.email,
            productDescription: data.productDescription,
            price:data.price
        });

        
        const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };


    const handleUpdate = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        fetch('http://localhost:3000/update', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(res => res.json()).then(data => {
            
            Toast.fire({
  icon: "success",
  title: "Product Updated"
});

            console.log(data);

        })

      


        // You would typically send this data to a server here.
    };
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="max-w-3xl w-full bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Add New Product</h2>
                <form onSubmit={handleUpdate} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Product Name</label>
                            <input
                                type="text"
                                id="productName"
                                name="productName"
                                value={formData.productName}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                            <input
                                type="text"
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="photoUrl" className="block text-sm font-medium text-gray-700">Photo URL</label>
                            <input
                                type="url"
                                id="photoUrl"
                                name="photoUrl"
                                value={formData.photoUrl}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="productColor" className="block text-sm font-medium text-gray-700">Product Color</label>
                            <input
                                type="text"
                                id="productColor"
                                name="productColor"
                                value={formData.productColor}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                            <input
                                type="text"
                                id="price"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="supplierEmail" className="block text-sm font-medium text-gray-700">Supplier Email</label>
                            <input
                                type="email"
                                id="supplierEmail"
                                name="supplierEmail"
                                value={formData.supplierEmail}
                                onChange={handleChange}
                                disabled
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="productDescription" className="block text-sm font-medium text-gray-700">Product Description</label>
                        <textarea
                            id="productDescription"
                            name="productDescription"
                            rows="3"
                            value={formData.productDescription}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        ></textarea>
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-full md:w-auto px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Update Product
                        </button>
                    </div>
                </form>

               
            </div>
        </div>
    );
};

export default ProductUpdate;