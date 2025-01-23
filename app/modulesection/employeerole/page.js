'use client'
import { useState } from 'react';
import { FaSearch, FaFileExport, FaUserTie, FaEdit, FaTrash } from 'react-icons/fa';
import Image from 'next/image';

export default function EmployeeRole() {
    const [formData, setFormData] = useState({
        roleName: '',
        permissions: []
    });

    const permissions = [
        'Select all', 'Collect Cash', 'Addon', 'Attribute', 'Banner', 'Campaign',
        'Category', 'Coupon', 'Cashback', 'Customer management', 'Deliveryman',
        'Provide dm earning', 'Employee', 'Item', 'Notification', 'Order',
        'Store', 'Report', 'Settings', 'Withdraw list', 'Zone', 'Module',
        'Parcel', 'Pos', 'Unit', 'Subscription'
    ];

    const handlePermissionChange = (permission) => {
        if (permission === 'Select all') {
            const allPermissions = formData.permissions.length === permissions.length - 1 
                ? [] 
                : permissions.filter(p => p !== 'Select all');
            setFormData({ ...formData, permissions: allPermissions });
            return;
        }

        const updatedPermissions = formData.permissions.includes(permission)
            ? formData.permissions.filter(p => p !== permission)
            : [...formData.permissions, permission];
        setFormData({ ...formData, permissions: updatedPermissions });
    };

    return (
        <div className="p-4">
            {/* Header */}
            <div className="flex items-center mb-6">
                <div className="relative w-8 h-8 mr-3">
                    <Image
                        src="/modulesection/role.png"
                        alt="Employee Role"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold">Employee Role</h1>
                    <p className="text-sm text-gray-500">Manage employee roles and permissions</p>
                </div>
            </div>

            {/* Role Form */}
            <div className="bg-white p-6 rounded-lg shadow mb-6">
                <form>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Role Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full p-2 border rounded-lg"
                            value={formData.roleName}
                            onChange={(e) => setFormData({...formData, roleName: e.target.value})}
                        />
                    </div>

                    <div className="mb-6">
                        <div className="block items-center justify-between mb-2">
                            <label className="block text-md font-medium text-gray-700">
                                Set Permissions: <span className="text-red-500 mr-4">*</span>
                                <input
                                    type="checkbox"
                                    id="selectAll"
                                    checked={formData.permissions.length === permissions.length - 1}
                                    onChange={() => handlePermissionChange('Select all')}
                                    className="mr-2"
                                />
                                <label htmlFor="selectAll" className="text-sm font-medium text-gray-700">
                                    Select All
                                </label>
                            </label>
                            <div className="flex items-center">
                               
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-6 gap-4 mt-4">
                            {permissions.filter(p => p !== 'Select all').map((permission) => (
                                <div key={permission} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id={permission}
                                        checked={formData.permissions.includes(permission)}
                                        onChange={() => handlePermissionChange(permission)}
                                        className="mr-2"
                                    />
                                    <label htmlFor={permission}>{permission}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-end space-x-4">
                        <button
                            type="reset"
                            className="px-6 py-2 border rounded hover:bg-gray-50"
                            onClick={() => setFormData({ roleName: '', permissions: [] })}
                        >
                            Reset
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 bg-teal-600 text-white rounded- hover:bg-teal-700"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>

            {/* Roles Table */}
            <div className="bg-white rounded-lg shadow border">
                <div className="p-4 flex justify-end items-center border-b">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search roles..."
                                className="w-64 pl-10 pr-4 py-2 border rounded-lg"
                            />
                            <FaSearch className="absolute left-3 top-3 text-gray-400" />
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 text-teal-600 border border-teal-600 rounded">
                            <FaFileExport />
                            Export
                        </button>
                    </div>
                </div>

                <table className="min-w-full">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">SI</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Permissions</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Created At</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {[1, 2, 3].map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="px-6 py-4">{index + 1}</td>
                                <td className="px-6 py-4">Admin</td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">Order</span>
                                        <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">Store</span>
                                        <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">+3 more</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">2024-02-20</td>
                                <td className="px-6 py-4">
                                    <div className="flex space-x-2">
                                        <button className="p-2 text-blue-600 border border-blue-600 hover:bg-blue-100 rounded">
                                            <FaEdit />
                                        </button>
                                        <button className="p-2 text-red-600 border border-red-600 hover:bg-red-100 rounded">
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
