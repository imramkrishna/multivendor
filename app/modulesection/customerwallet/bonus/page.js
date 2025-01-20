'use client'
import { useState } from 'react';
import { FaEdit, FaTrash, FaToggleOn, FaToggleOff } from 'react-icons/fa';
import Image from 'next/image';

export default function BonusSetup() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        type: '',
        amount: '',
        minAmount: '',
        maxBonus: '',
        startDate: '',
        expireDate: ''
    });

    return (
        <div className="p-4">
            {/* Header */}
            <div className="flex items-center mb-6">
                <div className="relative w-8 h-8 mr-3">
                    <Image
                        src="/modulesection/bonus.png"
                        alt="Bonus Setup"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <h1 className="text-2xl font-bold">Bonus Setup</h1>
            </div>

            {/* Bonus Setup Form */}
            <div className="bg-white p-6 rounded-lg shadow mb-6">
                <form className="space-y-6">
                    <div className="grid grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Bonus Title (Default) <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full p-2 border rounded-lg"
                                value={formData.title}
                                onChange={(e) => setFormData({...formData, title: e.target.value})}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Bonus Type <span className="text-red-500">*</span>
                            </label>
                            <select 
                                className="w-full bg-white p-2.5 border rounded-lg"
                                required
                                value={formData.type}
                                onChange={(e) => setFormData({...formData, type: e.target.value})}
                            >
                                <option value="">Select Type</option>
                                <option value="percentage">Percentage</option>
                                <option value="fixed">Fixed Amount</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Bonus Amount (%) <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="number"
                                required
                                className="w-full p-2 border rounded-lg"
                                value={formData.amount}
                                onChange={(e) => setFormData({...formData, amount: e.target.value})}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Minimum Add Money Amount ($) <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="number"
                                required
                                className="w-full p-2 border rounded-lg"
                                value={formData.minAmount}
                                onChange={(e) => setFormData({...formData, minAmount: e.target.value})}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Maximum Bonus ($)
                            </label>
                            <input
                                type="number"
                                className="w-full p-2 border rounded-lg"
                                value={formData.maxBonus}
                                onChange={(e) => setFormData({...formData, maxBonus: e.target.value})}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Start Date <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="date"
                                required
                                className="w-full p-2 border rounded-lg"
                                value={formData.startDate}
                                onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Expire Date <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="date"
                                required
                                className="w-full p-2 border rounded-lg"
                                value={formData.expireDate}
                                onChange={(e) => setFormData({...formData, expireDate: e.target.value})}
                            />
                        </div>

                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Short Description (Default) <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                required
                                className="w-full p-2 border rounded-lg"
                                rows="3"
                                value={formData.description}
                                onChange={(e) => setFormData({...formData, description: e.target.value})}
                            ></textarea>
                        </div>
                    </div>

                    <div className="flex justify-end space-x-4">
                        <button
                            type="reset"
                            className="px-6 py-2 bg-gray-100 border rounded hover:bg-gray-150"
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
                </form>
            </div>

            {/* Bonus List Table */}
            <div className="bg-white rounded-lg shadow">
                <table className="min-w-full">
                    <thead>
                        <tr className="bg-gray-50 border-b">
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">SI</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bonus Title</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bonus Amount</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Started On</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Expires On</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {[1, 2, 3].map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="px-6 py-4">{index + 1}</td>
                                <td className="px-6 py-4">Welcome Bonus</td>
                                <td className="px-6 py-4">10%</td>
                                <td className="px-6 py-4">2024-02-20</td>
                                <td className="px-6 py-4">2024-03-20</td>
                                <td className="px-6 py-4">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        Active
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex space-x-2">
                                        <button className="text-blue-600 p-2 border border-blue-600 rounded hover:text-blue-900">
                                            <FaEdit />
                                        </button>
                                        <button className="text-red-600 p-2 border border-red-600 rounded hover:text-red-900">
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
