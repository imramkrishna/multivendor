"use client"
import React, { useState } from 'react'
import { FaMotorcycle, FaBox, FaMapMarkerAlt, FaClock, FaCheck } from 'react-icons/fa'

const DispatchManagement = () => {
  const [deliveries, setDeliveries] = useState([
    {
      id: 'DEL001',
      orderId: '#ORD123',
      customer: 'John Doe',
      address: '123 Main St, City',
      status: 'In Transit',
      deliveryPerson: 'Mike Smith',
      assignedTime: '10:30 AM',
      expectedDelivery: '12:30 PM'
    },
    // Add more deliveries
  ])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dispatch Management</h1>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-blue-500 text-white rounded-xl p-6">
          <FaMotorcycle className="text-3xl mb-2 opacity-80" />
          <h3 className="text-lg opacity-80">Active Deliveries</h3>
          <p className="text-3xl font-bold">24</p>
        </div>
        <div className="bg-green-500 text-white rounded-xl p-6">
          <FaBox className="text-3xl mb-2 opacity-80" />
          <h3 className="text-lg opacity-80">Completed Today</h3>
          <p className="text-3xl font-bold">45</p>
        </div>
        <div className="bg-yellow-500 text-white rounded-xl p-6">
          <FaClock className="text-3xl mb-2 opacity-80" />
          <h3 className="text-lg opacity-80">Pending</h3>
          <p className="text-3xl font-bold">12</p>
        </div>
        <div className="bg-purple-500 text-white rounded-xl p-6">
          <FaCheck className="text-3xl mb-2 opacity-80" />
          <h3 className="text-lg opacity-80">On Time Rate</h3>
          <p className="text-3xl font-bold">95%</p>
        </div>
      </div>

      {/* Active Deliveries */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Active Deliveries</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Delivery Person</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Expected Delivery</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {deliveries.map((delivery) => (
                <tr key={delivery.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">{delivery.orderId}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{delivery.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{delivery.deliveryPerson}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      {delivery.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{delivery.expectedDelivery}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">Track</button>
                    <button className="text-green-600 hover:text-green-900">Update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delivery Personnel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((person) => (
          <div key={person} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold">Delivery Person {person}</h3>
                <p className="text-sm text-gray-500">ID: DP00{person}</p>
              </div>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                Active
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Today's Deliveries</span>
                <span>8</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Current Location</span>
                <span className="flex items-center">
                  <FaMapMarkerAlt className="text-red-500 mr-1" /> City Center
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DispatchManagement
