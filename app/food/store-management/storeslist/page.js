'use client'
import { useState } from 'react'
import { EyeIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import { Switch } from '@headlessui/react'
import Image from 'next/image'

export default function StoresList() {
  const [stores, setStores] = useState([
    {
      id: 1,
      storeName: "MedPlus Pharmacy",
      ownerName: "John Doe",
      zone: "North",
      featured: true,
      status: true,
    },
    // Add more mock data as needed
  ])

  return (
    <div className="p-6 space-y-6">
      {/* Stores Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-evenly">
  {[
    { title: 'Total Stores', count: '125', color: 'bg-blue-100 text-blue-800', icon: '/totalstore.png' },
    { title: 'Active Stores', count: '98', color: 'bg-green-100 text-green-800', icon: '/active-store.png' },
    { title: 'Inactive Stores', count: '27', color: 'bg-red-100 text-red-800', icon: '/close-store.png' },
    { title: 'Newly Joined', count: '15', color: 'bg-yellow-100 text-yellow-800', icon: '/add-store.png' }
  ].map((stat) => (
    <div key={stat.title} className={`${stat.color} p-4 rounded-lg flex justify-between items-center`}>
      <div>
        <h3 className="font-semibold">{stat.title}</h3>
        <p className="text-2xl font-bold">{stat.count}</p>
      </div>
      <div className="flex-shrink-0 ml-auto">
        <Image 
          src={stat.icon}
          alt={stat.title}
          width={50}
          height={50}
        />
      </div>
    </div>
  ))}
</div>

      {/* Transaction Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { title: 'Total Transactions', amount: '$52,000' },
          { title: 'Commission Earned', amount: '$2,800' },
          { title: 'Total Store Withdraws', amount: '$48,200' }
        ].map((stat) => (
          <div key={stat.title} className="bg-white p-4 rounded-lg shadow h-24 flex flex-col justify-center">
            <h3 className="text-gray-500">{stat.title}</h3>
            <p className="text-2xl font-bold">{stat.amount}</p>
          </div>
        ))}
      </div>

      {/* Stores Table */}
      <div className="bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">SI</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Store Information</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Owner Information</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Zone</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Featured</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {stores.map((store, index) => (
              <tr key={store.id}>
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">{store.storeName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{store.ownerName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{store.zone}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Switch
                    checked={store.featured}
                    onChange={(checked) => {
                      const updatedStores = [...stores]
                      updatedStores[index].featured = checked
                      setStores(updatedStores)
                    }}
                    className={`${store.featured ? 'bg-teal-600' : 'bg-gray-200'} 
                      relative inline-flex h-6 w-11 items-center rounded-full`}
                  >
                    <span className={`${store.featured ? 'translate-x-6' : 'translate-x-1'} 
                      inline-block h-4 w-4 transform rounded-full bg-white transition`}
                    />
                  </Switch>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Switch
                    checked={store.status}
                    onChange={(checked) => {
                      const updatedStores = [...stores]
                      updatedStores[index].status = checked
                      setStores(updatedStores)
                    }}
                    className={`${store.status ? 'bg-teal-600' : 'bg-gray-200'} 
                      relative inline-flex h-6 w-11 items-center rounded-full`}
                  >
                    <span className={`${store.status ? 'translate-x-6' : 'translate-x-1'} 
                      inline-block h-4 w-4 transform rounded-full bg-white transition`}
                    />
                  </Switch>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex space-x-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded border border-blue-600">
                      <EyeIcon className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-green-600 hover:bg-green-50 rounded border border-green-600">
                      <PencilSquareIcon className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded border border-red-600">
                      <TrashIcon className="h-5 w-5" />
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