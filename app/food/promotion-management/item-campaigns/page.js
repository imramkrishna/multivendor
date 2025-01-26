"use client"
import React, { useState } from 'react';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';

const renderIcon = (iconPath, className) => (
    <img
        src={iconPath}
        alt="campaign icon"
        className={`w-6 h-6 ${className}`}
    />
)

const Page = () => {
    const [campaignStatus, setCampaignStatus] = useState({
        1: 'active',
        2: 'inactive'
    });

    const handleStatusChange = (id) => {
        setCampaignStatus(prev => ({
            ...prev,
            [id]: prev[id] === 'active' ? 'inactive' : 'active'
        }));
    };

    const getStatusStyles = (status) => {
        return status === 'active'
            ? 'bg-green-100 text-green-800 hover:bg-green-200'
            : 'bg-red-100 text-red-800 hover:bg-red-200';
    };

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-800 flex items-center mb-6 mt-6">
                {renderIcon("/icons/campaign.png", "mr-3")}
                Campaigns
            </h1>
            <div className="bg-white rounded-xl shadow-sm p-6 border mt-10">
                <h2 className="text-xl font-semibold mb-6">Campaign List</h2>
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                        </tr>
                    </thead>
                    
                    <tbody className="divide-y divide-gray-200">
                        <tr>
                            <td className="px-4 py-3">Winter Campaign</td>
                            <td className="px-4 py-3">
                                <div className="flex">
                                    <span className="text-sm text-gray-500">2024-02-01</span>
                                </div>
                            </td>
                            <td className="px-4 py-3">
                                <span className="text-sm text-gray-500">10:00 AM</span>
                            </td>
                            <td className="px-4 py-3">
                                <span className="text-sm font-medium">₹500</span>
                            </td>
                            <td className="px-4 py-3">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={campaignStatus[1] === 'active'}
                                        onChange={() => handleStatusChange(1)}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer 
                                        dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white 
                                        after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white 
                                        after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
                                        after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                    </div>
                                    {/* <span className="ml-3 text-sm font-medium text-gray-500">
                                        {campaignStatus[1].charAt(0).toUpperCase() + campaignStatus[1].slice(1)}
                                    </span> */}
                                </label>
                            </td>
                            <td className="px-4 py-3">
                                <div className="flex space-x-2">
                                    <button className="p-2 rounded-lg text-blue-600 border border-blue-600 hover:bg-blue-50">
                                        <FaPencilAlt className="w-4 h-4" />
                                    </button>
                                    <button className="p-2 rounded-lg text-red-600 border border-red-600 hover:bg-red-50">
                                        <FaTrash className="w-4 h-4" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Page
