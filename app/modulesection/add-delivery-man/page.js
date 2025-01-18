'use client'
import { useState } from 'react';
import Image from 'next/image';
import { FaUpload, FaUser } from 'react-icons/fa';

export default function AddDeliveryMan() {
    const [identityImages, setIdentityImages] = useState([]);
    const [profileImage, setProfileImage] = useState(null);

    return (
        <div className="p-6">
            <div className="flex items-center mb-6">
                <div className="relative w-10 h-10 mr-3 rounded-full border">
                    <Image
                        src="/modulesection/add-delivery-man.png"
                        alt="Add Delivery Man"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold">Add New Delivery Man</h1>
                    <p className="text-sm text-gray-500">Create a new delivery man account</p>
                </div>
            </div>
            
            <form className="space-y-6">
                {/* General Information */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">General Information</h2>
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                First Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Last Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Deliveryman Type <span className="text-red-500">*</span>
                            </label>
                            <select className="w-full bg-white p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500">
                                <option value="">Select deliveryman type</option>
                                <option value="freelancer">Freelancer</option>
                                <option value="permanent">Permanent</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Zone <span className="text-red-500">*</span>
                            </label>
                            <select className="w-full bg-white p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500">
                                <option value="">Select zone</option>
                                <option value="zone1">Zone 1</option>
                                <option value="zone2">Zone 2</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Vehicle <span className="text-red-500">*</span>
                            </label>
                            <select className="w-full bg-white p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500">
                                <option value="">Select vehicle</option>
                                <option value="bike">Bike</option>
                                <option value="car">Car</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Identity Type <span className="text-red-500">*</span>
                            </label>
                            <select className="w-full bg-white p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500">
                                <option value="">Select identity type</option>
                                <option value="passport">Passport</option>
                                <option value="driving">Driving License</option>
                                <option value="nid">National ID</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Identity Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Image Upload Sections */}
                    <div className="mt-6 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Profile Image (1:1) <span className="text-red-500">*</span>
                            </label>
                            <div className="flex items-center justify-center w-40 h-40 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
                                <input type="file" className="hidden" accept="image/*" />
                                <FaUpload className="text-gray-400" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Identity Images (Max 5) <span className="text-red-500">*</span>
                            </label>
                            <div className="flex gap-4">
                                {[...Array(5)].map((_, index) => (
                                    <div key={index} className="w-32 h-32 border-2 border-dashed rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-50">
                                        <input type="file" className="hidden" accept="image/*" />
                                        <FaUpload className="text-gray-400" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Account Information */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Account Information</h2>
                    <div className="grid grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Phone <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                required
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Password <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="password"
                                required
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
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
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                     {/* Form Actions */}
                <div className="flex justify-end space-x-4 mt-4">
                    <button
                        type="reset"
                        className="px-6 py-2 border rounded bg-gray-100 hover:bg-gray-200"
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        className="px-6 py-2 bg-teal-600 text-white rounded  hover:bg-teal-700"
                    >
                        Submit
                    </button>
                </div>
                </div>

               
            </form>
        </div>
    );
}
