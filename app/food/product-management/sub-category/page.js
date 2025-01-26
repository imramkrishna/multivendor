"use client"
import React, { useState } from 'react';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';

const renderIcon = (iconPath, className) => (
  <img 
    src={iconPath} 
    alt="sub category icon" 
    className={`w-7 h-8 ${className}`}
  />
);

const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    mainCategory: ''
  });

  const [status, setStatus] = useState({
    1: 'active',
    2: 'inactive'
  });

  const [featured, setFeatured] = useState({
    1: false,
    2: false
  });

  const [priorities, setPriorities] = useState({
    1: '1',
    2: '2'
  });

  const handleStatusChange = (id) => {
    setStatus(prev => ({
      ...prev,
      [id]: prev[id] === 'active' ? 'inactive' : 'active'
    }));
  };

  const handleFeaturedChange = (id) => {
    setFeatured(prev => ({
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
      {/* Form Section */}
      <h2 className="text-xl font-semibold mb-6 flex items-center">
        {renderIcon("/icons/sub-category.png", "mr-3")}
        Add Sub Category
      </h2>
      <div className="bg-white rounded-xl shadow-sm p-6 border">
       
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sub Category Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Enter sub category name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Main Category
              </label>
              <select
                className="w-full bg-white px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.mainCategory}
                onChange={(e) => setFormData(prev => ({ ...prev, mainCategory: e.target.value }))}
              >
                <option value="">Select main category</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
              </select>
            </div>
          </div>

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

      {/* List Section */}
      <div className="bg-white rounded-xl shadow-sm p-6 border">
        <h2 className="text-xl font-semibold mb-6">Sub Category List</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sl</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Id</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Main Category</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sub Category</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Featured</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Priority</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3">1</td>
                <td className="px-4 py-3">#SUB001</td>
                <td className="px-4 py-3">Electronics</td>
                <td className="px-4 py-3">Smartphones</td>
                <td className="px-4 py-3">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={status[1] === 'active'} 
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
                      checked={featured[1]} 
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
    </div>
  );
};

export default Page;
