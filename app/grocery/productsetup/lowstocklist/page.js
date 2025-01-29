"use client"
import React from 'react';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';

const renderIcon = (iconPath, className) => (
  <img 
    src={iconPath} 
    alt="low stock icon" 
    className={`w-7 h-8 ${className}`}
  />
);

const Page = () => {
    return (
        <div className="p-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
                {renderIcon("/icons/low-stock.png", "mr-3")}
                Low Stock List
            </h2>
            <div className="bg-white rounded-xl shadow-sm p-6 border">
                <div className="flex justify-end mb-4 space-x-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="px-4 py-2 border rounded-md"
                    />
                    <select className="px-4 bg-white py-2 border rounded-md">
                        <option>All Zones</option>
                        <option>Zone 1</option>
                        <option>Zone 2</option>
                    </select>
                    <select className="px-4 bg-white py-2 border rounded-md">
                        <option>All Stores</option>
                        <option>Store A</option>
                        <option>Store B</option>
                    </select>
                    <button className="px-4 py-2 bg-white text-teal-700 rounded border">
                        Export
                    </button>
                </div>


                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sl</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Store</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Zone</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Current Stock</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        <tr>
                            <td className="px-4 py-3">1</td>
                            <td className="px-4 py-3">Product 1</td>
                            <td className="px-4 py-3">Store A</td>
                            <td className="px-4 py-3">Zone 1</td>
                            <td className="px-4 py-3">
                                <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
                                    5
                                </span>
                            </td>
                            <td className="px-4 py-3">
                                <div className="flex space-x-2">
                                    <button className="p-2 border rounded-lg text-blue-600 hover:text-blue-800">
                                        <FaPencilAlt className="w-4 h-4" />
                                    </button>
                                    
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3">2</td>
                            <td className="px-4 py-3">Product 2</td>
                            <td className="px-4 py-3">Store B</td>
                            <td className="px-4 py-3">Zone 2</td>
                            <td className="px-4 py-3">
                                <span className="px-2 py-1 text-xs font-medium rounded-full bg-orange-100 text-orange-800">
                                    8
                                </span>
                            </td>
                            <td className="px-4 py-3">
                                <div className="flex space-x-2">
                                    <button className="p-2 border rounded-lg text-blue-600 hover:text-blue-800">
                                        <FaPencilAlt className="w-4 h-4" />
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
