'use client'
import { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';

export default function StoresList() {
  const [activeTab, setActiveTab] = useState('pending')
  const [searchQuery, setSearchQuery] = useState('')
  
  const mockStores = [
    {
      id: 1,
      storeName: "MedPlus Pharmacy",
      ownerName: "John Doe",
      zone: "North",
      status: "pending",
      moduleInfo: "Pharmacy"
    }
  ]

  return (
    <div className="p-6">
       <div className="flex items-center gap-4 mb-6 pb-4">
        <Image
          src="/store.png"
          alt="Store Icon"
          width={40}
          height={40}
          className="rounded-lg"
        />
        <h1 className="text-2xl font-bold text-gray-800">New Joining Requests</h1>
      </div>
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setActiveTab('pending')}
          className={`px-4 py-2 font-medium ${
            activeTab === 'pending' 
              ? 'border-b-2 border-teal-500 text-teal-600' 
              : 'text-gray-500'
          }`}
        >
          Pending Stores
        </button>
        <button
          onClick={() => setActiveTab('denied')}
          className={`px-4 py-2 font-medium ${
            activeTab === 'denied' 
              ? 'border-b-2 border-teal-500 text-teal-600' 
              : 'text-gray-500'
          }`}
        >
          Denied Stores
        </button>
      </div>



      <div className='border'>
      <div className="flex justify-end my-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search stores..."
            className="pl-10 pr-4 py-2 border rounded-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
        </div>
      </div>
        {activeTab === 'pending' && (
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">SI</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Store Information</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Module</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Owner Information</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Zone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {mockStores.map((store, index) => (
                <tr key={store.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{store.storeName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{store.moduleInfo}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{store.ownerName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{store.zone}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                      {store.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-blue-600 p-2  border rounded border-blue-600 hover:text-blue-800 mr-2">Accept</button>
                    <button className="text-red-600  p-2 border rounded border-red-600 hover:text-red-800">Deny</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {activeTab === 'denied' && (
          <table className="min-w-full divide-y divide-gray-200">
            {/* Similar table structure for denied stores */}
          </table>
        )}
      </div>
    </div>
  )
}