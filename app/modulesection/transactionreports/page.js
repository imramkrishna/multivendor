"use client"
import React, { useState } from 'react'
import { FaDownload, FaChartLine, FaWallet, FaCalendar, FaFilter } from 'react-icons/fa'

const TransactionReports = () => {
  const [transactions] = useState([
    {
      id: 'TXN001',
      date: '2024-01-20',
      customer: 'John Doe',
      amount: '₹1,299',
      method: 'UPI',
      status: 'Completed'
    },
    // Add more transactions
  ])

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Transaction Reports</h1>
        
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50">
            <FaFilter /> Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            <FaDownload /> Export
          </button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-gradient-to-r from-blue-400 to-blue-400 rounded-xl p-6 text-white">
          <h3 className="text-lg opacity-80">Total Revenue</h3>
          <p className="text-3xl font-bold mt-2">₹45,670</p>
          <p className="text-sm opacity-80 mt-2">+12% from last month</p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
          <h3 className="text-lg opacity-80">Transactions</h3>
          <p className="text-3xl font-bold mt-2">1,234</p>
          <p className="text-sm opacity-80 mt-2">Last 30 days</p>
        </div>
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl p-6 text-white">
          <h3 className="text-lg opacity-80">Average Order</h3>
          <p className="text-3xl font-bold mt-2">₹876</p>
          <p className="text-sm opacity-80 mt-2">+5% from last month</p>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <h3 className="text-lg opacity-80">Success Rate</h3>
          <p className="text-3xl font-bold mt-2">98.5%</p>
          <p className="text-sm opacity-80 mt-2">+2% from last month</p>
        </div>
      </div>

      {/* Transaction History Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">Transaction History</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Transaction ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Method</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">{transaction.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{transaction.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.method}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      {transaction.status}
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

export default TransactionReports
