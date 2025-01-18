'use client'
import { useState } from 'react';
import { FaSearch, FaEye, FaPencilAlt, FaTrash, FaFileExport } from 'react-icons/fa';
import Image from 'next/image';

export default function DeliverymanList() {
    return (
        <div className="p-4">
            {/* Header */}
            <div className="flex items-center mb-6">
                <div className="relative w-10 h-10 mr-3 rounded-full border">
                    <Image
                        src="/modulesection/add-delivery-man.png"
                        alt="Deliveryman List"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold">Deliveryman List</h1>
                    <p className="text-sm text-gray-500">Manage your delivery personnel</p>
                </div>
            </div>

          

            {/* Table */}
            <div className="bg-white rounded-lg shadow border">
            <div className="flex items-center justify-end gap-4 mt-4 mr-4">
                    <select className="p-2 bg-white border rounded w-48">
                        <option>All Types</option>
                        <option>Freelancer</option>
                        <option>Permanent</option>
                    </select>

                    <select className="p-2 bg-white border rounded w-48">
                        <option>All Job Types</option>
                        <option>Full Time</option>
                        <option>Part Time</option>
                    </select>

                    <select className="p-2 bg-white border rounded w-48">
                        <option>All Zones</option>
                        <option>Zone 1</option>
                        <option>Zone 2</option>
                    </select>

                    <div className="relative w-64">
                        <input
                            type="text"
                            placeholder="Search deliveryman..."
                            className="w-full pl-10 pr-4 py-2 border rounded-lg"
                        />
                        <FaSearch className="absolute left-3 top-3 text-gray-400" />
                    </div>

                    <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                        <FaFileExport />
                        Export
                    </button>
                </div>
                <table className="min-w-full mt-4">
                    <thead>
                        <tr className="bg-gray-50 border-b h-16">
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">SI</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact Info</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Zone</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Completed Orders</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Availability</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {[1, 2, 3].map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 rounded-full bg-gray-200 mr-3">
                                           
                                        </div>
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
                                <td className="px-6 py-4 whitespace-nowrap">Zone 1</td>
                                <td className="px-6 py-4 whitespace-nowrap">150</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        Online
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                        Active
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex space-x-2">
                                        <button className="p-2 border border-blue-600 text-blue-600 hover:bg-blue-100 rounded">
                                            <FaEye />
                                        </button>
                                        <button className="p-2 border border-green-600 text-green-600 hover:bg-green-100 rounded">
                                            <FaPencilAlt />
                                        </button>
                                        <button className="p-2 border border-red-600 text-red-600 hover:bg-red-100 rounded">
                                            <FaTrash />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
