"use client"
import React, { useState } from 'react'
import { FaCheck, FaSearch, FaFileExport } from 'react-icons/fa'
import Image from 'next/image'

const AcceptedOrdersPage = () => {
  const [orders] = useState([
    {
      id: 'ORD001',
      customer: 'John Doe',
      date: '2024-01-20',
      amount: '₹1,299',
      deliveryMan: 'Mike Delivery',
      status: 'Accepted'
    },
    {
      id: 'ORD002',
      customer: 'Jane Smith',
      date: '2024-01-21',
      amount: '₹2,499',
      deliveryMan: 'Steve Delivery',
      status: 'Accepted'
    },
    {
      id: 'ORD003',
      customer: 'Alice Johnson',
      date: '2024-01-22',
      amount: '₹1,899',
      deliveryMan: 'John Delivery',
      status: 'Accepted'
    }
  ])

  return (
    <div className="p-2">
      {/* Header */}
      <div className="flex items-center mb-6">
        <div className="relative w-8 h-8 mr-3 rounded-full">
          <Image
            src="/icons/order.png"
            alt="Accepted Orders"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-gray-800">Accepted Orders</h1>
          <p className="text-sm text-gray-500">View and manage accepted orders</p>
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

        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Delivery Man</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map(order => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customer}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.deliveryMan}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex items-center">
                  <FaCheck className="text-green-500 mr-2" /> {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AcceptedOrdersPage
