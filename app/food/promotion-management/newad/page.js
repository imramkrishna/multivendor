"use client"
import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa';

const Page = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    store: '',
    priority: '',
    type: '',
    validity: '',
    showReviews: false,
    showRatings: false,
    file: null
  });

  const [filePreview, setFilePreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result);
        setFormData(prev => ({ ...prev, file }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-6">
      <h1 className='text-xl font-bold m-3'>Create Advertisement</h1>
      <div className="bg-white rounded-xl shadow-sm p-6 border flex">
        {/* Form Section */}
        <div className="w-2/3">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Advertisement Title
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Enter title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Short Description
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Enter description"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Store
                </label>
                <select 
                  className="w-full bg-white px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.store}
                  onChange={(e) => setFormData(prev => ({ ...prev, store: e.target.value }))}
                >
                  <option value="">Select Store</option>
                  <option value="store1">Store 1</option>
                  <option value="store2">Store 2</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Priority
                </label>
                <select 
                  className="w-full bg-white px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.priority}
                  onChange={(e) => setFormData(prev => ({ ...prev, priority: e.target.value }))}
                >
                  <option value="">Select Priority</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Advertisement Type
                </label>
                <select 
                  className="w-full bg-white px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.type}
                  onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value }))}
                >
                  <option value="">Select Type</option>
                  <option value="banner">Banner</option>
                  <option value="popup">Pop-up</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Validity
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.validity}
                  onChange={(e) => setFormData(prev => ({ ...prev, validity: e.target.value }))}
                />
              </div>
            </div>

            <div className="flex space-x-6">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.showReviews}
                  onChange={(e) => setFormData(prev => ({ ...prev, showReviews: e.target.checked }))}
                  className="rounded text-blue-600"
                />
                <span className="text-sm text-gray-700">Show Reviews</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.showRatings}
                  onChange={(e) => setFormData(prev => ({ ...prev, showRatings: e.target.checked }))}
                  className="rounded text-blue-600"
                />
                <span className="text-sm text-gray-700">Show Ratings</span>
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Files
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                <div className="space-y-1 text-center">
                  <FaUpload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                      <span>Upload a file</span>
                      <input type="file" className="sr-only" onChange={handleFileChange} />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Preview Section */}
        <div className="w-1/3 pl-6 flex flex-col min-h-[600px]">
          <h2 className="text-lg font-semibold mb-6">Advertisement Preview</h2>
          <div className="flex-1 space-y-4 bg-slate-50">
            {formData.title && (
              <div>
                <h3 className="font-medium">Title</h3>
                <p className="text-gray-600">{formData.title}</p>
              </div>
            )}
            
            {formData.description && (
              <div>
                <h3 className="font-medium">Description</h3>
                <p className="text-gray-600">{formData.description}</p>
              </div>
            )}

            {formData.store && (
              <div>
                <h3 className="font-medium">Store</h3>
                <p className="text-gray-600">{formData.store}</p>
              </div>
            )}

            {formData.priority && (
              <div>
                <h3 className="font-medium">Priority</h3>
                <p className="text-gray-600">{formData.priority}</p>
              </div>
            )}

            {formData.type && (
              <div>
                <h3 className="font-medium">Type</h3>
                <p className="text-gray-600">{formData.type}</p>
              </div>
            )}

            {formData.validity && (
              <div>
                <h3 className="font-medium">Validity</h3>
                <p className="text-gray-600">{formData.validity}</p>
              </div>
            )}

            {filePreview && (
              <div>
                <h3 className="font-medium">File Preview</h3>
                <div className="mt-2">
                  {/* <img
                    src={filePreview}
                    alt="Preview"
                    className="max-w-full h-auto rounded-lg"
                  /> */}
                </div>
              </div>
            )}
          </div>

          {/* Buttons at bottom */}
          <div className="flex justify-end space-x-4 mt-auto pt-6">
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
        </div>
      </div>
    </div>
  );
};

export default Page;