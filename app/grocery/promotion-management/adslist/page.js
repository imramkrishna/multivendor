"use client"
import React, { useState } from 'react';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';

const Page = () => {
  const [adStatus, setAdStatus] = useState({
    1: 'active',
    2: 'inactive'
  });

  const [priorities, setPriorities] = useState({
    1: '1',
    2: '2'
  });

  const handleStatusChange = (id) => {
    setAdStatus(prev => ({
      ...prev,
      [id]: prev[id] === 'active' ? 'inactive' : 'active'
    }));
  };

  const handlePriorityChange = (id, value) => {
    setPriorities(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <div className="p-6">
                <h2 className="text-2xl font-semibold mb-6">Ads List</h2>
                
      <div className="bg-white rounded-xl shadow-sm p-6 border">
      <div className="flex justify-end mb-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search ads..."
                            className="w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg
                                className="w-5 h-5 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <select className="ml-4 bg-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="all">All Ads</option>
                        <option value="running">Running</option>
                        <option value="paused">Paused</option>
                        <option value="approved">Approved</option>
                        <option value="expired">Expired</option>
                    </select>
                </div>

        
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
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Priority</th>
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
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={adStatus[1] === 'active'} 
                      onChange={() => handleStatusChange(1)} 
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </td>
                <td className="px-4 py-3">
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={priorities[1]}
                    onChange={(e) => handlePriorityChange(1, e.target.value)}
                    className="w-20 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </td>
                <td className="px-4 py-3">
                  <div className="flex space-x-2">
                    <button className="p-2 text-blue-600 hover:text-blue-800">
                      <FaPencilAlt className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-red-600 hover:text-red-800">
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
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={adStatus[2] === 'active'} 
                      onChange={() => handleStatusChange(2)} 
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </td>
                <td className="px-4 py-3">
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={priorities[2]}
                    onChange={(e) => handlePriorityChange(2, e.target.value)}
                    className="w-20 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </td>
                <td className="px-4 py-3">
                  <div className="flex space-x-2">
                    <button className="p-2 text-blue-600 hover:text-blue-800">
                      <FaPencilAlt className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-red-600 hover:text-red-800">
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

