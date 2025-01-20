'use client'
import { useState } from 'react';
import { FaSearch, FaFileExport, FaMedal, FaExchangeAlt, FaWallet } from 'react-icons/fa';
import Image from 'next/image';

export default function LoyaltyPointsReport() {
    const [filterData, setFilterData] = useState({
        fundType: '',
        customer: '',
        duration: ''
    });

    return (
        <div className="p-4">
            {/* Header */}
            <div className="flex items-center mb-6">
                <div className="relative w-8 h-8 mr-3 ">
                    <Image
                        src="/modulesection/loyalty.png"
                        alt="Loyalty Points"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold">Loyalty Points Report</h1>
                    <p className="text-sm text-gray-500">Track customer loyalty points</p>
                </div>
            </div>

            {/* Filter Section */}
            <div className="bg-white px-4 pt-4 mb-6 shadow m-auto">
                <h1 className='mb-3'>Filter Options</h1>
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <select className="p-2.5 bg-white border rounded-lg">
                        <option>All Types</option>
                        <option>Earned</option>
                        <option>Converted</option>
                    </select>

                    <select className="p-2.5 bg-white border rounded-lg">
                        <option>Select Customer</option>
                        <option>John Doe</option>
                        <option>Jane Smith</option>
                    </select>

                    <input 
                        type="date" 
                        className="p-2.5 bg-white border rounded-lg"
                    />
                </div>
                <div className="flex justify-end space-x-4 py-2">
                    <button className="px-4 py-2 border bg-gray-100 rounded-lg hover:bg-gray-200">Reset</button>
                    <button className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700">
                        Filter
                    </button>
                </div>
            </div>

            {/* Points Statistics */}
            <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="bg-blue-50 rounded-lg p-6 flex items-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mr-4">
                        <FaMedal className="text-blue-600 text-xl" />
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-blue-600">12,345</p>
                        <p className="text-sm text-gray-600">Points Earned</p>
                    </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6 flex items-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mr-4">
                        <FaExchangeAlt className="text-green-600 text-xl" />
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-green-600">5,678</p>
                        <p className="text-sm text-gray-600">Points Converted</p>
                    </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-6 flex items-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mr-4">
                        <FaWallet className="text-purple-600 text-xl" />
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-purple-600">6,667</p>
                        <p className="text-sm text-gray-600">Current Points</p>
                    </div>
                </div>
            </div>

            {/* Transactions Table */}
            <div className="bg-white rounded border">
                <div className="p-4 flex justify-end border-b">
                    <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                        <FaFileExport />
                        Export
                    </button>
                </div>

                <table className="min-w-full">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">SL</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Transaction ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer Info</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Points Earned</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Points Converted</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Current Points</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reference</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Created At</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {[1, 2, 3].map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="px-6 py-4">{index + 1}</td>
                                <td className="px-6 py-4">#LP-{1000 + index}</td>
                                <td className="px-6 py-4">John Doe</td>
                                <td className="px-6 py-4 text-green-600">100</td>
                                <td className="px-6 py-4 text-blue-600">50</td>
                                <td className="px-6 py-4">150</td>
                                <td className="px-6 py-4">Purchase</td>
                                <td className="px-6 py-4">Order #123</td>
                                <td className="px-6 py-4">2024-02-20</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
