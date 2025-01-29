'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function AddStore() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    logo: null,
    storeCover: null,
    vatTax: '',
    deliveryTime: '',
    zone: '',
    latitude: '',
    longitude: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="p-6">
       <div className="flex items-center gap-4 mb-6">
        <Image
          src="/store.png"
          alt="Store Icon"
          width={40}
          height={40}
          className="rounded-lg"
        />
        <h1 className="text-2xl font-bold text-gray-800">Add New Store</h1>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Store Details */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Basic Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Store Name</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Logo</label>
              <input type="file" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Store Cover</label>
              <input type="file" className="w-full p-2 border rounded" />
            </div>
          </div>
        </div>

        {/* Store Information */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Store Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">VAT/Tax (%)</label>
              <input type="number" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Estimated Delivery Time</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Zone</label>
              <select className="w-full bg-white p-2.5 border rounded">
                <option>Select Zone</option>
                <option>North</option>
                <option>South</option>
                <option>East</option>
                <option>West</option>
              </select>
            </div>
            <div className="md:col-span-3">
              <div className="h-64 bg-gray-100 rounded">
                {/* Map Component Goes Here */}
                <div className="flex gap-4 mt-2">
                  <input type="text" placeholder="Latitude" className="w-full p-2 border rounded" />
                  <input type="text" placeholder="Longitude" className="w-full p-2 border rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Owner Information */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Owner Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">First Name</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input type="tel" className="w-full p-2 border rounded" />
            </div>
          </div>
        </div>

        {/* Account Information */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Account Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input type="password" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Confirm Password</label>
              <input type="password" className="w-full p-2 border rounded" />
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end gap-4">
          <button 
            type="reset" 
            className="px-4 py-2 border rounded hover:bg-gray-50"
          >
            Reset
          </button>
          <button 
            type="submit" 
            className="px-4 py-2 bg-teal-800 text-white rounded hover:bg-teal-900"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
