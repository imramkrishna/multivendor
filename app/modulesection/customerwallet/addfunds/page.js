'use client'
import { useState } from 'react';
import { FaWallet } from 'react-icons/fa';
import Image from 'next/image';

export default function AddFunds() {
    const [formData, setFormData] = useState({
        customer: '',
        amount: '',
        reference: '',
        note: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <div className="p-4">
            {/* Header */}
            <div className="flex items-center mb-6">
                <div className="relative w-8 h-8 mr-3 rounded-full border">
                    <Image
                        src="/modulesection/wallet.png"
                        alt="Add Funds"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold">Add Funds</h1>
                    <p className="text-sm text-gray-500">Add funds to customer wallet</p>
                </div>
            </div>

            {/* Form Section */}
            <div className="w-full bg-white p-6 border rounded-lg">
                <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                        {/* Two Column Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            {/* Customer Selection */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Customer <span className="text-red-500">*</span>
                                </label>
                                <select 
                                    className="w-full bg-white p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    required
                                    value={formData.customer}
                                    onChange={(e) => setFormData({...formData, customer: e.target.value})}
                                >
                                    <option value="">Select Customer</option>
                                    <option value="1">John Doe</option>
                                    <option value="2">Jane Smith</option>
                                </select>
                            </div>

                            {/* Amount Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Amount $ <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    required
                                    className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    value={formData.amount}
                                    onChange={(e) => setFormData({...formData, amount: e.target.value})}
                                />
                            </div>
                        </div>

                        {/* Two Column Grid for Additional Fields */}
                        <div className="grid grid-cols-2 gap-6">
                            {/* Reference Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Reference (Optional)
                                </label>
                                <input
                                    type="text"
                                    className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    value={formData.reference}
                                    onChange={(e) => setFormData({...formData, reference: e.target.value})}
                                />
                            </div>

                            {/* Note Input */}
                           
                        </div>

                        {/* Form Actions */}
                        <div className="flex justify-end space-x-4 pt-4">
                            <button
                                type="reset"
                                className="px-6 py-2 border rounded hover:bg-gray-100"
                                onClick={() => setFormData({ customer: '', amount: '', reference: '', note: '' })}
                            >
                                Reset
                            </button>
                            <button
                                type="submit"
                                className="px-6 py-2 bg-teal-700 text-white rounded hover:bg-teal-800"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
