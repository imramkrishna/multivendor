"use client"
import React, { useState } from 'react';
import { FaUpload, FaStore, FaMoneyBillWave, FaListUl, FaTags } from 'react-icons/fa';

const renderIcon = (iconPath, className) => (
  <img 
    src={iconPath} 
    alt="item icon" 
    className={`w-7 h-8 ${className}`}
  />
);

const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: null,
    store: '',
    category: '',
    subCategory: '',
    unit: '',
    nutrition: '',
    allergen: '',
    maxQuantity: '',
    isOrganic: false,
    isHalal: false,
    price: '',
    stock: '',
    discountType: '',
    discountPercent: '',
    attribute: '',
    tags: ''
  });

  const handleImage1Change = (e) => {
    // Handle image 1 change
  };

  const handleImage2Change = (e) => {
    // Handle image 2 change
  };

  return (
    <div className="p-6 space-y-6">
        <h2 className="text-xl font-semibold mb-6 flex items-center">
          {renderIcon("/icons/items.png", "mr-3")}
          Add New Item
        </h2>
      <form className="space-y-8">
        {/* Basic Information */}
        <div className="bg-white rounded-xl shadow-md p-6 border">
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name (Default) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Item Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 w-36 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                <div className="space-y-1 text-center">
                  <FaUpload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                      <span>Upload a file</span>
                      <input type="file" className="sr-only" accept="image/*" onChange={(e) => handleImage1Change(e)} />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Short Description (Default) <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Item Thumbnail
              </label>
              <div className="mt-1 flex justify-center w-36 px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                <div className="space-y-1 text-center">
                  <FaUpload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                      <span>Upload a file</span>
                      <input type="file" className="sr-only" accept="image/*" onChange={(e) => handleImage2Change(e)} />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Store and Category Info */}
        <div className="bg-white rounded-xl shadow-md p-6 border">
          <h2 className="text-lg border-b pb-4 font-semibold mb-4 flex items-center">
            <FaStore className="w-5 h-5 mr-2 text-gray-600" />
            Store and Category Info
          </h2>
          <div className="grid grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Store <span className="text-red-500">*</span>
              </label>
              <select
                required
                className="w-full bg-white px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.store}
                onChange={(e) => setFormData(prev => ({ ...prev, store: e.target.value }))}
              >
                <option value="">Select Store</option>
                {/* Add store options */}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                required
                className="w-full bg-white px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.category}
                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
              >
                <option value="">Select Category</option>
                {/* Add category options */}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sub Category
              </label>
              <select
                className="w-full bg-white px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.subCategory}
                onChange={(e) => setFormData(prev => ({ ...prev, subCategory: e.target.value }))}
              >
                <option value="">Select Sub Category</option>
                {/* Add sub category options */}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Unit
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.unit}
                onChange={(e) => setFormData(prev => ({ ...prev, unit: e.target.value }))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nutrition
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.nutrition}
                onChange={(e) => setFormData(prev => ({ ...prev, nutrition: e.target.value }))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Allergen Ingredients
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.allergen}
                onChange={(e) => setFormData(prev => ({ ...prev, allergen: e.target.value }))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Maximum Purchase Quantity Limit
              </label>
              <input
                type="number"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.maxQuantity}
                onChange={(e) => setFormData(prev => ({ ...prev, maxQuantity: e.target.value }))}
              />
            </div>
            <div className="flex items-center space-x-6 mt-8">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded text-blue-600"
                  checked={formData.isOrganic}
                  onChange={(e) => setFormData(prev => ({ ...prev, isOrganic: e.target.checked }))}
                />
                <span className="ml-2 text-sm text-gray-700">Is Organic</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded text-blue-600"
                  checked={formData.isHalal}
                  onChange={(e) => setFormData(prev => ({ ...prev, isHalal: e.target.checked }))}
                />
                <span className="ml-2 text-sm text-gray-700">Is Halal</span>
              </label>
            </div>
          </div>
        </div>

        {/* Price Information */}
        <div className="bg-white  rounded-xl shadow-md p-6 border">
          <h2 className="text-lg border-b pb-4 font-semibold mb-4 flex items-center">
            <FaMoneyBillWave className="w-5 h-5 mr-2 text-gray-600" />
            Price Information
          </h2>
          <div className="grid grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                required
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.price}
                onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Total Stock
              </label>
              <input
                type="number"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.stock}
                onChange={(e) => setFormData(prev => ({ ...prev, stock: e.target.value }))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Discount Type <span className="text-red-500">*</span>
              </label>
              <select
                required
                className="w-full bg-white px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.discountType}
                onChange={(e) => setFormData(prev => ({ ...prev, discountType: e.target.value }))}
              >
                <option value="">Select Discount Type</option>
                <option value="percent">Percentage</option>
                <option value="fixed">Fixed Amount</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Discount (%) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                required
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.discountPercent}
                onChange={(e) => setFormData(prev => ({ ...prev, discountPercent: e.target.value }))}
              />
            </div>
          </div>
        </div>

        {/* Attribute */}
        <div className="bg-white rounded-xl shadow-md p-6 border">
          <h2 className="text-lg border-b pb-4 font-semibold mb-4 flex items-center">
            <FaListUl className="w-5 h-5 mr-2 text-gray-600" />
            Attribute
          </h2>
          <div>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.attribute}
              onChange={(e) => setFormData(prev => ({ ...prev, attribute: e.target.value }))}
              placeholder="Enter attribute"
            />
          </div>
        </div>

        {/* Tags */}
        <div className="bg-white rounded-xl shadow-md p-6 border">
          <h2 className="text-lg border-b pb-4 font-semibold mb-4 flex items-center">
            <FaTags className="w-5 h-5 mr-2 text-gray-600" />
            Tags
          </h2>
          <div>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.tags}
              onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
              placeholder="Enter tags"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end space-x-4">
          <button
            type="reset"
            className="px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            Reset
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-teal-800 text-white rounded-lg hover:bg-teal-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
