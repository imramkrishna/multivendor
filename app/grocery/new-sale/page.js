"use client"
import React, { useState } from 'react'

const NewSalePage = () => {
  const [selectedProducts, setSelectedProducts] = useState([])
  const [paymentMethod, setPaymentMethod] = useState('cod')

  return (
    <div className="pt-6">


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Product Section - Takes 2/3 of space */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border">
          <h2 className='h-14 rounded-t-xl w-full bg-slate-50 flex items-center px-4 font-bold'>
            <p className='text-gray-600'>Product Section</p>
          </h2>
          <div className="mb-4 my-5 flex space-x-4 mx-4 w-[95%]">
            <select className="w-1/2 px-4 py-2 h-10 bg-white text-sm opacity-85 border border-gray-200 focus:outline-none text-gray-600">
              <option value="">Select Store</option>
              <option value="store1">Store 1</option>
              <option value="store2">Store 2</option>
              <option value="store3">Store 3</option>
            </select>

            <select className="w-1/2 px-4 py-2 h-10 bg-white text-sm border border-gray-200 focus:outline-non text-gray-600">
              <option value="">All Categories</option>
              <option value="cat1">Category 1</option>
              <option value="cat2">Category 2</option>
              <option value="cat3">Category 3</option>
            </select>
          </div>
          <div className="mb-4 my-5 mx-4 w-[95%]">
            <input
              type="text"
              placeholder="Search by product name"
              className="w-full px-4 py-2 bg-slate-50 border border-gray-200 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-[60vh] overflow-y-auto">
            <div className="col-span-full flex flex-col items-center justify-center py-12">
              <img
                src="/icons/search.png"
                alt="search"
                className="w-16 h-16 text-gray-400 mb-4 opacity-80"
              />
              <p className="text-gray-500 text-lg opacity-80">No product on POS search</p>
            </div>
          </div>
        </div>

        {/* Billing Section - Takes 1/3 of space */}
        <div className="bg-white rounded-xl shadow-sm border">
          <h2 className='h-14 rounded-t-xl w-full bg-slate-50 flex items-center px-4 font-bold'>
            <p className='text-gray-600'>Billing Section</p>
          </h2>
          <div className="customer mb-4">
            <div className="flex items-center space-x-4 mx-2 w-[95%] my-3">
              <select className="w-3/4 h-12 px-4 py-2 bg-white text-sm border border-gray-200 focus:outline-none text-gray-600">
                <option value="">Select Customer</option>
                <option value="customer1">John Doe</option>
                <option value="customer2">Jane Smith</option>
                <option value="customer3">Mike Johnson</option>
              </select>

              <button className="w-1/4 px-4 py-4 text-white bg-teal-800 text-xs hover:bg-teal-900 transition-colors duration-200">
                Add  Customer
              </button>
            </div>
          </div>
          <div className="space-y-4">
            {/* Selected products will appear here */}
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-4">Delivery Information</h3>
              
              <table className="w-full">
                <thead className="bg-gray-50 text-gray-700 text-xs h-12">
                  <tr>
                    <th className="px-3 py-2 text-left">Food</th>
                    <th className="px-3 py-2 text-center">QTY</th>
                    <th className="px-3 py-2 text-left">Unit Price</th>
                    <th className="px-3 py-2 text-center">Delete</th>
                  </tr>
                </thead>
               
              </table>

              {/* Price Summary Section */}
              <div className="mt-6 space-y-3 pt-4">
                <div className="flex justify-between text-base">
                  <span className="">Sub Total (Tax included) :</span>
                  <span className="font-medium">₹0.00</span>
                </div>
                
                <div className="flex justify-between text-base">
                  <span className="">Discount :</span>
                  <span className="font-medium text-red-500">-₹0.00</span>
                </div>
                
                <div className="flex justify-between text-base">
                  <span className="">Delivery Fee :</span>
                  <span className="font-medium">₹40.00</span>
                </div>
                
                <div className="flex justify-between text-base font-semibold border-t pt-3">
                  <span>Total</span>
                  <span>₹40.00</span>
                </div>
              </div>

              {/* Payment Method Section */}
              <div className=" pt-4 mt-4">
                <h4 className="text-base font-medium mb-3">Paid By</h4>
                <div className="flex space-x-4">
                  <button
                    onClick={() => setPaymentMethod('cod')}
                    className={`px-4 py-2 text-sm border  transition-colors ${
                      paymentMethod === 'cod'
                        ? 'bg-black text-white'
                        : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    Cash on Delivery
                  </button>
                  
                  <button
                    onClick={() => setPaymentMethod('wallet')}
                    className={`px-4 py-2 text-sm border transition-colors ${
                      paymentMethod === 'wallet'
                        ? 'bg-black text-white'
                        : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    Wallet
                  </button>
                </div>
              </div>

              <div className=" pt-4 mt-4">
                <div className="flex space-x-4">
                  <button className="w-1/2 px-4 py-2 text-sm border border-red-500 text-red-500 hover:bg-red-50 transition-colors">
                    Cancel Order
                  </button>
                  <button className="w-1/2 px-4 py-2 text-sm bg-teal-800 text-white hover:bg-teal-900 transition-colors">
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewSalePage
