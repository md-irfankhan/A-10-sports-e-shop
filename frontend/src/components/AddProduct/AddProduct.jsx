import { useState } from "react";

const AddProduct = () => {
    const [formData, setFormData] = useState({
        productName: '',
        category: '',
        photoUrl: '',
        productColor: '',
        supplierName: '',
        supplierEmail: '',
        productDescription: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        setIsSubmitted(true);
        // You would typically send this data to a server here.
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="max-w-3xl w-full bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Add New Product</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                            <label htmlFor="supplierName" className="block text-sm font-medium text-gray-700">Supplier Name</label>
                            <input
                                type="text"
                                id="supplierName"
                                name="supplierName"
                                value={formData.supplierName}
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
                            Add Product
                        </button>
                    </div>
                </form>

                {isSubmitted && (
                    <div className="mt-8 p-4 text-center bg-green-100 text-green-700 rounded-md">
                        Product added successfully!
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddProduct;