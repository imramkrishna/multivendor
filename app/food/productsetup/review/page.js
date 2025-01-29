"use client"
import React, { useState } from 'react'

const page = () => {
  // Dummy data
  const dummyReviews = [
    { id: 'REV001', item: 'Organic Apples', customer: 'John Doe', review: 'Great quality fruits!', date: '2024-03-01', storeReply: 'Thank you for your feedback!', rating: 5 },
    { id: 'REV002', item: 'Fresh Milk', customer: 'Jane Smith', review: 'Good product but expensive', date: '2024-03-02', storeReply: 'We appreciate your feedback.', rating: 4 },
    { id: 'REV003', item: 'Whole Wheat Bread', customer: 'Mike Johnson', review: 'Always fresh and tasty', date: '2024-03-03', storeReply: '', rating: 5 },
    { id: 'REV004', item: 'Chicken Breast', customer: 'Sarah Williams', review: 'Excellent quality', date: '2024-03-04', storeReply: 'Thanks!', rating: 5 },
    { id: 'REV005', item: 'Yogurt', customer: 'Tom Brown', review: 'Good but packaging could be better', date: '2024-03-05', storeReply: 'We\'ll look into it.', rating: 3 },
    { id: 'REV006', item: 'Bananas', customer: 'Emily Davis', review: 'Fresh and ripe', date: '2024-03-06', storeReply: '', rating: 4 },
    { id: 'REV007', item: 'Orange Juice', customer: 'Alex Wilson', review: 'Natural taste', date: '2024-03-07', storeReply: 'Thank you!', rating: 5 },
    { id: 'REV008', item: 'Eggs', customer: 'Lisa Anderson', review: 'Good quality', date: '2024-03-08', storeReply: '', rating: 4 },
    { id: 'REV009', item: 'Rice', customer: 'David Lee', review: 'Premium quality', date: '2024-03-09', storeReply: 'Appreciate your feedback', rating: 5 },
    { id: 'REV010', item: 'Tomatoes', customer: 'Mary Clark', review: 'Fresh vegetables', date: '2024-03-10', storeReply: '', rating: 4 },
    { id: 'REV011', item: 'Pasta', customer: 'Robert White', review: 'Good quality pasta', date: '2024-03-11', storeReply: 'Thanks!', rating: 4 },
    { id: 'REV012', item: 'Coffee Beans', customer: 'Patricia Moore', review: 'Amazing aroma', date: '2024-03-12', storeReply: '', rating: 5 },
    { id: 'REV013', item: 'Cheese', customer: 'James Taylor', review: 'Excellent taste', date: '2024-03-13', storeReply: 'Thank you!', rating: 5 },
    { id: 'REV014', item: 'Honey', customer: 'Jennifer Garcia', review: 'Pure and natural', date: '2024-03-14', storeReply: '', rating: 4 },
    { id: 'REV015', item: 'Olive Oil', customer: 'Michael Martinez', review: 'Good quality oil', date: '2024-03-15', storeReply: 'Appreciate it!', rating: 4 },
    { id: 'REV016', item: 'Cereal', customer: 'Linda Robinson', review: 'Kids love it', date: '2024-03-16', storeReply: '', rating: 5 },
    { id: 'REV017', item: 'Green Tea', customer: 'William Lee', review: 'Fresh and aromatic', date: '2024-03-17', storeReply: 'Thank you!', rating: 4 },
    { id: 'REV018', item: 'Fish', customer: 'Elizabeth Brown', review: 'Very fresh', date: '2024-03-18', storeReply: '', rating: 5 },
    { id: 'REV019', item: 'Chocolate', customer: 'Richard Davis', review: 'Delicious taste', date: '2024-03-19', storeReply: 'Thanks!', rating: 5 },
    { id: 'REV020', item: 'Butter', customer: 'Susan Wilson', review: 'Good quality', date: '2024-03-20', storeReply: '', rating: 4 },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [reviews, setReviews] = useState(dummyReviews);

  // Search functionality
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filtered = dummyReviews.filter(review =>
      Object.values(review).some(value =>
        value.toString().toLowerCase().includes(term.toLowerCase())
      )
    );
    setReviews(filtered);
  };

  // Export functionality
  const handleExport = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + "SI Review Id,Item,Customer,Review,Date,Store Reply,Rating\n"
      + reviews.map(row => Object.values(row).join(",")).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "reviews_export.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <img 
            src="/icons/items.png" 
            alt="Review Icon" 
            className="w-8 h-8"
          />
          <h1 className="text-2xl font-bold">Item Reviews</h1>
        </div>
      </div>

      <div className="overflow-x-auto border">
        <div className="flex justify-end mb-4">
          <div className="flex gap-4 mt-2">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border rounded-lg"
              value={searchTerm}
              onChange={handleSearch}
            />
            <button
              onClick={handleExport}
              className="px-4 py-2 text-teal-500 rounded border border-teal-500 hover:text-teal-600"
            >
              Export
            </button>
          </div>
        </div>

        <table className="min-w-full bg-white border rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">SI Review Id</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Review</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Store Reply</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {reviews.map((review) => (
              <tr key={review.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-center">{review.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">{review.item}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">{review.customer}</td>
                <td className="px-6 py-4 text-center">{review.review}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">{review.date}</td>
                <td className="px-6 py-4 text-center">{review.storeReply}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <button className="text-blue-600 hover:text-blue-800">Reply</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default page