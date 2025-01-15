"use client"
import React, { useState } from 'react';
import { FaUpload, FaPencilAlt, FaTrash } from 'react-icons/fa';

const renderIcon = (iconPath, className) => (
  <img 
    src={iconPath} 
    alt="category icon" 
    className={`w-6 h-6 ${className}`}
  />
);

const Page = () => {
    const [formData, setFormData] = useState({
        name: '',
        image: null
    });
    const [imagePreview, setImagePreview] = useState(null);
    const [categoryStatus, setCategoryStatus] = useState({
        1: 'active',
        2: 'inactive'
    });

    // Add state for featured status and priority
    const [featuredStatus, setFeaturedStatus] = useState({
        1: false,
        2: false
    });

    const [priorities, setPriorities] = useState({
        1: '1',
        2: '2'
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
                setFormData(prev => ({ ...prev, image: file }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleStatusChange = (id) => {
        setCategoryStatus(prev => ({
            ...prev,
            [id]: prev[id] === 'active' ? 'inactive' : 'active'
        }));
    };

    const handleFeaturedChange = (id) => {
        setFeaturedStatus(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const handlePriorityChange = (id, value) => {
        setPriorities(prev => ({
            ...prev,
            [id]: value
        }));
    };

    return (
        <div className="p-6 space-y-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
                {renderIcon("/icons/category.png", "mr-3")}
                Add New Category
            </h2>
            {/* Form Section */}
            <div className="bg-white rounded-xl shadow-sm p-6 border">

                <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Name(Default)
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={formData.name}
                                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                placeholder="Enter category name"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Category Image
                            </label>
                            <div className="mt-1 w-1/2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                                <div className="space-y-1 text-center">
                                    <FaUpload className="mx-auto h-12 w-12 text-gray-400" />
                                    <div className="flex text-sm text-gray-600">
                                        <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                                            <span>Upload a file</span>
                                            <input type="file" className="sr-only" onChange={handleImageChange} />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Add buttons */}
                    <div className="flex justify-end space-x-4">
                        <button
                            type="reset"
                            className="px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
                        >
                            Reset
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 bg-teal-800 text-white rounded-lg hover:bg-teal-700"
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>

            {/* Category List Section */}
            <div className="bg-white rounded-xl shadow-sm p-6 border">
                <h2 className="text-xl font-semibold mb-6">Category List</h2>
                <div className="flex justify-end mb-4">
                    <div className="relative">
                        <input
                            type="text"
                            className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Search categories..."
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                    </div>
                    <button
                        className="ml-4 px-6 py-2 bg-white text-teal-800 rounded border"
                    >
                        Export
                    </button>
                </div>
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sl</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Id</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Featured</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Priority</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        <tr>
                            <td className="px-4 py-3">1</td>
                            <td className="px-4 py-3">#CAT001</td>
                            <td className="px-4 py-3">Electronics</td>
                            <td className="px-4 py-3">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={categoryStatus[1] === 'active'}
                                        onChange={() => handleStatusChange(1)}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                            </td>
                            <td className="px-4 py-3">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input 
                                        type="checkbox" 
                                        className="sr-only peer" 
                                        checked={featuredStatus[1]} 
                                        onChange={() => handleFeaturedChange(1)} 
                                    />
                                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                            </td>
                            <td className="px-4 py-3">
                                <input
                                    type="number"
                                    min="1"
                                    max="10"
                                    value={priorities[1]}
                                    onChange={(e) => handlePriorityChange(1, e.target.value)}
                                    className="w-20 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
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
