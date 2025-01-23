"use client"
import React, { useState } from 'react'
import { FaBox, FaShoppingCart, FaStore, FaUsers, FaClock, FaTruck, FaBoxOpen, FaCheck, FaUndo, FaBan, FaExclamationCircle, FaStar, FaMoneyBillWave, FaShoppingBag, FaCheckCircle, FaWallet, FaMotorcycle } from 'react-icons/fa'

const DashboardPage = () => {
  const [activeFilter, setActiveFilter] = useState('week');

  // Dummy data - replace with real data
  const stats = [
    {
      title: "Items",
      value: "1,234",
      icon: "/icons/shopping-cart.svg",
      iconColor: "text-blue-500"
    },
    {
      title: "Orders",
      value: "130",
      icon: "/icons/shopping-bag.svg",
      iconColor: "text-green-500"
    },
    {
      title: "Stores",
      value: "156",
      icon: "/icons/box.svg",
      iconColor: "text-orange-500"
    },
    {
      title: "Customers",
      value: "892",
      icon: "/icons/users.svg",
      iconColor: "text-purple-500"
    }

  ]

  const orderStats = [
    {
      title: 'Unassigned Orders',
      value: '25',
      icon: '/icons/unassignedorders.svg',
      iconColor: 'text-gray-500'
    },
    {
      title: 'Accepted By Delivery Man',
      value: '12',
      icon: '/icons/deliveryman.svg',
      iconColor: 'text-blue-500'
    },
    {
      title: 'Packaging',
      value: '42',
      icon: '/icons/packaging.svg',
      iconColor: 'text-yellow-500'
    },
    {
      title: 'Out for Delivery',
      value: '128',
      icon: '/icons/outfordelivery.svg',
      iconColor: 'text-orange-500'
    },
    {
      title: 'Delivered',
      value: '3',
      icon: '/icons/delivered.svg',
      iconColor: 'text-green-500'
    },
    {
      title: 'Cancelled',
      value: '2',
      icon: '/icons/canceled.svg',
      iconColor: 'text-red-500'
    },
    {
      title: 'Refunded',
      value: '45',
      icon: '/icons/refunded.svg',
      iconColor: 'text-purple-500'
    },
    {
      title: 'Payment Failed',
      value: '53',
      icon: '/icons/payment-failed.svg',
      iconColor: 'text-red-600'
    }
  ];

  const topStores = [
    { name: 'Store A', sales: '₹45,230', orders: '156' },
    { name: 'Store B', sales: '₹38,120', orders: '142' },
    { name: 'Store C', sales: '₹32,450', orders: '128' }
  ];

  const popularStores = [
    { name: 'Store X', rating: '4.8', reviews: '256' },
    { name: 'Store Y', rating: '4.7', reviews: '198' },
    { name: 'Store Z', rating: '4.6', reviews: '167' }
  ];

  const topItems = [
    { name: 'Item 1', sales: '₹12,450', quantity: '234' },
    { name: 'Item 2', sales: '₹10,890', quantity: '198' },
    { name: 'Item 3', sales: '₹9,670', quantity: '167' }
  ];

  const topDeliverymen = [
    { name: 'John Doe', deliveries: '156', rating: '4.9' },
    { name: 'Jane Smith', deliveries: '142', rating: '4.8' },
    { name: 'Mike Johnson', deliveries: '128', rating: '4.7' }
  ];

  const topRatedItems = [
    { name: 'Product A', rating: '4.9', reviews: '234' },
    { name: 'Product B', rating: '4.8', reviews: '198' },
    { name: 'Product C', rating: '4.7', reviews: '167' }
  ];

  // Update icon rendering
  const renderIcon = (iconPath, className) => (
    <img 
      src={iconPath} 
      alt="status icon" 
      className={`w-12 h-12 ${className}`}  // Increased from w-6 h-6
    />
  )
  const renderStatusIcon = (iconPath, className) => (
    <img 
      src={iconPath} 
      alt="status icon" 
      className={`w-6 h-6 ${className}`}  // Decreased from w-12 h-12
    />
  )
  const rendergroceryIcon = (iconPath, className) => (
    <img 
      src={iconPath} 
      alt="status icon" 
      className={`w-9 h-10 mx-3 ${className}`}  // Decreased from w-12 h-12
    />
  )

  return (
    <div className="overflow-auto w-full">
      <div className="flex flex-col mb-8">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center">
        {rendergroceryIcon("/icons/grocery.png")}
          Grocery Dashboard
        </h1>
        <p className="text-sm text-gray-500 ml-12">
          Hello here you can Manage your grocery orders and deliveries
        </p>
      </div>
      
      <div className="flex flex-col items-start">
        <div className="bg-white rounded-xl border border-gray-200 p-10 w-full mx-auto">
          {/* Date Range Header */}
          <div className="flex justify-end mb-6">
            <div className="w-80 flex justify-between border-blue-400 border">
              <button
                onClick={() => setActiveFilter('year')}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${activeFilter === 'year'
                    ? 'bg-blue-500 text-white'
                    : 'text-blue-500 hover:bg-blue-50'
                  }`}
              >
                This Year
              </button>
              <button
                onClick={() => setActiveFilter('month')}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${activeFilter === 'month'
                    ? 'bg-blue-500 text-white'
                    : 'text-blue-500 hover:bg-blue-50'
                  }`}
              >
                This Month
              </button>
              <button
                onClick={() => setActiveFilter('week')}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${activeFilter === 'week'
                    ? 'bg-blue-500 text-white'
                    : 'text-blue-500 hover:bg-blue-50'
                  }`}
              >
                This Week
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 w-full">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="
                  bg-white 
                   
                  p-8 
                  shadow
                  text-gray-800 
                  
                  h-48
                "
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <div className={`mb-2 ${stat.iconColor || 'text-blue-500'}`}>
                    {renderIcon(stat.icon, "text-4xl")}
                  </div>
                  <p className="text-base font-medium opacity-85 mb-2">{stat.title}</p>
                  <div className="text-center">
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <div className="newly-added">
                    <p className='font-light text-sm opacity-40'>0 Newly added</p>

                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {orderStats.map((stat, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-lg p-3 text-gray-800"
              >
                <div className="flex items-center space-x-3">
                  <div className={`flex-shrink-0 ${stat.iconColor || 'text-blue-500'}`}>
                    {renderStatusIcon(stat.icon)}
                  </div>
                  <p className="text-sm font-bold truncate">{stat.title}</p>
                  <p className="text-sm font-semibold ml-auto flex-shrink-0">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {/* Top Selling Stores */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Top Selling Stores</h2>
          {topStores.map((store, index) => (
            <div key={index} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold">{store.name}</p>
                <p className="text-sm text-gray-500">{store.orders} orders</p>
              </div>
              <p className="text-green-600 font-bold">{store.sales}</p>
            </div>
          ))}
        </div>

        {/* Most Popular Stores */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Most Popular Stores</h2>
          {popularStores.map((store, index) => (
            <div key={index} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold">{store.name}</p>
                <p className="text-sm text-gray-500">{store.reviews} reviews</p>
              </div>
              <div className="flex items-center">
                <FaStar className="text-yellow-400 mr-1" />
                <span>{store.rating}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Top Selling Items */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Top Selling Items</h2>
          {topItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">{item.quantity} sold</p>
              </div>
              <p className="text-green-600 font-bold">{item.sales}</p>
            </div>
          ))}
        </div>

        {/* Top Deliverymen */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Top Delivery Partners</h2>
          {topDeliverymen.map((person, index) => (
            <div key={index} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold">{person.name}</p>
                <p className="text-sm text-gray-500">{person.deliveries} deliveries</p>
              </div>
              <div className="flex items-center">
                <FaStar className="text-yellow-400 mr-1" />
                <span>{person.rating}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Top Rated Items */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Top Rated Items</h2>
          {topRatedItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">{item.reviews} reviews</p>
              </div>
              <div className="flex items-center">
                <FaStar className="text-yellow-400 mr-1" />
                <span>{item.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
