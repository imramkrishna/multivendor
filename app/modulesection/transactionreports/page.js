'use client'
import { useState } from 'react';
import { FaSearch, FaFileExport, FaHistory } from 'react-icons/fa';
import Image from 'next/image';

export default function TransactionHistory() {
    return (
        <div className="p-4">
            {/* Header */}
            <div className="flex items-center mb-6">
                <div className="relative w-8 h-8 mr-3">
                    <Image
                        src="/modulesection/transaction.png"
                        alt="Transaction History"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold">Store Withdraw Transaction</h1>
                    <p className="text-sm text-gray-500">View all transactions</p>
                </div>
            </div>

            {/* Transaction Table */}
            <div className="bg-white rounded-lg shadow border">
                <div className="p-4 flex justify-end items-center border-b">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search transactions..."
                                className="w-64 pl-10 pr-4 py-2 border rounded-lg"
                            />
                            <FaSearch className="absolute left-3 top-3 text-gray-400" />
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 text-teal-600 border border-teal-600 rounded-lg hover:bg-teal-50">
                            <FaFileExport />
                            Export
                        </button>
                    </div>
                </div>

                <table className="min-w-full">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">SL</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Store</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Request Time</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {[1, 2, 3].map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="px-6 py-4">{index + 1}</td>
                                <td className="px-6 py-4 font-medium">$1,234.56</td>
                                <td className="px-6 py-4">Store Name {index + 1}</td>
                                <td className="px-6 py-4">2024-02-20 14:30</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 text-xs rounded-full ${
                                        index === 0 ? 'bg-green-100 text-green-800' :
                                        index === 1 ? 'bg-yellow-100 text-yellow-800' :
                                        'bg-red-100 text-red-800'
                                    }`}>
                                        {index === 0 ? 'Completed' :
                                         index === 1 ? 'Pending' :
                                         'Failed'}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
