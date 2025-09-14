import React from 'react';

const ProductDetails = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                        {/* Product Image */}
                        <div className="space-y-4">
                            <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Nike Air Max Running Shoes"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="space-y-6">
                            {/* Product Category */}
                            <div>
                                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                                    Running Shoes
                                </span>
                            </div>

                            {/* Product Title */}
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                    Nike Air Max Pro Running Shoes
                                </h1>
                            </div>

                            {/* Supplier Name */}
                            <div className="border-t border-gray-200 pt-4">
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm text-gray-600">Supplied by:</span>
                                    <span className="text-sm font-semibold text-gray-900 bg-gray-100 px-3 py-1 rounded-full">
                                        SportZone Athletics
                                    </span>
                                </div>
                            </div>

                            {/* Price */}
                            <div className="border-t border-gray-200 pt-6">
                                <div className="flex items-center space-x-3">
                                    <span className="text-4xl font-bold text-gray-900">$129.99</span>
                                    <span className="text-lg text-gray-500 line-through">$159.99</span>
                                    <span className="bg-red-100 text-red-800 text-sm font-semibold px-2 py-1 rounded">
                                        Save $30
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600 mt-1">Free shipping included</p>
                            </div>

                            {/* Product Details */}
                            <div className="border-t border-gray-200 pt-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Product Details</h2>
                                <div className="space-y-3 text-gray-700">
                                    <p className="leading-relaxed">
                                        Professional-grade running shoes designed for serious athletes and fitness enthusiasts.
                                        Features advanced cushioning technology and breathable materials for maximum comfort
                                        during long training sessions.
                                    </p>

                                    <div className="grid grid-cols-2 gap-4 pt-4">
                                        <div>
                                            <span className="text-sm font-medium text-gray-900">Material:</span>
                                            <p className="text-sm text-gray-600">Synthetic mesh upper</p>
                                        </div>
                                        <div>
                                            <span className="text-sm font-medium text-gray-900">Sole:</span>
                                            <p className="text-sm text-gray-600">Rubber with air cushioning</p>
                                        </div>
                                        <div>
                                            <span className="text-sm font-medium text-gray-900">Weight:</span>
                                            <p className="text-sm text-gray-600">285g per shoe</p>
                                        </div>
                                        <div>
                                            <span className="text-sm font-medium text-gray-900">Sizes Available:</span>
                                            <p className="text-sm text-gray-600">7 - 12 US</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Button */}
                            <div className="border-t border-gray-200 pt-6">
                                <button className="w-full bg-white/20 backdrop-blur-sm border border-blue-500 text-blue-600 py-3 px-6 rounded-xl font-semibold hover:bg-blue-50 hover:bg-opacity-50 transition-all duration-300 shadow-lg">
                                    Add Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;