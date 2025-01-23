'use client'
import { useState } from 'react';
import { FaSearch, FaFileExport, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

export default function SubscribedMailList() {
    const [filterData, setFilterData] = useState({
        date: '',
        sortBy: '',
        sortOrder: '',
        chooseFirst: ''
    });

    return (
        <div className="p-4">
            {/* Header */}
            <div className="flex items-center mb-6">
                <div className="relative w-8 h-8 mr-3">
                    <Image
                        src="/modulesection/email.png"
                        alt="Subscribed Mail List"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold">Subscribed Mail List</h1>
                    <p className="text-sm text-gray-500">Manage your email subscriptions</p>
                </div>
            </div>

            {/* Filter Form */}
            <div className="bg-white p-4 rounded-lg shadow mb-6">
                Subscription date
                <div className="grid grid-cols-3 gap-4">
                    <input
                        type="date"
                        className="p-2 border rounded bg-[#F8FAFD]"
                        value={filterData.date}
                        onChange={(e) => setFilterData({ ...filterData, date: e.target.value })}
                    />

                    <select
                        className="p-2.5 bg-white border rounded"
                        value={filterData.sortBy}
                        onChange={(e) => setFilterData({ ...filterData, sortBy: e.target.value })}
                    >
                        <option value="">Sort By</option>
                        <option value="date">Date</option>
                        <option value="email">Email</option>
                    </select>



                    <select
                        className="p-2.5 bg-white border rounded"
                        value={filterData.chooseFirst}
                        onChange={(e) => setFilterData({ ...filterData, chooseFirst: e.target.value })}
                    >
                        <option value="">Choose First</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </select>
                    
                </div>
                <div className="flex justify-end mt-4">
                        <button className="flex items-center gap-2 px-6 py-2 bg-teal-600 text-white rounded hover:bg-teal-700">
                            Filter
                        </button>
                    </div>
            </div>

            {/* Email List Table */}
            <div className="bg-white rounded-lg shadow">
                <div className="p-4 flex justify-end items-center border-b">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search emails..."
                                className="w-64 pl-10 pr-4 py-2 border rounded-lg"
                            />
                            <FaSearch className="absolute left-3 top-3 text-gray-400" />
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 text-green-600 border border-green-600 rounded ">
                            <FaFileExport />
                            Export
                        </button>
                    </div>
                </div>
                <table className="min-w-full">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sl</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Created At</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {[1, 2, 3].map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="px-6 py-4">{index + 1}</td>
                                <td className="px-6 py-4">example{index + 1}@email.com</td>
                                <td className="px-6 py-4">2024-02-20</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}