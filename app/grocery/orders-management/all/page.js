"use client"
import React, { useState } from 'react'
import { FaSearch, FaFilter, FaEye, FaTruck, FaCheck, FaBan, FaFileExport } from 'react-icons/fa'
import Image from 'next/image'

const OrdersPage = () => {
  // Dummy order data
  const orders = [
    { 
      id: '#ORD001',
      customer: 'John Doe',
      date: '2024-01-20',
      amount: '₹1,234',
      status: 'Delivered',
      items: 3,
      payment: 'Paid'
    },
    // Add more orders as needed
  ]

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center mb-6">
          <div className="relative w-8 h-8 mr-3 rounded-full">
            <Image
              src="/icons/order.png"
              alt="Orders"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-gray-800">Orders</h1>
            <p className="text-sm text-gray-500">Manage and track all orders</p>
          </div>
        </div>
        
        {/* Search and Filter */}
       
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
        <div className="p-4 border-b flex justify-end items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search orders..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-teal-800 border border-teal-800 rounded-lg hover:bg-teal-50">
            <FaFileExport />
            Export
          </button>
        </div>
        <div className="max-h-[600px] overflow-y-auto">
          <table className="w-full">
            <thead className="bg-gray-50 sticky top-0">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {Array(20).fill().map((_, i) => ({
                  id: `ORD${String(i + 1).padStart(3, '0')}`,
                  customer: ['John Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Williams', 'Robert Brown'][i % 5],
                  date: new Date(2024, 1, 20 - (i % 10)).toISOString().split('T')[0],
                  amount: `₹${(Math.floor(Math.random() * 5000) + 500).toLocaleString()}`,
                  status: ['Pending', 'Processing', 'Delivered', 'Cancelled'][i % 4],
                  items: `${(i % 5) + 1} items`,
                  payment: i % 2 === 0 ? 'Paid' : 'COD'
              })).map((order, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.amount}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                              order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                              order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                              order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                              'bg-red-100 text-red-800'
                          }`}>
                              {order.status}
                          </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.items}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                              order.payment === 'Paid' ? 'bg-green-100 text-green-800' : 
                              'bg-gray-100 text-gray-800'
                          }`}>
                              {order.payment}
                          </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <button className="text-blue-600 border p-2 rounded border-blue-600 hover:text-blue-900">
                              <FaEye />
                          </button>
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

export default OrdersPage
