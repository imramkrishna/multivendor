"use client"
import React, { useState } from 'react'
import { FaClock, FaSearch, FaFileExport } from 'react-icons/fa'
import Image from 'next/image'

const ScheduledOrdersPage = () => {
  const [orders, setOrders] = useState(
    Array(20).fill().map((_, i) => ({
      id: `ORD${String(i + 1).padStart(3, '0')}`,
      customer: ['John Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Williams', 'Robert Brown'][i % 5],
      date: new Date(2024, 1, 20 - (i % 10)).toISOString().split('T')[0],
      scheduledDate: new Date(2024, 2, 1 + (i % 10)).toISOString().split('T')[0],
      amount: `₹${(Math.floor(Math.random() * 5000) + 500).toLocaleString()}`,
      status: 'Scheduled'
    }))
  )

  return (
    <div className="p-6">
        {/* Header with Icon */}
        <div className="flex items-center mb-6">
            <div className="relative w-8 h-8 mr-3 rounded-full">
                <Image
                    src="/icons/order.png"
                    alt="Scheduled Orders"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-gray-800">Scheduled Orders</h1>
                <p className="text-sm text-gray-500">View and manage scheduled orders</p>
            </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
            {/* Search and Export Section */}
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

            <div className="max-h-[600px] overflow-y-auto">
                <table className="w-full">
                    <thead className="bg-gray-50 sticky top-0 z-10">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Scheduled Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {orders.map((order, index) => (
                            <tr key={order.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customer}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.scheduledDate}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.amount}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex items-center">
                                    <FaClock className="text-yellow-500 mr-2" /> {order.status}
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

export default ScheduledOrdersPage
