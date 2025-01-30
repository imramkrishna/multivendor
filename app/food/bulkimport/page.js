'use client'
import { FaFileDownload, FaFileUpload, FaListAlt, FaCheckCircle } from 'react-icons/fa'

export default function BulkImport() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Step 1 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-8 w-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
              <FaFileDownload size={20} />
            </div>
            <h2 className="text-lg font-semibold">Step 1</h2>
          </div>
          <h3 className="font-medium mb-4">Download Excel File</h3>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h4 className="font-medium mb-2">Instructions:</h4>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
              <li>Download the format file and fill it with proper data</li>
              <li>You can download the example file to understand how the data must be filled</li>
              <li>Have to upload excel file</li>
            </ul>
          </div>
          
          {/* <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Download Format
          </button> */}
        </div>

        {/* Step 2 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-8 w-8 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center">
              <FaListAlt size={20} />
            </div>
            <h2 className="text-lg font-semibold">Step 2</h2>
          </div>
          <h3 className="font-medium mb-4">Match Spreadsheet Data</h3>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Instructions:</h4>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
              <li>Fill up the data according to the format</li>
              <li>Make sure the phone numbers and email addresses are unique</li>
              <li>You can get module id and zone id from their list please input the right ids</li>
              <li>For delivery time the format is from-to type (e.g: 30-40 min)</li>
              <li>Latitude must be between -90 to 90</li>
              <li>Longitude must be between -180 to 180</li>
            </ul>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-8 w-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
              <FaCheckCircle size={20} />
            </div>
            <h2 className="text-lg font-semibold">Step 3</h2>
          </div>
          <h3 className="font-medium mb-4">Validate & Import</h3>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h4 className="font-medium mb-2">Instructions:</h4>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
              <li>In the Excel file upload section first select the upload option</li>
              <li>Upload your file in .xls .xlsx format</li>
              <li>Click the upload button</li>
              <li>After uploading stores you need to edit them and set store's logo and cover</li>
              <li>You can upload your store images in store folder from gallery</li>
              <li>Default password for store is 12345678</li>
            </ul>
          </div>
          
          <div className="space-y-3">
            {/* <input 
              type="file" 
              accept=".xls,.xlsx"
              className="w-full p-2 border rounded text-sm"
            />
            <button className="w-full bg-teal-800 text-white py-2 rounded hover:bg-teal-900">
              Upload File
            </button> */}
          </div>
        </div>
        
      </div>
      <div className='mt-4'>
        
      <div className="space-y-3 w-3/4 flex justify-center items-center m-auto">
      
  <button className="w-1/3 mx-4 mt-3 flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
    <FaFileDownload size={16} />
    Download Template with Sample Data
  </button>
  <button className="w-1/3 mx-4 flex items-center justify-center gap-2 bg-gray-600 text-white py-2 rounded hover:bg-gray-700">
    <FaFileDownload size={16} />
    Download Empty Template
  </button>
</div>
</div>
    </div>
  )
}
