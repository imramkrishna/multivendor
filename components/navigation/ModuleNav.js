"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaUsers,FaUserTie, FaBolt, FaBullhorn, FaChartLine, FaComments, FaPrescriptionBottleAlt, FaTruck, FaCog, FaList, FaCheck, FaBan, FaUndo, FaChevronDown, FaTachometerAlt, FaShoppingCart, FaExchangeAlt, FaAd, FaTicketAlt, FaBoxes, FaWallet, FaStore, FaStoreAlt, FaPlusCircle, FaClipboard, FaShoppingBasket, FaBox, FaClock, FaHourglassHalf, FaCogs, FaMapMarkerAlt, FaBuilding, FaPlug, FaShareAlt, FaFile, FaMegaphone, FaImages, FaImage, FaBell, FaLayerGroup, FaTags, FaRulerHorizontal, FaUserPlus, FaStar, FaMedal, FaEnvelope } from 'react-icons/fa'

// Add renderIcon helper function
const renderIcon = (iconPath, className) => (
    <img
        src={iconPath}
        alt="nav icon"
        className={`w-5 h-5 ${className}`}
    />
)
const renderLogoIcon = (iconPath, colorClass) => (
    <img
        src={iconPath}
        alt="Logo icon"
        className={`w-7 h-7 ${colorClass}`}
    />
)

