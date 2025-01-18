'use client'
import { useState } from 'react';
import { FaSearch, FaFileExport, FaEye } from 'react-icons/fa';
import Image from 'next/image';

export default function DeliverymanReviews() {
  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center mb-6">
        <div className="relative w-10 h-10 mr-3 rounded-full border">
          <Image
            src="/modulesection/add-delivery-man.png"
            alt="Deliveryman Reviews"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Deliveryman Reviews</h1>
          <p className="text-sm text-gray-500">Manage delivery personnel reviews</p>
        </div>
      </div>

     

      {/* Reviews Table */}
      <div className="bg-white rounded-lg shadow">
        <div className="flex items-center justify-end gap-4">
          <select className="p-2 bg-white border rounded w-48">
            <option>All Deliverymen</option>
            <option>John Doe</option>
            <option>Jane Smith</option>
          </select>

          <select className="p-2 bg-white border rounded w-48">
            <option>Latest Rating</option>
            <option>Highest Rating</option>
            <option>Lowest Rating</option>
          </select>

          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search reviews..."
              className="w-full pl-10 pr-4 py-2 border rounded"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>

          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            <FaFileExport />
            Export
          </button>
        </div>
        <table className="min-w-full mt-4">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">SL</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Deliveryman</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rating</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Review</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {[1, 2, 3].map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">#ORD-{100 + index}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gray-200 mr-3"></div>
                    <span>John Doe</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">Customer Name</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="text-yellow-400">★★★★☆</span>
                    <span className="ml-2">4.0</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-gray-600 truncate w-48">
                    Great service and very professional delivery...
                  </p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="p-2 border border-blue-600 text-blue-600 hover:bg-blue-100 rounded">
                    <FaEye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
