"use client"
import React, { useState } from 'react';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import Link from 'next/link';

const renderIcon = (iconPath, className) => (
    <img
        src={iconPath}
        alt="item list icon"
        className={`w-7 h-8 ${className}`}
    />
);

const Page = () => {
    const [filters, setFilters] = useState({
        store: '',
        zone: '',
        category: '',
        subCategory: ''
    });

    const [itemStatus, setItemStatus] = useState({
        1: 'active',
        2: 'inactive'
    });

    const handleStatusChange = (id) => {
        setItemStatus(prev => ({
            ...prev,
            [id]: prev[id] === 'active' ? 'inactive' : 'active'
        }));
    };

    return (
        <div className="p-6 space-y-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
                {renderIcon("/icons/items.png", "mr-3")}
                Item List
            </h2>
            
           

            {/* Item List */}
            <div className="bg-white rounded-xl shadow-sm p-6 border">
                <div className="flex justify-end space-x-4 mb-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-1/4 bg-white px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-white text-teal-800 px-4 py-2 rounded border">
                        Export
                    </button>
                    <Link href="/low-stock">
                        <button className="bg-teal-800 text-white px-4 py-2 rounded hover:bg-teal-900">
                            Limited Stocks
                        </button>
                    </Link>
                    <Link href="/product-management/add-new">
                        <button className="bg-teal-800 text-white px-4 py-2 rounded hover:bg-teal-900">
                            Add New Product
                        </button>
                    </Link>
                </div>


                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">SI</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quantity</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Store</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        <tr>
                            <td className="px-4 py-3">1</td>
                            <td className="px-4 py-3">Item 1</td>
                            <td className="px-4 py-3">Category 1</td>
                            <td className="px-4 py-3">50</td>
                            <td className="px-4 py-3">Store 1</td>
                            <td className="px-4 py-3">$99.99</td>
                            <td className="px-4 py-3">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={itemStatus[1] === 'active'}
                                        onChange={() => handleStatusChange(1)}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                            </td>
                            <td className="px-4 py-3">
                                <div className="flex space-x-2">
                                    <button className="p-2 border rounded border-blue-600 text-blue-600 hover:text-blue-800">
                                        <FaPencilAlt className="w-4 h-4" />
                                    </button>
                                    <button className="p-2 border rounded border-red-600 text-red-600 hover:text-red-800">
                                        <FaTrash className="w-4 h-4" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Page;
