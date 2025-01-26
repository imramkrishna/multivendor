"use client"
import React, { useState } from 'react'
import { FaSearch, FaFilter, FaEye, FaCheck, FaTimes, FaUndo } from 'react-icons/fa'

const RefundsPage = () => {
  const refunds = [
    {
      id: '#REF001',
      orderId: '#ORD123',
      customer: 'John Doe',
      amount: '₹1,299',
      date: '2024-01-20',
      reason: 'Wrong item received',
      status: 'Pending',
      paymentType: 'UPI'
    },
    // Add more refund orders here
  ]

  return (
    <div className="p-2">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Refund Requests</h1>
        
        {/* Search and Filter */}
        <div className="flex gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search refunds..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50">
            <FaFilter /> Filter
          </button>
        </div>
      </div>

      {/* Refunds Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Refund ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reason</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {refunds.map((refund) => (
              <tr key={refund.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{refund.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800">{refund.orderId}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{refund.customer}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{refund.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{refund.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{refund.reason}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                    ${refund.status === 'Approved' ? 'bg-green-100 text-green-800' : 
                      refund.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-red-100 text-red-800'}`}>
                    {refund.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-3">
                    <button className="text-blue-600 border border-blue-600 p-2 rounded hover:text-blue-900" title="View Details">
                      <FaEye />
                    </button>
                    <button className="text-green-600 border border-green-600 p-2 rounded hover:text-green-900" title="Approve">
                      <FaCheck />
                    </button>
                    <button className="text-red-600 border border-red-600 p-2 rounded hover:text-red-900" title="Reject">
                      <FaTimes />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RefundsPage
