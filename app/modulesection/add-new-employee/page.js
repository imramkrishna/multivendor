'use client'
import { useState } from 'react';
import { FaUpload, FaUserPlus } from 'react-icons/fa';
import Image from 'next/image';

export default function AddNewEmployee() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        zone: '',
        role: '',
        phone: '',
        employeeImage: null,
        email: '',
        password: '',
        confirmPassword: ''
    });

    return (
        <div className="p-4">
            {/* Header */}
            <div className="flex items-center mb-6">
                <div className="relative w-8 h-8 mr-3">
                    <Image
                        src="/modulesection/role.png"
                        alt="Add Employee"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold">Add New Employee</h1>
                    <p className="text-sm text-gray-500">Create a new employee account</p>
                </div>
            </div>

            <form className="space-y-6">
                {/* General Information */}
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-4">General Information</h2>
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                First Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full p-2  border rounded-lg"
                                value={formData.firstName}
                                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Last Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full p-2 border rounded-lg"
                                value={formData.lastName}
                                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Zone <span className="text-red-500">*</span>
                            </label>
                            <select
                                required
                                className="w-full bg-white p-2.5 border rounded-lg"
                                value={formData.zone}
                                onChange={(e) => setFormData({...formData, zone: e.target.value})}
                            >
                                <option value="">Select Zone</option>
                                <option value="all">All</option>
                                <option value="zone1">Zone 1</option>
                                <option value="zone2">Zone 2</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Role <span className="text-red-500">*</span>
                            </label>
                            <select
                                required
                                className="w-full bg-white p-2.5 border rounded-lg"
                                value={formData.role}
                                onChange={(e) => setFormData({...formData, role: e.target.value})}
                            >
                                <option value="">Select Role</option>
                                <option value="admin">Admin</option>
                                <option value="manager">Manager</option>
                                <option value="employee">Employee</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Phone <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                required
                                className="w-full p-2 border rounded-lg"
                                value={formData.phone}
                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Employee Image (1:1) <span className="text-red-500">*</span>
                            </label>
                            <div className="flex items-center justify-center w-40 h-40 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
                                <input type="file" className="hidden" accept="image/*" />
                                <FaUpload className="text-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Account Information */}
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-4">Account Information</h2>
                    <div className="grid grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full p-2 border rounded-lg"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Password <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="password"
                                required
                                className="w-full p-2 border rounded-lg"
                                value={formData.password}
                                onChange={(e) => setFormData({...formData, password: e.target.value})}
                                placeholder="Min 8 characters with number, letters & symbol"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Confirm Password <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="password"
                                required
                                className="w-full p-2 border rounded-lg"
                                value={formData.confirmPassword}
                                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                            />
                        </div>
                    </div>

                {/* Form Actions */}
                <div className="flex justify-end mt-4 space-x-4">
                    <button
                        type="reset"
                        className="px-6 py-2 border rounded hover:bg-gray-50"
                        onClick={() => setFormData({
                            firstName: '',
                            lastName: '',
                            zone: '',
                            role: '',
                            phone: '',
                            employeeImage: null,
                            email: '',
                            password: '',
                            confirmPassword: ''
                        })}
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        className="px-6 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
                    >
                        Submit
                    </button>
                </div>
                </div>

            </form>
        </div>
    );
}
