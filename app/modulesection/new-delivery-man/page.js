'use client'
import { useState } from 'react';
import { FaSearch, FaCheck, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

export default function NewDeliveryMan() {
    const [activeTab, setActiveTab] = useState('pending');

    return (
        <div className="p-4">
            {/* Header */}
            <div className="flex items-center mb-6">
                <div className="relative w-10 h-10 mr-3 rounded-full border">
                    <Image
                        src="/modulesection/new-deliveryman.svg"
                        alt="New Delivery Man"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold">New Joining Requests</h1>
                    <p className="text-sm text-gray-500">Manage delivery man requests</p>
                </div>
            </div>

            {/* Tab Buttons */}
            <div className="flex gap-4 mb-6">
                <button
                    className={`py-2 font-semibold ${
                        activeTab === 'pending'
                            ? 'border-b-2 text-teal-800 border-teal-600'
                            : ''
                    }`}
                    onClick={() => setActiveTab('pending')}
                >
                    Pending Delivery Man
                </button>
                <button
                    className={`py-2  font-semibold ${
                        activeTab === 'denied'
                            ? 'border-b-2 text-teal-800 border-teal-600'
                            : ''
                    }`}
                    onClick={() => setActiveTab('denied')}
                >
                    Denied Delivery Man
                </button>
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-lg shadow border">
                {/* Search Bar */}
                <div className="flex justify-end p-4">
                    <div className="relative w-64">
                        <input
                            type="text"
                            placeholder="Search deliveryman..."
                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <FaSearch className="absolute left-3 top-3 text-gray-400" />
                    </div>
                </div>

                {/* Table */}
                <table className="min-w-full">
                    <thead>
                        <tr className="bg-gray-50 border-b h-16">
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">SI</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact Info</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Zone</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Job Type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Join Request Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {[1, 2, 3].map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                                <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div>
                                        <p>+1 234 567 890</p>
                                        <p className="text-sm text-gray-500">john@example.com</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">Zone 1</td>
                                <td className="px-6 py-4 whitespace-nowrap">Permanent</td>
                                <td className="px-6 py-4 whitespace-nowrap">2024-02-20</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex space-x-2">
                                        {activeTab === 'pending' ? (
                                            <>
                                                <button className="p-2 border border-green-600 text-green-600 hover:bg-green-100 rounded">
                                                    <FaCheck />
                                                </button>
                                                <button className="p-2 border border-red-600 text-red-600 hover:bg-red-100 rounded">
                                                    <FaTimes />
                                                </button>
                                            </>
                                        ) : (
                                            <button className="p-2 text-blue-600 hover:bg-blue-100 rounded">
                                                View Details
                                            </button>
                                        )}
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