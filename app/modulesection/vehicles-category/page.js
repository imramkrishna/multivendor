'use client'
import { useState } from 'react'
import { FaSearch, FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import Image from 'next/image';

export default function VehicleCategory() {
    const [isActive, setIsActive] = useState(true);

    return (
        <div className="p-4">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                    <div className="relative w-10 h-10 mr-3">
                        <Image
                            src="/modulesection/active-deliveryman.svg"
                            alt="Vehicle Category"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <h1 className="text-2xl font-bold">Vehicle Categories</h1>
                </div>
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-lg shadow border">
                {/* Search Bar */}
                <div className="relative flex mb-8 mt-2 mr-4 items-end justify-end">
                    <input
                        type="text"
                        placeholder="Search categories..."
                        className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <table className="min-w-full">
                        <thead>
                            <tr className="bg-gray-50 border-b h-16">
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SI</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deliveryman</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Min Coverage (km)</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Max Coverage (km)</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Extra Charges ($)</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {[1, 2, 3].map((item, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">Bike</td>
                                    <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                                    <td className="px-6 py-4 whitespace-nowrap">1.5</td>
                                    <td className="px-6 py-4 whitespace-nowrap">10</td>
                                    <td className="px-6 py-4 whitespace-nowrap">5.00</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center space-x-2">
                                            <span className={`inline-flex text-xs leading-5 font-semibold rounded-full 
                                                ${isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                                {isActive ? '' : ''}
                                            </span>
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input 
                                                    type="checkbox"
                                                    className="sr-only peer"
                                                    checked={isActive}
                                                    onChange={() => setIsActive(!isActive)}
                                                />
                                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                                                    peer-focus:ring-blue-300 rounded-full peer 
                                                    peer-checked:after:translate-x-full peer-checked:after:border-white 
                                                    after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                                                    after:bg-white after:border-gray-300 after:border after:rounded-full 
                                                    after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600">
                                                </div>
                                            </label>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <button className="text-blue-600 hover:text-blue-900 mr-3 border p-2 rounded border-blue-400">
                                            <FaEye />
                                        </button>
                                        <button className="text-teal-600 hover:text-teal-900 mr-3 border p-2 rounded border-teal-800">
                                            <FaEdit />
                                        </button>
                                        <button className="text-red-600 hover:text-red-900 border p-2 rounded border-red-400">
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
