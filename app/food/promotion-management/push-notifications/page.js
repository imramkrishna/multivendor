"use client"
import React, { useState } from 'react';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';

const renderIcon = (iconPath, className) => (
  <img 
    src={iconPath} 
    alt="notification icon" 
    className={`w-7 h-8 ${className}`}
  />
);

const Page = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: null
    });

    const [notificationStatus, setNotificationStatus] = useState({
        1: 'active',
        2: 'inactive'
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
                setFormData(prev => ({
                    ...prev,
                    image: file
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form Data:', formData);
    };

    const handleReset = () => {
        setImagePreview(null);
        setFormData({
            title: '',
            description: '',
            image: null
        });
    };

    const handleStatusChange = (id) => {
        setNotificationStatus(prev => ({
            ...prev,
            [id]: prev[id] === 'active' ? 'inactive' : 'active'
        }));
    };

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-xl font-semibold mb-6 flex items-center">
                {renderIcon("/icons/notification.png", "mr-3")}
                Notification
            </h1>
            <div className="bg-white rounded-xl shadow-sm p-6 border">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                        <div className="flex flex-col space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                                Title(Default)
                            </label>
                            <input
                                type="text"
                                className="w-1/2 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter banner title"
                            />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                                Zone
                            </label>
                            <select className="w-1/2 bg-white px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="">Select Zone</option>
                                <option value="zone1">Zone 1</option>
                                <option value="zone2">Zone 2</option>
                            </select>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                                Send To
                            </label>
                            <select className="w-1/2 bg-white px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="">Select</option>
                                <option value="main">Customer</option>
                                <option value="popup">DeliveryMan</option>
                                <option value="popup">Store</option>
                            </select>
                        </div>

                        <div className="flex space-x-6">
                            <div className="w-1/2">
                                <label className="text-sm font-medium text-gray-700">
                                    Description
                                </label>
                                <textarea
                                    className="w-full bg-white mt-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
                                    placeholder="Enter description"
                                ></textarea>
                            </div>

                            <div className="w-1/2">
                                <label className="text-sm font-medium text-gray-700">

                                </label>
                                <div className="mt-20 flex flex-col space-y-2">
                                    {/* {imagePreview && (
                                        <div className="relative w-32 h-32">
                                            <img
                                                src={imagePreview}
                                                alt="Preview"
                                                className="w-full h-full object-cover rounded-lg"
                                            />
                                        </div>
                                    )} */}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="w-1/4 fixed bg-white px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end space-x-4">
                        <button
                            type="reset"
                            onClick={handleReset}
                            className="px-6 py-2 text-black bg-slate-100 rounded hover:bg-slate-200 transition-colors"
                        >
                            Reset
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 bg-teal-800 text-white rounded hover:bg-teal-700 transition-all duration-200"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border mt-6">
                <h2 className="text-xl font-semibold mb-6">Notification List</h2>
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Image</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Zone</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Target</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        <tr>
                            <td className="px-4 py-3">New Year Offer</td>
                            <td className="px-4 py-3 max-w-xs truncate">Special discount for new year celebration</td>
                            <td className="px-4 py-3">
                                <img src="/notification.jpg" alt="notification" className="h-10 w-10 rounded object-cover" />
                            </td>
                            <td className="px-4 py-3">Zone 1</td>
                            <td className="px-4 py-3">All Customers</td>
                            <td className="px-4 py-3">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={notificationStatus[1] === 'active'}
                                        onChange={() => handleStatusChange(1)}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
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
    );
};

export default Page;
