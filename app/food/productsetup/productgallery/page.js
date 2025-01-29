"use client"
import React, { useState } from 'react';

const renderIcon = (iconPath, className) => (
  <img 
    src={iconPath} 
    alt="gallery icon" 
    className={`w-6 h-6 ${className}`}
  />
);

const products = [
  {
    id: 1,
    name: "Organic Brown Rice",
    image: "/icons/brown-rice.webp",
    category: "Health",
    subCategory: "Organic Foods",
    isOrganic: "No",
    unit: "Kg",
    description: "Organic brown rice is a wholesome and nutritious grain that retains its bran layer and germ. It's rich in fiber, vitamins, and minerals.",
    tags: ["organic", "rice", "brown rice"]
  },
  {
    id: 2,
    name: "Quinoa Seeds",
    image: "/icons/quinoa.webp",
    category: "Health",
    subCategory: "Super Foods",
    isOrganic: "Yes",
    unit: "Kg",
    description: "Quinoa is a nutrient-rich grain crop that is high in protein and contains all nine essential amino acids.",
    tags: ["quinoa", "superfood", "protein"]
  },
  {
    id: 3,
    name: "Chia Seeds",
    image: "/icons/chia.webp",
    category: "Health",
    subCategory: "Super Foods",
    isOrganic: "Yes",
    unit: "Kg",
    description: "Chia seeds are rich in fiber, omega-3 fatty acids, protein, vitamins and minerals.",
    tags: ["chia", "superfood", "omega-3"]
  }
];

const Page = () => {
  const [filters, setFilters] = useState({
    store: '',
    category: '',
    search: ''
  });

  return (
    <div className="p-6 space-y-6">
        <h2 className="text-xl font-semibold mb-6 flex items-center">
          {renderIcon("/icons/items.png", "mr-3")}
          Product Gallery
        </h2>
      <div className="bg-white border h-24 rounded-lg shadow-sm flex items-center gap-4 px-4 mt-4">
        <select
          className="h-10 bg-white border px-4 w-96  border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={filters.store}
          onChange={(e) => setFilters(prev => ({ ...prev, store: e.target.value }))}
        >
          <option value="">All Stores</option>
          <option value="store1">Store 1</option>
          <option value="store2">Store 2</option>
        </select>

        <select
          className="h-10 bg-white px-4 w-96 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={filters.category}
          onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
        >
          <option value="">All Categories</option>
          <option value="cat1">Category 1</option>
          <option value="cat2">Category 2</option>
        </select>

        <input
          type="text"
          placeholder="Search..."
          className="h-10 px-4 flex-1 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={filters.search}
          onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
        />

        <button
          className="h-10 w-72 px-6 bg-teal-800 text-white rounded hover:bg-teal-700"
        >
          Search
        </button>
      </div>

      <div className="space-y-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-sm p-6 border">
            <h2 className="text-2xl font-semibold mb-6">{product.name}</h2>
            
            <div className="flex gap-8">
              {/* Left Column - Image and Description */}
              <div className="w-1/3 space-y-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[300px] object-cover rounded-lg border border-gray-200"
                />
                <div>
                  <h3 className="text-lg font-medium mb-4">Description</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </div>

              {/* Right Column - Other Information */}
              <div className="w-2/3 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  {/* General Information */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">General Information</h3>
                    <div className="space-y-2">
                      <p className="flex">
                        <span className="w-32 text-gray-600">Category:</span>
                        <span className="font-medium">{product.category}</span>
                      </p>
                      <p className="flex">
                        <span className="w-32 text-gray-600">Sub Category:</span>
                        <span className="font-medium">{product.subCategory}</span>
                      </p>
                      <p className="flex">
                        <span className="w-32 text-gray-600">Is Organic:</span>
                        <span className="font-medium">{product.isOrganic}</span>
                      </p>
                      <p className="flex">
                        <span className="w-32 text-gray-600">Unit:</span>
                        <span className="font-medium">{product.unit}</span>
                      </p>
                    </div>
                  </div>

                  {/* Available Variations */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Available Variations</h3>
                    <div className="space-y-2">
                      <div className="p-3 bg-gray-50 rounded">
                        <p className="text-sm">No variations available</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Tags</h3>
                  <div className="flex gap-2 flex-wrap">
                    {product.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
