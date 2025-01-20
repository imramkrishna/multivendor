'use client'
import { useState } from 'react';
import { FaSearch, FaFileExport, FaWallet, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import Image from 'next/image';

export default function WalletReport() {
    const [filterData, setFilterData] = useState({
        fundType: '',
        customer: '',
        duration: ''
    });

    return (
        <div className="p-4">
            {/* Header */}
            <div className="flex items-center mb-6">
                <div className="relative w-8 h-8 mr-3">
                    <Image
                        src="/modulesection/walletreport.png"
                        alt="Wallet Report"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold">Wallet Report</h1>
                    <p className="text-sm text-gray-500">View customer wallet transactions</p>
                </div>
            </div>

            {/* Filter Section */}
            <div className="bg-white p-4 rounded shadow m-auto mt-2 pt-4">
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <select className="p-2.5 bg-white border rounded-lg">
                        <option>Select Fund Type</option>
                        <option>Add Fund</option>
                        <option>Deduct Fund</option>
                    </select>

                    <select className="p-2.5 bg-white border rounded-lg">
                        <option>Select Customer</option>
                        <option>John Doe</option>
                        <option>Jane Smith</option>
                    </select>

                    <input 
                        type="date" 
                        className="p-2 border rounded-lg"
                    />
                </div>
                <div className="flex justify-end space-x-4">
                    <button className="px-5 py-2 bg-gray-100 border rounded hover:bg-gray-200">Reset</button>
                    <button className="px-5 py-2 bg-teal-600 text-white rounded hover:bg-teal-700">
                        Filter
                    </button>
                </div>
            </div>

            {/* Statistics Section */}
            <div className="grid grid-cols-2 gap-6 mb-6 mt-5 rounded border">
                {/* Debit/Credit Stats */}
                <div className="grid grid-cols-2 gap-6 p-4">
                {/* Credit Card */}
                <div className="bg-green-50 rounded-lg p-6 flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                        <FaArrowUp className="text-green-600 text-xl" />
                    </div>
                    <p className="text-2xl font-bold text-green-600 mb-1">$1,234.56</p>
                    <p className="text-sm text-gray-600">Total Credit</p>
                </div>

                {/* Debit Card */}
                <div className="bg-red-50 rounded-lg p-6 flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-3">
                        <FaArrowDown className="text-red-600 text-xl" />
                    </div>
                    <p className="text-2xl font-bold text-red-600 mb-1">$567.89</p>
                    <p className="text-sm text-gray-600">Total Debit</p>
                </div>
            </div>
                {/* Chart */}
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-4">Fund Statistics</h3>
                    <div className="h-48 flex items-center justify-center text-gray-400">
                        [Chart Component Here]
                    </div>
                </div>
            </div>

            

            {/* Transaction Table */}
            
                <div className='border'>
                <div className="bg-white rounded-lg shadow">
                <div className="p-4 flex justify-between items-center border-b">
                    <div className="relative w-64">
                        <input
                            type="text"
                            placeholder="Search transactions..."
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
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Transaction ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer Info</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Credit</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Debit</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bonus</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Balance</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reference</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[1, 2, 3].map((item, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                                <td className="px-6 py-4">{index + 1}</td>
                                <td className="px-6 py-4">#TRX-{1000 + index}</td>
                                <td className="px-6 py-4">John Doe</td>
                                <td className="px-6 py-4 text-green-600">$100.00</td>
                                <td className="px-6 py-4 text-red-600">$0.00</td>
                                <td className="px-6 py-4">$5.00</td>
                                <td className="px-6 py-4">$105.00</td>
                                <td className="px-6 py-4">Add Fund</td>
                                <td className="px-6 py-4">Manual</td>
                                <td className="px-6 py-4">2024-02-20</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );
}
