"use client"
import React, { useState } from 'react'
import { FaSearch, FaStore, FaStar, FaEye, FaEdit, FaTrash } from 'react-icons/fa'

const StoresListPage = () => {
  const stores = [
    {
      id: 'ST001',
      name: 'Fashion Store',
      owner: 'John Doe',
      location: 'New York',
      rating: 4.8,
      reviews: 156,
      ordersCompleted: 1234,
      revenue: '₹2,45,670',
      status: 'Active',
      joinedDate: '2024-01-15'
    },
    // Add more stores here
  ]

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Stores</h1>
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search stores..."
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-blue-500 text-white rounded-xl p-6">
          <FaStore className="text-3xl mb-2 opacity-80" />
          <h3 className="text-lg opacity-80">Total Stores</h3>
          <p className="text-3xl font-bold">126</p>
        </div>
        <div className="bg-green-500 text-white rounded-xl p-6">
          <h3 className="text-lg opacity-80">Active Stores</h3>
          <p className="text-3xl font-bold">98</p>
        </div>
        <div className="bg-yellow-500 text-white rounded-xl p-6">
          <h3 className="text-lg opacity-80">Total Revenue</h3>
          <p className="text-3xl font-bold">₹12.4L</p>
        </div>
        <div className="bg-purple-500 text-white rounded-xl p-6">
          <h3 className="text-lg opacity-80">Avg. Rating</h3>
          <p className="text-3xl font-bold">4.6</p>
        </div>
      </div>

      {/* Stores Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stores.map((store) => (
          <div key={store.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{store.name}</h3>
                  <p className="text-sm text-gray-500">{store.owner}</p>
                </div>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full
                  ${store.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {store.status}
                </span>
              </div>

              <div className="flex items-center mb-4">
                <FaStar className="text-yellow-400 mr-1" />
                <span className="font-medium mr-2">{store.rating}</span>
                <span className="text-sm text-gray-500">({store.reviews} reviews)</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Orders</p>
                  <p className="font-medium">{store.ordersCompleted}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Revenue</p>
                  <p className="font-medium">{store.revenue}</p>
                </div>
              </div>

              <div className="flex justify-end space-x-2 mt-4 pt-4 border-t">
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                  <FaEye />
                </button>
                <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg">
                  <FaEdit />
                </button>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StoresListPage