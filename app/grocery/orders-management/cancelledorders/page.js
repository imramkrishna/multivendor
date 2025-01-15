"use client"
import React, { useState } from 'react'
import { FaBan } from 'react-icons/fa'

const CancelledOrdersPage = () => {
  const [orders, setOrders] = useState([
    {
      id: 'ORD004',
      customer: 'Bob Brown',
      date: '2024-01-23',
      amount: '₹1,999',
      status: 'Cancelled'
    },
    {
      id: 'ORD005',
      customer: 'Charlie Green',
      date: '2024-01-24',
      amount: '₹2,799',
      status: 'Cancelled'
    },
    {
      id: 'ORD006',
      customer: 'Diana White',
      date: '2024-01-25',
      amount: '₹3,499',
      status: 'Cancelled'
    }
  ])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Cancelled Orders</h1>
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
                  <FaBan className="text-red-500 mr-2" /> {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CancelledOrdersPage
