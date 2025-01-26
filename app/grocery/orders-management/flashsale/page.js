"use client"
import React, { useState } from 'react'
import { FaPencilAlt, FaTrash } from 'react-icons/fa';


const renderIcon = (iconPath, className) => (
    <img
        src={iconPath}
        alt="flash sale icon"
        className={`w-6 h-6 ${className}`}
    />
)

const FlashSalePage = () => {
    return (
        <div className="p-2 space-y-6">
            <h1 className="text-2xl font-bold text-gray-800 flex items-center mb-6">
                {renderIcon("/icons/flashsale.png", "mr-3")}
                Flash Sale Setup
            </h1>
            {/* Flash Deal Setup Section */}
            <div className="bg-white rounded-xl shadow-sm p-6 border">
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Title(Default)</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter deal title"
                            />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-4">
                    {/* Discount Bearer */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Discount Bearer
                        </label>
                        <div className="grid grid-cols-2 gap-4 mt-4 bg-slate-50 h-40 justify-center items-center rounded-2xl">
                            <div className='mx-4'>
                                <label className="block text-xs text-gray-500 mb-1">
                                    Admin (%)
                                </label>
                                <input
                                    type="number"
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter admin %"
                                    min="0"
                                    max="100"
                                />
                            </div>
                            <div className='mx-4'>
                                <label className="block text-xs text-gray-500 mb-1">
                                    Store Owner (%)
                                </label>
                                <input
                                    type="number"
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter store %"
                                    min="0"
                                    max="100"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Validity */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Validity
                        </label>
                        <div className="grid grid-cols-2 gap-4 mt-4 bg-slate-50 h-40 justify-center items-center rounded-2xl">
                            <div className='mx-4'>
                                <label className="block text-xs text-gray-500 mb-1">
                                    Start Date
                                </label>
                                <input
                                    type="datetime-local"
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className='mx-4'>
                                <label className="block text-xs text-gray-500 mb-1">
                                    End Date
                                </label>
                                <input
                                    type="datetime-local"
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            
                        </div>
                        <div className="flex justify-end space-x-4 mt-4">
                        <button
                            type="reset"
                            className="px-6 py-2 text-black bg-slate-100 rounded transition-colors"
                        >
                            Reset
                        </button>
                        <button className="px-6 py-2 bg-teal-800 text-white rounded hover:bg-teal-800 transition-all duration-200">
                            Submit
                        </button>
                    </div>
                    </div>
                </div>

            </div>


            {/* Flash Sale List Section */}
            <div className="bg-white rounded-xl shadow-sm p-6 border">
                <h2 className="text-xl font-semibold mb-6">Flash Sale List</h2>
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Duration</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Active Products</th>

                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Publish</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        <tr>
                            <td className="px-4 py-3">Summer Sale</td>
                            <td className="px-4 py-3">
                                <div className="flex">
                                    <span className="text-xs text-gray-500"> 2024-02-01 10:00 - </span>
                                    <span className="text-xs text-gray-500"> 2024-02-07 23:59</span>
                                </div>
                            </td>
                            <td className="px-10 py-3">10</td>

                            <td className="px-4 py-3">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                            </td>
                            <td className="px-4 py-3">
                                <div className="flex space-x-2">
                                    <button className="text-teal-600 p-1 font-bold rounded-lg border-2 border-teal-700 hover:bg-teal-800 hover:text-white">+Add New Product</button>
                                    <button className="p-2 rounded-lg text-cyan-500 border-2 border-teal-700"><FaPencilAlt /></button>
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

export default FlashSalePage