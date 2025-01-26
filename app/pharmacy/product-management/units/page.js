"use client"
import React, { useState } from 'react';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';

const renderIcon = (iconPath, className) => (
  <img 
    src={iconPath} 
    alt="Unit icon" 
    className={`w-6 h-6 ${className}`}
  />
);

const Page = () => {
  const [formData, setFormData] = useState({
    name: ''
  });

  return (
    <div className="p-6 space-y-6">
      {/* Form Section */}
      <h2 className="text-xl font-bold mb-6 flex items-center">
        {renderIcon("/icons/unit.png", "mr-3")}
        Add New Unit
      </h2>
      <div className="bg-white rounded-xl shadow-sm p-6 border">
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Name(Default)
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Enter Unit name"
            />
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
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* List Section */}
      <div className="bg-white rounded-xl shadow-sm p-6 border">
        <h2 className="text-xl font-semibold mb-6">Units List</h2>
        <div className="flex justify-end space-x-4 mb-4">
            <div className="relative">
                <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                    placeholder="Search Units"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
            <button className="px-6 py-2 bg-white text-teal-800 border rounded-lg">
                Export
            </button>
        </div>
        
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sl</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Unit</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3">1</td>
              <td className="px-4 py-3">kg</td>
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