const Navbar = () => {
    const [isOrdersOpen, setIsOrdersOpen] = useState(false)
    const [isCampaignsOpen, setIsCampaignsOpen] = useState(false);
    const [isAdsOpen, setIsAdsOpen] = useState(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isProductSetupOpen, setIsProductSetupOpen] = useState(false);

    return (
        <div>
            {/* Horizontal Navbar */}
            <nav className="fixed shadow top-0 w-full bg-white border-b border-gray-200 z-50">
                <div className="flex items-center h-16">
                    {/* Logo Section */}
                    <div className="w-64 h-16 flex items-center px-7">
                        {/* <Image
                            src="/adminLogo.jpeg"
                            alt="Logo"
                            layout="intrinsic"
                            width={123} // Adjust width as needed
                            height={100} // Adjust height as needed
                            className="cursor-pointer object-contain max-w-full h-auto"
                        /> */}
                        <p className='text-3xl font-bold'>Dami Chha</p>
                    </div>

                    {/* Center Navigation Items */}
                    <div className="flex items-center space-x-4 flex-1 justify-center">
                        <Link href="/users">
                            <span className="px-3 py-2 text-teal-700 cursor-pointer flex items-center">
                                {renderIcon("/icons/user.svg", "mr-2")}
                                Users
                            </span>
                        </Link>
                        <Link href="/reports">
                            <span className="px-3 py-2 text-teal-700 cursor-pointer flex items-center">
                                {renderIcon("/icons/transactionreport.svg", "mr-2")}
                                Transaction Reports
                            </span>
                        </Link>
                        <div className="relative group">
                            <span className="px-3 py-2 text-teal-700 cursor-pointer flex items-center">
                                <FaCog className="mr-2" />
                                Settings
                                <FaChevronDown className="ml-2 text-sm transition-transform group-hover:rotate-180" />
                            </span>

                            <div className="absolute left-0 mt-1 bg-white rounded-lg shadow-xl py-2 hidden group-hover:block transform transition-all duration-200 z-50 w-80">
                                <div className="px-4 py-2 h-28 bg-teal-700 text-white text-xs font-semibold">
                                    <p className='font-bold text-xl my-2'>Settings</p>
                                    <p className='text-sm font-normal'>Monitor your business general settings <br /> from here</p>

                                </div>

                                <Link href="/system-module">
                                    <span className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        <FaCogs className="mr-2" /> System Module Setup
                                    </span>
                                </Link>

                                <Link href="/zone-setup">
                                    <span className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        <FaMapMarkerAlt className="mr-2" /> Zone Setup
                                    </span>
                                </Link>

                                <Link href="/business-settings">
                                    <span className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        <FaBuilding className="mr-2" /> Business Settings
                                    </span>
                                </Link>

                                <Link href="/third-party">
                                    <span className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        <FaPlug className="mr-2" /> 3rd Party
                                    </span>
                                </Link>

                                <Link href="/social-media">
                                    <span className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        <FaShareAlt className="mr-2" /> Social Media
                                    </span>
                                </Link>

                                <Link href="/page-setup">
                                    <span className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        <FaFile className="mr-2" /> Page Setup
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <Link href="/dispatch">
                            <span className="px-3 py-2 text-teal-700 cursor-pointer flex items-center">
                                {renderIcon("/icons/dispatch.svg", "mr-2")} Dispatch Management
                            </span>
                        </Link>

                    </div>

                    {/* Right Navigation Items */}
                    <div className="flex items-center space-x-4">
                        <Link href="/chat">
                            <span className="px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer flex items-center">
                                <FaComments className="mr-2" /> Chat
                            </span>
                        </Link>
                        <div className="relative group">
                            <span className="px-3 py-5 bg-blue-800 text-white hover:bg-blue-800 cursor-pointer flex items-center w-48 justify-center">
                                {renderLogoIcon("/icons/module-icon.svg", "text-green-600 mx-2")}
                                Modules
                                <FaChevronDown className="ml-2 text-sm transition-transform group-hover:rotate-180" />
                            </span>

                            {/* Dropdown Menu */}
                            <div className="absolute right-0 mt-1 bg-white rounded-lg shadow-xl py-4 hidden group-hover:block transform transition-all duration-200 z-50 w-[500px]">
                                <div className="module-secction m-4 ">
                                    <p className='font-bold text-xl'>Modules Section</p>
                                    <p className='text-blue-600 my-3'>Select Module and monitor <p className='text-blue-600'>your business module wise</p></p>

                                </div>
                                <div className="flex flex-row items-center justify-evenly px-4 my-12">
                                    <Link href="/grocery/dashboard">
                                        <span className="flex flex-col items-center px-3 py-3 text-gray-700 hover:bg-blue-50 transition-colors rounded-lg w-36 border border-blue-200">
                                            {renderIcon("/icons/grocery.png", "text-green-600")}
                                            <div className="text-center">
                                                <p className="font-medium ">Grocery</p>
                                                <p className="text-xs text-gray-500">Manage grocery items</p>
                                            </div>
                                        </span>
                                    </Link>
                                    <Link href="/pharmacy/dashboard">
                                        <span className="flex flex-col items-center px-3 py-3 text-gray-700 hover:bg-blue-50 transition-colors rounded-lg w-36 border border-blue-200">
                                            {renderIcon("/icons/pharmacy.png", "text-blue-600")}
                                            <div className="text-center">
                                                <p className="font-medium">Pharmacy</p>
                                                <p className="text-xs text-gray-500">Manage medicine orders</p>
                                            </div>
                                        </span>
                                    </Link>
                                    <Link href="/food/dashboard">
                                        <span className="flex flex-col items-center px-3 py-5 text-gray-700 hover:bg-blue-50 transition-colors rounded-lg w-36 border border-blue-200">
                                            {renderIcon("/icons/pharmacy.png", "text-blue-600")}
                                            <div className="text-center">
                                                <p className="font-medium">Food</p>
                                                <p className="text-xs text-gray-500">Manage food orders</p>
                                            </div>
                                        </span>
                                    </Link>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Add margin-top to content below navbar */}
            <div className="mt-16 overflow-y-auto">
                {/* Vertical Navbar */}
                <nav className="fixed left-0 top-16 h-screen w-64 bg-teal-800 text-white p-4 overflow-y-auto">
                    {/* Search Bar */}
                    <div className="mb-6">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full bg-teal-800 border rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Menu Items */}
                    <div className="space-y-2">
                        <Link href="/dashboard">
                            <span className="flex items-center p-3 rounded-md hover:text-green-300 cursor-pointer">
                                <FaTachometerAlt className="mr-3" />
                                User Overview
                            </span>
                        </Link>
                        <p className='text-neutral-400 text-sm flex items-center'>

                            DELIVERY MANAGEMENT
                        </p>

                        <Link href="/vehicles-category">
                            <span className="flex items-center p-3 rounded-md hover:text-green-300 cursor-pointer">
                                <FaTruck className="mr-3" />
                                Vehicles Category
                            </span>
                        </Link>
                        <Link href="/add-delivery-man">
                            <span className="flex items-center p-3 rounded-md hover:text-green-300 cursor-pointer">
                                <FaUserPlus className="mr-3" />
                                Add Delivery Man
                            </span>
                        </Link>
                        <Link href="/new-delivery-man">
                            <span className="flex items-center p-3 rounded-md hover:text-green-300 cursor-pointer">
                                <FaUsers className="mr-3" />
                                New Delivery Man
                            </span>
                        </Link>
                        <Link href="/deliveryman-list">
                            <span className="flex items-center p-3 rounded-md hover:text-green-300 cursor-pointer">
                                <FaList className="mr-3" />
                                Deliveryman List
                            </span>
                        </Link>
                        <Link href="/reviews">
                            <span className="flex items-center p-3 rounded-md hover:text-green-300 cursor-pointer">
                                <FaStar className="mr-3" />
                                Reviews
                            </span>
                        </Link>
                        <p className='text-neutral-400 text-sm flex items-center'>

                            CUSTOMER MANAGEMENT
                        </p>

                        <Link href="/customers">
                            <span className="flex items-center p-3 rounded-md hover:text-green-300 cursor-pointer">
                                <FaUsers className=" mr-3" />
                                Customers
                            </span>
                        </Link>
                        <Link href="/customer-wallet">
                            <span className="flex items-center p-3 rounded-md hover:text-green-300 cursor-pointer">
                                <FaWallet className=" mr-3" />
                                Customer Wallet
                            </span>
                        </Link>
                        <Link href="/loyalty-points">
                            <span className="flex items-center p-3 rounded-md hover:text-green-300 cursor-pointer">
                                <FaMedal className=" mr-3" />
                                Customer Loyalty Points
                            </span>
                        </Link>
                        <Link href="/subscribed-mail">
                            <span className="flex items-center p-3 rounded-md hover:text-green-300 cursor-pointer">
                                <FaEnvelope className=" mr-3" />
                                Subscribed Mail List
                            </span>
                        </Link>
                        <Link href="/contact-messages">
                            <span className="flex items-center p-3 rounded-md hover:text-green-300 cursor-pointer">
                                <FaComments className=" mr-3" />
                                Contact Messages
                            </span>
                        </Link>
                        <p className='text-neutral-400 text-sm flex items-center'>

                            EMPLOYEE MANAGEMENT
                        </p>
                        <Link href="/employee-role">
                            <span className="flex items-center p-3 rounded-md hover:text-green-300 cursor-pointer">
                                <FaUserTie className=" mr-3" />
                                Employee Role
                            </span>
                        </Link>

                        <Link href="/employees">
                            <span className="flex items-center p-3 rounded-md hover:text-green-300 cursor-pointer">
                                <FaUsers className=" mr-3" />
                                Employees
                            </span>
                        </Link>










                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
