import { FaUsers, FaTruck, FaUserTie, FaCheckCircle, FaUserPlus, FaBan, FaChartLine, FaStar, FaMedal } from 'react-icons/fa';
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
                            <div className="flex flex-col w-full rounded-lg h-24 border shadow-md hover:shadow-2xl p-4">
                                <div className="flex items-center mb-2">
                                    <div className="relative w-10 h-10">
                                        <Image
                                            src="/modulesection/activecustomer.svg"
                                            alt="Active Users"
                                            width={40}
                                            height={40}
                                            className="object-contain"
                                        />
                                    </div>
                                    <span className="font-bold text-2xl text-teal-800 ml-4">1,120</span>
                                </div>
                                <span className='text-sm font-semibold'>Active Customers</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="flex flex-col w-full rounded-lg h-24 border shadow-md hover:shadow-2xl p-4">
                                <div className="flex items-center mb-2">
                                <div className="relative w-10 h-10">
                                        <Image
                                            src="/modulesection/newlyjoined.svg"
                                            alt="Active Users"
                                            width={40}
                                            height={40}
                                            className="object-contain"
                                        />
                                    </div>
                                    <span className="font-bold text-blue-600 ml-4 text-2xl">89</span>
                                </div>
                                <span className='text-sm font-semibold'>Newly Joined</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="flex flex-col w-full rounded-lg h-24 border shadow-md hover:shadow-2xl p-4">
                                <div className="flex items-center mb-2">
                                <div className="relative w-10 h-10">
                                        <Image
                                            src="/modulesection/blockedcustomer.svg"
                                            alt="Active Users"
                                            width={34}
                                            height={34}
                                            className="object-contain"
                                        />
                                    </div>
                                    <span className="font-bold text-red-600 ml-2 text-2xl">25</span>
                                </div>
                                <span className='text-sm font-semibold'>Blocked Customer</span>
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

            {/* Deliveryman Statistics Section */}
            <div className="flex gap-4 mt-6">
                {/* Main Statistics - 70% width */}
                <div className="w-[70%] bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">Deliveryman Statistics</h3>
                        <FaTruck className="text-blue-500" />
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4 mb-6">
                        {/* Active Deliverymen */}
                        <div className="flex flex-col p-4 border rounded-lg shadow-md hover:shadow-2xl h-24">
                            <div className="flex items-center mb-2">
                                <div className="relative w-10 h-10">
                                    <Image
                                        src="/modulesection/active-deliveryman.svg"
                                        alt="Active Deliverymen"
                                        width={40}
                                        height={40}
                                        className="object-contain"
                                    />
                                </div>
                                <span className="font-bold text-2xl text-green-600 ml-3">45</span>
                            </div>
                            <span className="text-sm font-semibold">Active Deliverymen</span>
                        </div>

                        {/* Newly Joined */}
                        <div className="flex flex-col p-4 border rounded-lg shadow-md hover:shadow-2xl h-24">
                            <div className="flex items-center mb-2">
                                <div className="relative w-10 h-10">
                                    <Image
                                        src="/modulesection/new-deliveryman.svg"
                                        alt="New Deliverymen"
                                        width={40}
                                        height={40}
                                        className="object-contain"
                                    />
                                </div>
                                <span className="font-bold text-2xl text-blue-600 ml-3">12</span>
                            </div>
                            <span className="text-sm font-semibold">Newly Joined Delievryman</span>
                        </div>

                        {/* Inactive */}
                        <div className="flex flex-col p-4 border rounded-lg shadow-md hover:shadow-2xl h-24">
                            <div className="flex items-center mb-2">
                                <div className="relative w-10 h-10">
                                    <Image
                                        src="/modulesection/inactive-deliveryman.svg"
                                        alt="Inactive Deliverymen"
                                        width={40}
                                        height={40}
                                        className="object-contain"
                                    />
                                </div>
                                <span className="font-bold text-2xl text-orange-600 ml-3">8</span>
                            </div>
                            <span className="text-sm font-semibold">Inactive Delievryman</span>
                        </div>

                        {/* Blocked */}
                        <div className="flex flex-col p-4 border rounded-lg shadow-md hover:shadow-2xl h-24">
                            <div className="flex items-center mb-2">
                                <div className="relative w-10 h-10">
                                    <Image
                                        src="/modulesection/blockedcustomer.svg"
                                        alt="Blocked Deliverymen"
                                        width={40}
                                        height={40}
                                        className="object-contain"
                                    />
                                </div>
                                <span className="font-bold text-2xl text-red-600 ml-3">3</span>
                            </div>
                            <span className="text-sm font-semibold">Blocked Deliveryman</span>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="mt-6 border rounded-lg">
                        <div className="flex items-center justify-between p-4 border-b">
                            <h3 className="text-lg font-semibold">Deliverymen Location</h3>
                            <div className="flex items-center space-x-2">
                                <div className="flex items-center">
                                    <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
                                    <span className="text-sm">Active</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                                    <span className="text-sm">Inactive</span>
                                </div>
                            </div>
                        </div>
                        <div className="h-[400px] w-full bg-gray-100 rounded-b-lg">
                            {/* Add your map component here */}
                            <div className="h-full w-full flex items-center justify-center text-gray-400">
                                Map Component Here
                            </div>
                        </div>
                    </div>
                </div>

                {/* Top Deliverymen - 30% width */}
                <div className="w-[30%] bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">Top Deliverymen</h3>
                        <FaMedal className="text-yellow-400" />
                    </div>
                    
                    <div className="space-y-4">
                        {/* Top Deliveryman Items */}
                        {[1, 2, 3,4,5,6,7,8,9].map((index) => (
                            <div key={index} className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="relative w-8 h-8 rounded-full overflow-hidden mr-3">
                                        <Image
                                            src={`/modulesection/deliverymanimage.png`}
                                            alt={`Top Deliveryman ${index}`}
                                            layout="fill"
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-semibold">John Doe {index}</p>
                                        <p className="text-sm text-gray-500">+9779812345678</p>
                                    </div>
                                </div>
                                <span className="text-sm font-bold p-2 bg-gray-100 text-teal-800"> Orders 156</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
