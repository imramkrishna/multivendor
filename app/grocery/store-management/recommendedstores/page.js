
'use client'
import { useState } from 'react'
import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function RecommendedStores() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterQuery, setFilterQuery] = useState('')

  const mockStores = [
    {
      id: 1,
      storeName: "MedPlus Pharmacy",
      ratings: 4.5,
      totalProducts: 150,
      totalOrders: 1200,
      status: "active"
    },
    // Add more mock data as needed
  ]

  return (
    <div className="p-6 space-y-6">
          <div className="flex items-center gap-4 mb-6">
        <Image
          src="/store.png"
          alt="Store Icon"
          width={40}
          height={40}
          className="rounded-lg"
        />
        <h1 className="text-2xl font-bold text-gray-800">Recommended Stores</h1>
      </div>
      {/* Search Form */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search stores..."
            className="flex-1 p-2 border rounded"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button 
            onClick={() => setSearchQuery('')}
            className="px-4 py-2 border rounded hover:bg-gray-50"
          >
            Reset
          </button>
          <button 
            className="px-4 py-2 bg-teal-800 text-white rounded hover:bg-teal-900"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Stores Table */}
      <div className="bg-white rounded-lg shadow border">
      
        <div className="p-4 flex justify-end">
            
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Filter stores..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
            />
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
        </div>

        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">SI</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Store Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ratings</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Products</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Orders</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {mockStores.map((store, index) => (
              <tr key={store.id}>
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">{store.storeName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{store.ratings}</td>
                <td className="px-6 py-4 whitespace-nowrap">{store.totalProducts}</td>
                <td className="px-6 py-4 whitespace-nowrap">{store.totalOrders}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                    {store.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-800">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
