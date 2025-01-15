"use client"
import React, { useState } from 'react'
import { FaBuilding, FaBell, FaPalette, FaLock, FaCreditCard, FaSave } from 'react-icons/fa'

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    companyName: 'My Company',
    email: 'admin@company.com',
    phone: '+1234567890',
    address: '123 Business St',
    notifications: {
      email: true,
      push: true,
      orders: true,
      updates: false
    },
    theme: 'light',
    currency: 'NPR',
    language: 'English'
  })

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Company Profile */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <FaBuilding className="mr-2" /> Company Profile
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Company Name</label>
              <input
                type="text"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={settings.companyName}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={settings.email}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={settings.phone}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <textarea
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={settings.address}
                rows="3"
              />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <FaBell className="mr-2" /> Notifications
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Email Notifications</span>
              <label className="switch">
                <input type="checkbox" checked={settings.notifications.email} />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Push Notifications</span>
              <label className="switch">
                <input type="checkbox" checked={settings.notifications.push} />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>

        {/* Appearance */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <FaPalette className="mr-2" /> Appearance
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Theme</label>
              <select className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Language</label>
              <select className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
              </select>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <FaLock className="mr-2" /> Security
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Current Password</label>
              <input
                type="password"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">New Password</label>
              <input
                type="password"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-6 flex justify-end">
        <button className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <FaSave /> Save Changes
        </button>
      </div>
    </div>
  )
}

export default SettingsPage
