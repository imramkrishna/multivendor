import { FaUsers, FaTruck, FaUserTie, FaCheckCircle, FaUserPlus, FaBan, FaChartLine, FaStar } from 'react-icons/fa';
import Image from 'next/image';

export default function UserOverview() {
    return (
        <div className="p-4">
            {/* Header Section */}
            <div className="flex items-center mb-6">
                <div className="relative w-10 h-10 mr-3 rounded-full border">
                    <Image src="/icons/users.svg" alt="Users Overview" layout="fill" objectFit="contain" />
                </div>
                <div className='flex flex-col'>
                    <h1 className="text-2xl font-bold text-gray-800">User Overview</h1>
                    <p className='text-sm opacity-70'>Hello here you can manage your users by zone</p>
                </div>
            </div>

            {/* Stats Summary Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {/* Total Customers Card */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex flex-col">
                        <div className="bg-teal-100 p-3 rounded-full w-fit">
                            <FaUsers className="w-6 h-6 text-teal-600" />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-3xl font-bold text-teal-800">1,234</h3>
                            <p className="text-gray-500 font-semibold text-sm">Total Customers</p>
                        </div>
                    </div>
                </div>

                {/* Total Deliverymen Card */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex flex-col">
                        <div className="bg-blue-100 p-3 rounded-full w-fit">
                            <FaTruck className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-3xl font-bold text-blue-800">256</h3>
                            <p className="text-gray-500 font-semibold text-sm">Total Deliverymen</p>
                        </div>
                    </div>
                </div>

                {/* Total Employees Card */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex flex-col">
                        <div className="bg-yellow-100 p-3 rounded-full w-fit">
                            <FaUserTie className="w-6 h-6 text-yellow-600" />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-3xl font-bold text-yellow-600">89</h3>
                            <p className="text-gray-500 font-semibold text-sm">Total Employees</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Customer Analytics Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Customer Statistics */}
                <div className="bg-white px-6 ">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">Customer Statistics</h3>
                        <FaUsers className="text-blue-500" />
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col w-full rounded-lg h-24 border shadow-md hover:shad p-4">
                                <div className="flex items-center mb-2">
                                    <div className="relative w-6 h-6">
                                        <Image
                                            src="/icons/modulesection/activecustomer.svg"
                                            alt="Active Users"
                                            width={24}
                                            height={24}
                                            className="object-contain"
                                        />
                                    </div>
                                    <span className="font-bold">1,120</span>
                                </div>
                                <span>Active Customers</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="flex flex-col w-full rounded-lg h-24 border shadow-md hover:shad p-4">
                                <div className="flex items-center mb-2">
                                    <FaUserPlus className="text-blue-500 mr-2" />
                                    <span className="font-bold">89</span>
                                </div>
                                <span>Newly Joined</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="flex flex-col w-full rounded-lg h-24 border shadow-md hover:shad p-4">
                                <div className="flex items-center mb-2">
                                    <FaBan className="text-red-500 mr-2" />
                                    <span className="font-bold">25</span>
                                </div>
                                <span>Blocked</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Customer Growth Graph */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">Customer Growth</h3>
                        <FaChartLine className="text-blue-500" />
                    </div>
                    <div className="h-48 flex items-center justify-center text-gray-400">
                        [Graph Component Here]
                    </div>
                </div>

                {/* Customer Satisfaction */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">Customer Satisfaction</h3>
                        <FaStar className="text-yellow-400" />
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-yellow-400 mb-2">4.8</div>
                        <p className="text-gray-500 mb-4">Average Rating</p>
                        <div className="flex justify-between items-center">
                            <span>Reviews Received</span>
                            <span className="font-bold">2,456</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
