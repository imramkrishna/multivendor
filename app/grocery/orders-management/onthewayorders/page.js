"use client"
import React, { useState } from 'react'
import { FaTruck } from 'react-icons/fa'

const OnTheWayOrdersPage = () => {
  const [orders] = useState([
    {
      id: 'ORD001',
      customer: 'John Doe',
      date: '2024-01-20',
      amount: '₹1,299',
      deliveryPerson: 'Mike Delivery',
      expectedTime: '30 mins',
      location: 'En route to destination',
      status: 'On The Way'
    },
    {
      id: 'ORD002',
      customer: 'Jane Smith',
      date: '2024-01-21',
      amount: '₹2,499',
      deliveryPerson: 'Steve Delivery',
      expectedTime: '15 mins',
      location: 'Near delivery location',
      status: 'On The Way'
    },
    {
      id: 'ORD003',
      customer: 'Alice Johnson',
      date: '2024-01-22',
      amount: '₹1,899',
      deliveryPerson: 'John Delivery',
      expectedTime: '45 mins',
      location: 'Starting delivery route',
      status: 'On The Way'
    }
  ])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Orders On The Way</h1>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Delivery Person</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Expected Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
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
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.deliveryPerson}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.expectedTime}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.location}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex items-center">
                  <FaTruck className="text-purple-500 mr-2" /> {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OnTheWayOrdersPage
