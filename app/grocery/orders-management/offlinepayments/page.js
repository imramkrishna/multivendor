"use client"
import React, { useState } from 'react'
import { FaSearch, FaFileExport, FaEye, FaPrint } from 'react-icons/fa'
import Image from 'next/image'

const OfflinePaymentsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [orders] = useState(
    Array(20).fill().map((_, i) => ({
      id: `ORD${String(i + 1).padStart(3, '0')}`,
      orderDate: new Date(2024, 1, 20 - (i % 10)).toISOString().split('T')[0],
      customer: {
        name: ['John Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Williams', 'Robert Brown'][i % 5],
        phone: `+1 ${Math.floor(Math.random() * 900 + 100)}-${Math.floor(Math.random() * 900 + 100)}-${Math.floor(Math.random() * 9000 + 1000)}`
      },
      totalAmount: `₹${(Math.floor(Math.random() * 5000) + 500).toLocaleString()}`,
      paymentMethod: ['Cash', 'Bank Transfer', 'Check'][i % 3],
      status: ['Pending', 'Verified', 'Denied'][i % 3]
    }))
  )

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center mb-6">
        <div className="relative w-8 h-8 mr-3 rounded-full">
          <Image
            src="/icons/order.png"
            alt="Offline Payments"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-gray-800">Offline Payments</h1>
          <p className="text-sm text-gray-500">Manage offline payment orders</p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-4 mb-6">
        <button 
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 rounded-lg ${
            activeFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100'
          }`}
        >
          All
        </button>
        <button 
          onClick={() => setActiveFilter('pending')}
          className={`px-4 py-2 rounded-lg ${
            activeFilter === 'pending' ? 'bg-yellow-600 text-white' : 'bg-gray-100'
          }`}
        >
          Pending
        </button>
        <button 
          onClick={() => setActiveFilter('verified')}
          className={`px-4 py-2 rounded-lg ${
            activeFilter === 'verified' ? 'bg-green-600 text-white' : 'bg-gray-100'
          }`}
        >
          Verified
        </button>
        <button 
          onClick={() => setActiveFilter('denied')}
          className={`px-4 py-2 rounded-lg ${
            activeFilter === 'denied' ? 'bg-red-600 text-white' : 'bg-gray-100'
          }`}
        >
          Denied
        </button>
      </div>

      {/* Table Container */}
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sl</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Information</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Method</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {orders
                .filter(order => activeFilter === 'all' || order.status.toLowerCase() === activeFilter)
                .map((order, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.orderDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{order.customer.name}</div>
                      <div className="text-sm text-gray-500">{order.customer.phone}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.totalAmount}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.paymentMethod}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        order.status === 'Verified' ? 'bg-green-100 text-green-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                      <button className="p-2 text-yellow-600 border border-yellow-600 rounded hover:bg-yellow-50">
                        <FaEye />
                      </button>
                      <button className="p-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50">
                        <FaPrint />
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

export default OfflinePaymentsPage
