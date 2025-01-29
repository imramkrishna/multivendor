"use client"
import React, { useState } from 'react';
import { FaPencilAlt, FaSearch, FaTrash, FaEye, FaCheck } from 'react-icons/fa';

const renderIcon = (iconPath, className) => (
    <img
        src={iconPath}
        alt="item requests icon"
        className={`w-7 h-8 ${className}`}
    />
);

const Page = () => {
    const [filters, setFilters] = useState({
        store: '',
        zone: '',
        category: '',
        subCategory: '',
        type: ''
    });

    const [itemStatus, setItemStatus] = useState({
        1: 'active',
        2: 'inactive'
    });

    return (
        <div className="p-6 space-y-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
                {renderIcon("/icons/items.png", "mr-3")}
                New Item Requests
            </h2>
            {/* Search Filters */}
            <div className="bg-white rounded-xl shadow-sm p-6 border">
                <h2 className="text-xl font-semibold mb-6">Search Data</h2>
                <div className="grid grid-cols-5 gap-4">
                    <select
                        className="w-full bg-white px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={filters.store}
                        onChange={(e) => setFilters(prev => ({ ...prev, store: e.target.value }))}
                    >
                        <option value="">All Stores</option>
                        <option value="store1">Store 1</option>
                        <option value="store2">Store 2</option>
                    </select>

                    <select
                        className="w-full bg-white px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={filters.zone}
                        onChange={(e) => setFilters(prev => ({ ...prev, zone: e.target.value }))}
                    >
                        <option value="">All Zones</option>
                        <option value="zone1">Zone 1</option>
                        <option value="zone2">Zone 2</option>
                    </select>

                    <select
                        className="w-full bg-white px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={filters.category}
                        onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
                    >
                        <option value="">All Categories</option>
                        <option value="cat1">Category 1</option>
                        <option value="cat2">Category 2</option>
                    </select>

                    <select
                        className="w-full bg-white px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={filters.subCategory}
                        onChange={(e) => setFilters(prev => ({ ...prev, subCategory: e.target.value }))}
                    >
                        <option value="">All Sub Categories</option>
                        <option value="subcat1">Sub Category 1</option>
                        <option value="subcat2">Sub Category 2</option>
                    </select>

                    <select
                        className="w-full bg-white px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={filters.type}
                        onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
                    >
                        <option value="">All Types</option>
                        <option value="type1">Type 1</option>
                        <option value="type2">Type 2</option>
                    </select>
                </div>
            </div>

            {/* Item List */}
            <div className="bg-white rounded-xl shadow-sm p-6 border">
                <div className="flex justify-end mb-4">
                    <div className="relative w-1/5 mx-5">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full bg-white pl-10 pr-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    </div>

                    <button className="bg-white border border-teal-800 text-teal-800 px-4 py-2 rounded">
                        Export
                    </button>
                </div>

                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">SI</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Store</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        <tr>
                            <td className="px-4 py-3">1</td>
                            <td className="px-4 py-3">Product 1</td>
                            <td className="px-4 py-3">Store A</td>
                            <td className="px-4 py-3">$99.99</td>
                            <td className="px-4 py-3">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={itemStatus[1] === 'active'}
                                        onChange={() => setItemStatus(prev => ({
                                            ...prev,
                                            1: prev[1] === 'active' ? 'inactive' : 'active'
                                        }))}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                            </td>
                            <td className="px-4 py-3">
                                <div className="flex space-x-2">
                                    <button className="p-2 border rounded text-blue-600 hover:text-blue-800">
                                        <FaEye className="w-4 h-4" />
                                    </button>
                                    <button className="p-2 border rounded text-green-600 hover:text-green-800">
                                        <FaCheck className="w-4 h-4" />
                                    </button>
                                    <button className="p-2 border rounded text-blue-600 hover:text-blue-800">
                                        <FaPencilAlt className="w-4 h-4" />
                                    </button>
                                    <button className="p-2 border rounded text-red-600 hover:text-red-800">
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
