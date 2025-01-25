"use client"
import React, { useState } from 'react';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';

const Page = () => {
    const [activeButton, setActiveButton] = useState('new');

    return (
        <div className="p-6">
            <h2 className="text-xl font-semibold mb-6">Advertisement Requests</h2>
            <div className="flex space-x-4 mb-6">
                <button
                    className={`px-4 py-2 rounded-lg transition-colors ${activeButton === 'new'
                            ? 'bg-teal-800 text-white'
                            : 'text-black hover:bg-teal-800 hover:text-white'
                        }`}
                    onClick={() => setActiveButton('new')}
                >
                    New Request
                </button>
                <button
                    className={`px-4 py-2 rounded-lg transition-colors ${activeButton === 'update'
                            ? 'bg-teal-800 text-white'
                            : 'text-black hover:bg-teal-800 hover:text-white'
                        }`}
                    onClick={() => setActiveButton('update')}
                >
                    Update Request
                </button>
                <button
                    className={`px-4 py-2 rounded-lg transition-colors ${activeButton === 'denied'
                            ? 'bg-teal-800 text-white'
                            : 'text-black hover:bg-teal-800 hover:text-white'
                        }`}
                    onClick={() => setActiveButton('denied')}
                >
                    Denied Requests
                </button>
            </div>
            <div className="bg-white rounded-xl shadow-sm border">


                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sl</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ads ID</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ads Title</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Store Info</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ads Type</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Duration</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr>
                                <td className="px-4 py-3">1</td>
                                <td className="px-4 py-3">#AD001</td>
                                <td className="px-4 py-3">Summer Sale</td>
                                <td className="px-4 py-3">Store 1</td>
                                <td className="px-4 py-3">Banner</td>
                                <td className="px-4 py-3">30 Days</td>
                                <td className="px-4 py-3">
                                    <div className="flex space-x-2">
                                        <button className="p-2 border border-blue-600 rounded text-blue-600 hover:text-blue-800">
                                            <FaPencilAlt className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 border border-red-600 rounded text-red-600 hover:text-red-800">
                                            <FaTrash className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3">2</td>
                                <td className="px-4 py-3">#AD002</td>
                                <td className="px-4 py-3">Flash Sale</td>
                                <td className="px-4 py-3">Store 2</td>
                                <td className="px-4 py-3">Pop-up</td>
                                <td className="px-4 py-3">7 Days</td>
                                <td className="px-4 py-3">
                                    <div className="flex space-x-2">
                                        <button className="p-2 border border-blue-600 rounded text-blue-600 hover:text-blue-800">
                                            <FaPencilAlt className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 border border-red-600 rounded text-red-600 hover:text-red-800">
                                            <FaTrash className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Page;
