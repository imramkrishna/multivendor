"use client"
import React, { useEffect, useState } from 'react'
import { FaCheck } from 'react-icons/fa'

const CompletedOrdersPage = () => {
  const [orders, setOrders] = useState([
    {
      id: 'ORD001',
      customer: 'John Doe',
      date: '2024-01-20',
      amount: '₹1,299',
      status: 'Completed'
    },
    {
      id: 'ORD002',
      customer: 'Jane Smith',
      date: '2024-01-21',
      amount: '₹2,499',
      status: 'Completed'
    },
    {
      id: 'ORD003',
      customer: 'Alice Johnson',
      date: '2024-01-22',
      amount: '₹3,799',
      status: 'Completed'
    }
  ])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Completed Orders</h1>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
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

export default CompletedOrdersPage
