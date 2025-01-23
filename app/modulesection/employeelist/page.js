'use client'
import { useState } from 'react';
import { FaSearch, FaFileExport, FaUsers, FaEdit, FaTrash } from 'react-icons/fa';
import Image from 'next/image';

export default function EmployeeList() {
    return (
        <div className="p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                    <div className="relative w-8 h-8 mr-3">
                        <Image
                            src="/modulesection/role.png"
                            alt="Employee List"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold">Employee List</h1>
                        <p className="text-sm text-gray-500">Manage your employees</p>
                    </div>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
                    <span className="text-xl">+</span>
                    Add New
                </button>
            </div>

            {/* Employee Table */}
            <div className="bg-white rounded-lg border shadow">
                <div className="p-4 flex justify-end items-center border-b">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search employees..."
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
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sl</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {[1, 2, 3].map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="px-6 py-4">{index + 1}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                                        <div>
                                            <p className="font-medium">John Doe</p>
                                            <p className="text-sm text-gray-500">ID: #EMP-{1000 + index}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">john@example.com</td>
                                <td className="px-6 py-4">+1 234 567 890</td>
                                <td className="px-6 py-4">
                                    <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                                        Admin
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex space-x-2">
                                        <button className="p-2 border border-blue-600 text-blue-600 hover:bg-blue-100 rounded">
                                            <FaEdit />
                                        </button>
                                        <button className="p-2 border border-red-600 text-red-600 hover:bg-red-100 rounded">
                                            <FaTrash />
                                        </button>
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
