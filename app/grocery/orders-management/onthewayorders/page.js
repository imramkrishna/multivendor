"use client"
import React, { useState } from 'react'
import { FaTruck, FaSearch, FaFileExport } from 'react-icons/fa'
import Image from 'next/image'

const OnTheWayOrdersPage = () => {
  const [orders] = useState(
    Array(23).fill().map((_, i) => ({
      id: `ORD${String(i + 1).padStart(3, '0')}`,
      customer: ['John Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Williams', 'Robert Brown'][i % 5],
      date: new Date(2024, 1, 20 - (i % 10)).toISOString().split('T')[0],
      amount: `₹${(Math.floor(Math.random() * 5000) + 500).toLocaleString()}`,
      deliveryPerson: ['Mike Delivery', 'Steve Delivery', 'John Delivery', 'Dave Delivery'][i % 4],
      expectedTime: [`${(i % 6) * 10 + 10} mins`],
      location: ['En route to destination', 'Near delivery location', 'Starting delivery route'][i % 3],
      status: 'On The Way'
    }))
  )

  return (
    <div className="p-6">
      {/* Header with Icon */}
      <div className="flex items-center mb-6">
        <div className="relative w-8 h-8 mr-3 rounded-full">
          <Image
            src="/icons/order.png"
            alt="On The Way Orders"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-gray-800">On The Way Orders</h1>
          <p className="text-sm text-gray-500">Track orders currently being delivered</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
        {/* Search and Export */}
        <div className="p-4 border-b flex justify-end items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search orders..."
              className="pl-10 pr-4 py-2 border rounded-lg w-64"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-teal-800 border border-teal-800 rounded-lg hover:bg-teal-50">
            <FaFileExport />
            Export
          </button>
        </div>

        {/* Table with Scroll */}
        <div className="max-h-[600px] overflow-y-auto">
          <table className="w-full">
            <thead className="bg-gray-50 sticky top-0 z-10">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delivery Person</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expected Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {orders.map((order, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.deliveryPerson}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.expectedTime}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default OnTheWayOrdersPage
