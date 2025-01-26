"use client"
import React, { useState } from 'react';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';

const renderIcon = (iconPath, className) => (
    <img
        src={iconPath}
        alt="banner icon"
        className={`w-7 h-8 ${className}`}
    />
)

const Page = () => {
    const [bannerStatus, setBannerStatus] = useState({
        1: 'active',
        2: 'inactive'
    });

    const [imagePreview, setImagePreview] = useState(null);

    const handleStatusChange = (id) => {
        setBannerStatus(prev => ({
            ...prev,
            [id]: prev[id] === 'active' ? 'inactive' : 'active'
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="p-2 space-y-6">
            <h2 className="text-xl font-semibold mb-6 mt-3 flex items-center">
                {renderIcon("/icons/banner.png", "mr-3")}
                Add New Banner
            </h2>
            {/* Banner Form Section */}
            <div className="bg-white rounded-xl shadow-sm p-6 border">

                <form className="space-y-4">
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
                                Banner Type
                            </label>
                            <select className="w-1/2 bg-white px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="">Select Type</option>
                                <option value="main">Main Banner</option>
                                <option value="popup">Pop-up Banner</option>
                            </select>
                        </div>

                        <div className="flex space-x-6">
                            <div className="w-1/2">
                                <label className="text-sm font-medium text-gray-700">
                                    Store
                                </label>
                                <select className="w-full bg-white mt-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option value="">Select Store</option>
                                    <option value="store1">Store 1</option>
                                    <option value="store2">Store 2</option>
                                </select>
                            </div>

                            <div className="w-1/2">
                                <label className="text-sm font-medium text-gray-700">
                                    Banner Image
                                </label>
                                <div className="mt-1 flex flex-col space-y-2">
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
                                        className="w-full fixed bg-white px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="flex justify-end space-x-4">
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

                </form>
            </div>

            {/* Banner List Section */}
            <div className="bg-white rounded-xl shadow-sm p-6 border">
                <h2 className="text-xl font-semibold mb-6">Banner List</h2>
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Featured</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        <tr>
                            <td className="px-4 py-3">Main Banner</td>
                            <td className="px-4 py-3">Main</td>
                            <td className="px-4 py-3">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                            </td>
                            <td className="px-4 py-3">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={bannerStatus[1] === 'active'}
                                        onChange={() => handleStatusChange(1)}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                            </td>
                            <td className="px-4 py-3">
                                <div className="flex space-x-2">
                                    <button className="p-2 rounded-lg text-blue-600 border border-blue-600 hover:bg-blue-50">
                                        <FaPencilAlt className="w-4 h-4" />
                                    </button>
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
    );
};

export default Page;
