"use client"
import React, { useState } from 'react';
import { FaTicketAlt, FaPencilAlt, FaTrash } from 'react-icons/fa';

const renderIcon = (iconPath, className) => (
  <img
    src={iconPath}
    alt="coupon icon"
    className={`w-7 h-8 ${className}`}
  />
);

const Page = () => {
  const [couponStatus, setCouponStatus] = useState({
    1: 'active',
    2: 'inactive'
  });

  const handleStatusChange = (id) => {
    setCouponStatus(prev => ({
      ...prev,
      [id]: prev[id] === 'active' ? 'inactive' : 'active'
    }));
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-semibold mb-6 flex items-center">
        {renderIcon("/icons/coupon.png", "mr-3")}
        Add New Coupon
      </h2>
      {/* Add New Coupon Section */}
      <div className="bg-white rounded-xl shadow-sm p-6 border">


        <form className="space-y-6">
          {/* Title - Full Width */}
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter title"
            />
          </div>

          {/* Other Fields - 4 Columns */}
          <div className="grid grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Coupon Type
              </label>
              <select className="w-full bg-white px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select Type</option>
                <option>Default</option>
                <option>First Order</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Store
              </label>
              <select className="w-full bg-white px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select Store</option>
                <option>Store 1</option>
                <option>Store 2</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Customer
              </label>
              <select className="w-full bg-white px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Customers</option>
                <option>New Customers</option>
                <option>Premium Customers</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Code
              </label>
              <input 
                type="text" 
                className="w-full bg-white px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter code"
              />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {/* Second Row */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Limit For Same User</label>
              <input type="number" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
              <input type="datetime-local" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
              <input type="datetime-local" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            {/* Third Row */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Discount Type</label>
              <select className="w-full bg-white px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Amount</option>
                <option>Percentage</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Discount</label>
              <input type="number" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 ">Max Discount</label>
              <input type="number" className="bg-slate-50 w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Min Purchase</label>
              <input type="number" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <button type="reset" className="px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
              Reset
            </button>
            <button type="submit" className="px-6 py-2 bg-teal-800 text-white rounded-lg hover:bg-teal-700">
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Coupon List Section */}
      <div className="bg-white rounded-xl shadow-sm p-6 border">
        <h2 className="text-xl font-semibold mb-6">Coupon List</h2>
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Code</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Start Date</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Expiry Date</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3">Summer Sale</td>
              <td className="px-4 py-3">SUMMER20</td>
              <td className="px-4 py-3">Default</td>
              <td className="px-4 py-3">2024-02-01</td>
              <td className="px-4 py-3">2024-02-28</td>
              <td className="px-4 py-3">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked={couponStatus[1] === 'active'} onChange={() => handleStatusChange(1)} />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </td>
              <td className="px-4 py-3">
                <div className="flex space-x-2">
                  <button className="p-2 text-blue-600 hover:text-blue-800">
                    <FaPencilAlt />
                  </button>
                  <button className="p-2 text-red-600 hover:text-red-800">
                    <FaTrash />
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
