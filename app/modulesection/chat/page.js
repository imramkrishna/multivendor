"use client"
import React, { useState } from 'react';
import { FaSearch, FaPaperPlane } from 'react-icons/fa';

const Page = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [customers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      lastMessage: "Thanks for your help!",
      unread: 2
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      lastMessage: "When will my order arrive?",
      unread: 0
    }
  ]);

  const [messages] = useState({
    1: [
      { id: 1, text: "Hi, I need help with my order", sender: "customer", time: "09:00" },
      { id: 2, text: "Sure, I'll help you", sender: "admin", time: "09:01" },
      { id: 3, text: "Thanks for your help!", sender: "customer", time: "09:02" }
    ]
  });

  return (
    <div className="flex h-[calc(100vh-4rem)]">
        
      {/* Left Panel - Customer List */}
      <div className="w-1/3 border-r bg-white">
      <div className="admin-details flex items-center space-x-3 p-4 border-b bg-white">
  <div className="relative">
    <img
      src="/avatar.png"
      alt="Admin"
      className="w-10 h-10 rounded-full border-2 border-gray-200"
    />
    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
  </div>
  <div>
    <h3 className="font-medium">John Doe</h3>
    <p className="text-sm text-gray-500">Admin</p>
  </div>
</div>
        <div className="p-4">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search customers..."
              className="w-full px-4 py-2 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          
          <div className="space-y-2">
            {customers.map(customer => (
              <div
                key={customer.id}
                onClick={() => setSelectedCustomer(customer)}
                className={`p-3 rounded-lg cursor-pointer hover:bg-gray-50 ${
                  selectedCustomer?.id === customer.id ? 'bg-gray-50' : ''
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">{customer.name}</p>
                    <p className="text-sm text-gray-500">{customer.email}</p>
                  </div>
                  {customer.unread > 0 && (
                    <span className="px-2 py-1 text-xs bg-teal-100 text-teal-800 rounded-full">
                      {customer.unread}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mt-1 truncate">
                  {customer.lastMessage}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel - Chat Messages */}
      <div className="flex-1 flex flex-col bg-gray-50">

        {selectedCustomer ? (
          <>
            {/* Chat Header */}
            <div className="p-4 bg-white border-b">
              <h2 className="font-medium">{selectedCustomer.name}</h2>
              <p className="text-sm text-gray-500">{selectedCustomer.email}</p>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-4">
                {messages[selectedCustomer.id]?.map(message => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === 'admin' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div className={`max-w-[70%] p-3 rounded-lg ${
                      message.sender === 'admin' 
                        ? 'bg-teal-800 text-white'
                        : 'bg-white'
                    }`}>
                      <p>{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'admin'
                          ? 'text-teal-100'
                          : 'text-gray-500'
                      }`}>
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Message Input */}
            <div className="p-4 bg-white border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button className="px-4 py-2 bg-teal-800 text-white rounded-lg hover:bg-teal-700">
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Select a customer to start chatting
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
