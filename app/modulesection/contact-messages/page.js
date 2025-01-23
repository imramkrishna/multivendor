'use client'
import { useState } from 'react';
import { FaSearch, FaFileExport, FaComments, FaEye, FaEnvelope, FaEnvelopeOpen } from 'react-icons/fa';
import Image from 'next/image';

export default function ContactMessages() {
    return (
        <div className="p-4">
            {/* Header */}
            <div className="flex items-center mb-6">
                
                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold">All Messages Lists</h1>
                    <p className="text-sm text-gray-500">Manage customer messages</p>
                </div>
            </div>

            {/* Messages Table */}
            <div className="bg-white rounded border shadow">
                <div className="p-4 flex justify-end items-center border-b">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search messages..."
                                className="w-64 pl-10 pr-4 py-2 border rounded-lg"
                            />
                            <FaSearch className="absolute left-3 top-3 text-gray-400" />
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 text-teal-600 border border-teal-600 rounded">
                            <FaFileExport />
                            Export
                        </button>
                    </div>
                </div>

                <table className="min-w-full">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="px-6 py-6 text-left text-xs font-medium text-gray-500 uppercase">SI</th>
                            <th className="px-6 py-6 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                            <th className="px-6 py-6 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                            <th className="px-6 py-6 text-left text-xs font-medium text-gray-500 uppercase">Subject</th>
                            <th className="px-6 py-6 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            <th className="px-6 py-6 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {[1, 2, 3].map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="px-6 py-4">{index + 1}</td>
                                <td className="px-6 py-4">John Doe</td>
                                <td className="px-6 py-4">john@example.com</td>
                                <td className="px-6 py-4">Product Inquiry</td>
                                <td className="px-6 py-4">
                                    {index === 0 ? (
                                        <span className="flex items-center text-blue-600">
                                            <FaEnvelope className="mr-2" />
                                            Unread
                                        </span>
                                    ) : (
                                        <span className="flex items-center text-gray-600">
                                            <FaEnvelopeOpen className="mr-2" />
                                            Read
                                        </span>
                                    )}
                                </td>
                                <td className="px-6 py-4">
                                    <button className="p-2 border border-blue-400 text-blue-600 hover:bg-blue-100 rounded">
                                        <FaEye />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
