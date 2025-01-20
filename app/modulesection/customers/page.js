'use client'
import { useState } from 'react';
import { FaSearch, FaFileExport, FaEye, FaToggleOn, FaToggleOff, FaFilter } from 'react-icons/fa';
import Image from 'next/image';

export default function CustomerList() {
    const [isActive, setIsActive] = useState(true);

    return (
        <div className="p-4">
            {/* Header */}
            <div className="flex items-center mb-6">
                <div className="relative w-10 h-10 mr-3 rounded-full border">
                    <Image
                        src="/modulesection/customers.svg"
                        alt="Customer List"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold">Customer List</h1>
                    <p className="text-sm text-gray-500">Manage your customers</p>
                </div>
            </div>

            {/* Filter Section */}
            <div className="bg-white p-4 rounded-lg shadow mb-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Order Date</label>
                        <input type="date" className="w-full p-2 border rounded" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Customer Joining Date</label>
                        <input type="date" className="w-full p-2 border rounded" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Customer Status</label>
                        <select className="w-full bg-white p-2.5 border rounded">
                            <option>All</option>
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
                        <select className="w-full bg-white p-2.5 border rounded">
                            <option>Order Count</option>
                            <option>Order Amount</option>
                            <option>Joining Date</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Sorting Order</label>
                        <select className="w-full bg-white p-2.5 border rounded">
                            <option>Ascending</option>
                            <option>Descending</option>
                        </select>
                    </div>
                    <div className="flex justify-center mt-4">
                    <button className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        <FaFilter />
                        Apply Filters
                    </button>
                </div>
                </div>
            
                
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-lg shadow">
                <div className="p-4 flex justify-between items-center border-b">
                    <div className="relative w-64">
                        <input
                            type="text"
                            placeholder="Search customers..."
                            className="w-full pl-10 pr-4 py-2 border rounded-lg"
                        />
                        <FaSearch className="absolute left-3 top-3 text-gray-400" />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                        <FaFileExport />
                        Export
                    </button>
                </div>

                <table className="min-w-full">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sl</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact Information</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Order</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Order Amount</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Joining Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {[1, 2, 3].map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                                        <div>
                                            <p className="font-medium">John Doe</p>
                                            <p className="text-sm text-gray-500">ID: #12345</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <p>+1 234 567 890</p>
                                    <p className="text-sm text-gray-500">john@example.com</p>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">150</td>
                                <td className="px-6 py-4 whitespace-nowrap">$1,234.56</td>
                                <td className="px-6 py-4 whitespace-nowrap">2024-02-20</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button 
                                        onClick={() => setIsActive(!isActive)}
                                        className={`flex items-center px-3 py-1 rounded-full ${
                                            isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                        }`}
                                    >
                                        {isActive ? <FaToggleOn className="mr-2" /> : <FaToggleOff className="mr-2" />}
                                        {isActive ? 'Active' : 'Inactive'}
                                    </button>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button className="p-2 text-blue-600 hover:bg-blue-100 rounded">
                                        <FaEye />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
