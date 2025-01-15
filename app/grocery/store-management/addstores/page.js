"use client"
import React, { useState } from 'react'
import { FaStore, FaTrash, FaPlus } from 'react-icons/fa'

const AddStoresPage = () => {
  const [stores, setStores] = useState([
    { id: 1, name: 'Store 1', location: 'New York', category: 'Grocery', status: 'Active' },
    { id: 2, name: 'Store 2', location: 'Chicago', category: 'Pharmacy', status: 'Active' }
  ])

  const [newStore, setNewStore] = useState({
    name: '',
    location: '',
    category: '',
    ownerName: '',
    phone: '',
    email: ''
  })

  const handleAddStore = (e) => {
    e.preventDefault()
    setStores([...stores, { ...newStore, id: stores.length + 1, status: 'Active' }])
    setNewStore({ name: '', location: '', category: '', ownerName: '', phone: '', email: '' })
  }

  const handleDeleteStore = (id) => {
    setStores(stores.filter(store => store.id !== id))
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Store Management</h1>

      {/* Add New Store Form */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4 flex items-center">
          <FaPlus className="mr-2" /> Add New Store
        </h2>
        
        <form onSubmit={handleAddStore} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Store Name"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newStore.name}
            onChange={(e) => setNewStore({ ...newStore, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Location"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newStore.location}
            onChange={(e) => setNewStore({ ...newStore, location: e.target.value })}
            required
          />
          <select
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newStore.category}
            onChange={(e) => setNewStore({ ...newStore, category: e.target.value })}
            required
          >
            <option value="">Select Category</option>
            <option value="Grocery">Grocery</option>
            <option value="Pharmacy">Pharmacy</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Electronics">Electronics</option>
          </select>
          <input
            type="text"
            placeholder="Owner Name"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newStore.ownerName}
            onChange={(e) => setNewStore({ ...newStore, ownerName: e.target.value })}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newStore.phone}
            onChange={(e) => setNewStore({ ...newStore, phone: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newStore.email}
            onChange={(e) => setNewStore({ ...newStore, email: e.target.value })}
            required
          />
          <button
            type="submit"
            className="md:col-span-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Add Store
          </button>
        </form>
      </div>

      {/* Stores List */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-lg font-semibold mb-4 flex items-center">
          <FaStore className="mr-2" /> Existing Stores
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.map((store) => (
            <div key={store.id} className="border rounded-lg p-4 hover:shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{store.name}</h3>
                  <p className="text-sm text-gray-500">{store.location}</p>
                  <p className="text-sm text-gray-500">{store.category}</p>
                </div>
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                  {store.status}
                </span>
              </div>
              <button
                onClick={() => handleDeleteStore(store.id)}
                className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 text-red-600 border border-red-600 rounded-lg hover:bg-red-50"
              >
                <FaTrash /> Remove Store
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AddStoresPage
