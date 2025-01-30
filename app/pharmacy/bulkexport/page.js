'use client'
import { useState } from 'react'
import { FaFileExport, FaCalendarAlt } from 'react-icons/fa'

export default function BulkExport() {
  const [sortType, setSortType] = useState('default')
  const [dateRange, setDateRange] = useState({ start: '', end: '' })
  const [idRange, setIdRange] = useState({ start: '', end: '' })

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Step 1 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-8 w-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
              <FaFileExport size={20} />
            </div>
            <h2 className="text-lg font-semibold">Step 1</h2>
          </div>
          <h3 className="font-medium mb-4">Select Data Type</h3>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h4 className="font-medium mb-2">Instructions:</h4>
            <p className="text-sm text-gray-600">
              Select data type in which order you want your data sorted while downloading.
            </p>
          </div>

          <select 
            className="w-full p-2 border rounded"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="default">Default Sort</option>
            <option value="name">Sort by Name</option>
            <option value="date">Sort by Date</option>
            <option value="id">Sort by ID</option>
          </select>
        </div>

        {/* Step 2 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-8 w-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
              <FaCalendarAlt size={20} />
            </div>
            <h2 className="text-lg font-semibold">Step 2</h2>
          </div>
          <h3 className="font-medium mb-4">Select Data Range</h3>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h4 className="font-medium mb-2">Instructions:</h4>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
              <li>The file will be downloaded in .xls format</li>
              <li>Click reset if you want to clear your changes and download in default sort order</li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium">By Date Range:</label>
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="date" 
                  className="p-2 border rounded"
                  value={dateRange.start}
                  onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
                />
                <input 
                  type="date" 
                  className="p-2 border rounded"
                  value={dateRange.end}
                  onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">By ID Range:</label>
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="number" 
                  placeholder="Start ID"
                  className="p-2 border rounded"
                  value={idRange.start}
                  onChange={(e) => setIdRange({...idRange, start: e.target.value})}
                />
                <input 
                  type="number" 
                  placeholder="End ID"
                  className="p-2 border rounded"
                  value={idRange.end}
                  onChange={(e) => setIdRange({...idRange, end: e.target.value})}
                />
              </div>
            </div>

            <div className="flex gap-4">
              <button 
                className="flex-1 bg-gray-600 text-white py-2 rounded hover:bg-gray-700"
                onClick={() => {
                  setSortType('default')
                  setDateRange({ start: '', end: '' })
                  setIdRange({ start: '', end: '' })
                }}
              >
                Reset
              </button>
              <button 
                className="flex-1 bg-teal-800 text-white py-2 rounded hover:bg-teal-900"
              >
                Export Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}