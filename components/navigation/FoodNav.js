"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaUsers,FaBolt,FaBullhorn, FaChartLine, FaComments, FaPrescriptionBottleAlt, FaTruck, FaCog, FaList, FaCheck, FaBan, FaUndo, FaChevronDown, FaTachometerAlt, FaShoppingCart, FaExchangeAlt, FaAd, FaTicketAlt, FaBoxes, FaWallet, FaStore, FaStoreAlt, FaPlusCircle, FaClipboard, FaShoppingBasket, FaBox, FaClock, FaHourglassHalf, FaCogs, FaMapMarkerAlt, FaBuilding, FaPlug, FaShareAlt, FaFile, FaMegaphone, FaImages, FaImage, FaBell, FaLayerGroup, FaTags, FaRulerHorizontal } from 'react-icons/fa'

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
      alt="nav icon" 
      className={`w-5 h-5 ${colorClass}`}
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
                        <Link href="/modulesection/user-overview">
                            <span className="px-3 py-2 text-teal-700 cursor-pointer flex items-center">
                                {renderIcon("/icons/user.svg", "mr-2")}
                                Users
                            </span>
                        </Link>
                        <Link href="/modulesection/transactionreports">
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
                        <Link href="/modulesection/chat">
                            <span className="px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer flex items-center">
                                <FaComments className="mr-2" /> Chat
                            </span>
                        </Link>
                        <div className="relative group">
                            <span className="px-3 py-5 bg-blue-800 text-white hover:bg-blue-800 cursor-pointer flex items-center w-48 justify-center">
                                {renderLogoIcon("/food.png", "text-green-600 mx-2")}
                                Food
                                <FaChevronDown className="ml-2 text-sm transition-transform group-hover:rotate-180" />
                            </span>

                            {/* Dropdown Menu */}
                            <div className="absolute right-0 mt-1 bg-white rounded-lg shadow-xl py-4 hidden group-hover:block transform transition-all duration-200 z-50 w-[500px]">
                                <div className="module-section m-4 ">
                                <p className='font-bold text-xl'>Modules Section</p>
                                <p className='text-blue-600 my-3'>Select Module and monitor <p className='text-blue-600'>your business module wise</p></p>
                                
                                </div>
                                <div className="flex flex-row items-center justify-evenly px-4 my-12">
                                <Link href="/grocery/dashboard">
                                        <span className="flex flex-col items-center px-3 py-3 text-gray-700 hover:bg-blue-50 transition-colors rounded-lg w-36 border border-blue-200">
                                            {renderIcon("/grocery.png", "text-green-600")}
                                            <div className="text-center">
                                                <p className="font-medium ">Grocery</p>
                                                <p className="text-xs text-gray-500">Manage Food items</p>
                                            </div>
                                        </span>
                                    </Link>
                                    <Link href="/pharmacy/dashboard">
                                        <span className="flex flex-col items-center px-3 py-3 text-gray-700 hover:bg-blue-50 transition-colors rounded-lg w-36 border border-blue-200">
                                            {renderIcon("/pharmacy.png", "text-blue-600")}
                                            <div className="text-center">
                                                <p className="font-medium">Pharmacy</p>
                                                <p className="text-xs text-gray-500">Manage medicine orders</p>
                                            </div>
                                        </span>
                                    </Link>
                                    <Link href="/food/dashboard">
                                        <span className="flex flex-col items-center px-3 py-3 text-gray-700 hover:bg-blue-50 transition-colors rounded-lg w-36 border border-blue-200">
                                            {renderIcon("/food.png", "text-blue-600")}
                                            <div className="text-center">
                                                <p className="font-medium">Food</p>
                                                <p className="text-xs text-gray-500">Manage medicine orders</p>
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
                        <Link href="/food/dashboard">
                            <span className="flex items-center p-3 rounded-md hover:text-green-300 cursor-pointer">
                                <FaTachometerAlt className="mr-3" />
                                Dashboard
                            </span>
                        </Link>

                        <p className='text-neutral-400 text-sm flex items-center'>

                            POS SECTION
                        </p>

                        <Link href="/food/new-sale">
                            <span className="flex items-center p-3 rounded-md hover:text-green-300 cursor-pointer">
                                <FaShoppingCart className="mr-3" />
                                New Sale
                            </span>
                        </Link>

                        <p className='text-neutral-400 text-sm flex items-center'>

                            ORDERS MANAGEMENT
                        </p>

                        <div>
                            <button
                                onClick={() => setIsOrdersOpen(!isOrdersOpen)}
                                className="w-full flex justify-between items-center p-3 rounded-md hover:text-green-300 cursor-pointer"
                            >
                                <div className="flex items-center">
                                    <FaClipboard className="mr-3" />
                                    <span>Orders</span>
                                </div>
                                <FaChevronDown className={`transform transition-transform ${isOrdersOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isOrdersOpen && (
                                <div className="ml-4 mt-2 space-y-2">
                                    <Link href="/food/orders-management/all">
                                        <span className="flex items-center p-2 text-sm rounded-md hover:text-green-300">
                                            <span className="mr-2 text-blue-300">•</span>
                                            All
                                        </span>
                                    </Link>
                                    <Link href="/food/orders-management/scheduledorders">
                                        <span className="flex items-center p-2 text-sm rounded-md hover:text-green-300">
                                            <span className="mr-2 text-blue-300">•</span>
                                            Scheduled
                                        </span>
                                    </Link>
                                    <Link href="/food/orders-management/pendingorders">
                                        <span className="flex items-center p-2 text-sm rounded-md hover:text-green-300">
                                            <span className="mr-2 text-blue-300">•</span>
                                            Pending
                                        </span>
                                    </Link>
                                    <Link href="/food/orders-management/acceptedorders">
                                        <span className="flex items-center p-2 text-sm rounded-md hover:text-green-300">
                                            <span className="mr-2 text-blue-300 ">•</span>
                                            Accepted
                                        </span>
                                    </Link>
                                    <Link href="/food/orders-management/processingorders">
                                        <span className="flex items-center p-2 text-sm rounded-md hover:text-green-300">
                                            <span className="mr-2 text-blue-300">•</span>
                                            Processing
                                        </span>
                                    </Link>
                                    <Link href="/food/orders-management/onthewayorders">
                                        <span className="flex items-center p-2 text-sm rounded-md hover:text-green-300">
                                            <span className="mr-2 text-blue-300">•</span>
                                            Order On The way
                                        </span>
                                    </Link>
                                    <Link href="/food/orders-management/completedorders">
                                        <span className="flex items-center p-2 text-sm rounded-md hover:text-green-300">
                                            <span className="mr-2 text-blue-300 ">•</span>
                                            Delivered
                                        </span>
                                    </Link>
                                    <Link href="/food/orders-management/cancelledorders">
                                        <span className="flex items-center p-2 text-sm rounded-md hover:text-green-300">
                                            <span className="mr-2 text-blue-300">•</span>
                                            Canceled
                                        </span>
                                    </Link>
                                    <Link href="/food/orders-management/paymentfailedorders">
                                        <span className="flex items-center p-2 text-sm rounded-md hover:text-green-300">
                                            <span className="mr-2 text-blue-300">•</span>
                                            Payment Failed
                                        </span>
                                    </Link>
                                    <Link href="/food/orders-management/refundorders">
                                        <span className="flex items-center p-2 text-sm rounded-md hover:text-green-300">
                                            <span className="mr-2 text-blue-300">•</span>
                                            Refunded
                                        </span>
                                    </Link>
                                    <Link href="/food/orders-management/refundorders">
                                        <span className="flex items-center p-2 text-sm rounded-md hover:text-green-300">
                                            <span className="mr-2 text-blue-300">•</span>
                                            Offline Payments
                                        </span>
                                    </Link>
                                    
                                    

                                </div>
                            )}
                        </div>
                        <Link href="/food/orders-management/refunds">
                            <span className="flex items-center p-3 rounded-md hover:text-green-300 cursor-pointer">
                                <FaExchangeAlt className="mr-3" />
                                Order Refunds
                            </span>
                        </Link>
                        <Link href="/food/orders-management/flashsale">
                            <span className="flex items-center p-3 rounded-md hover:text-green-300 cursor-pointer">
                                <FaBolt className="mr-3" />
                                Flash Sale
                            </span>
                        </Link>
                        <p className='text-neutral-400 text-sm flex items-center'>

                            PROMOTION MANAGEMENT
                        </p>
                        <div>
                            <button
                                onClick={() => setIsCampaignsOpen(!isCampaignsOpen)}
                                className="w-full flex justify-between items-center p-3 rounded-md hover:text-green-300 cursor-pointer"
                            >
                                <div className="flex items-center">
                                    <FaBullhorn className="mr-3" />
                                    <span>Campaigns</span>
                                </div>
                                <FaChevronDown className={`transform transition-transform ${isCampaignsOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isCampaignsOpen && (
                                <div className="ml-4 mt-2 space-y-2">
                                    <Link href="/food/promotion-management/basic-campaigns">
                                        <span className="flex items-center p-2 text-sm rounded-md hover:text-green-300">
                                            <span className="mr-2 text-blue-300">•</span>
                                            Basic Campaigns
                                        </span>
                                    </Link>
                                    <Link href="/food/promotion-management/item-campaigns">
                                        <span className="flex items-center p-2 text-sm rounded-md hover:text-green-300">
                                            <span className="mr-2 text-blue-300">•</span>
                                            Item Campaigns
                                        </span>
                                    </Link>
                                </div>
                            )}
                        </div>
                        <Link href="/food/promotion-management/banners">
                            <span className="flex items-center p-3 rounded-md hover:text-green-300 cursor-pointer">
                                <FaImages className="mr-3" />
                                Banners
                            </span>
                        </Link>
                        <Link href="/food/promotion-management/other-banners">
                            <span className="flex items-center p-3 rounded-md hover:text-green-300 cursor-pointer">
                                <FaImage className="mr-3" />
                                Other Banners
                            </span>
                        </Link>
                        <Link href="/food/promotion-management/coupons">
                            <span className="flex items-center p-3 rounded-md hover:text-green-300 cursor-pointer">
                                <FaTicketAlt className="mr-3" />
                                Coupons
                            </span>
                        </Link>
                        <Link href="/food/promotion-management/cashback">
                            <span className="flex items-center p-3 rounded-md hover:text-green-300 cursor-pointer">
                                <FaWallet className="mr-3" />
                                Cashback
                            </span>
                        </Link>
                        <Link href="/food/promotion-management/push-notifications">
                            <span className="flex items-center p-3 rounded-md hover:text-green-300 cursor-pointer">
                                <FaBell className="mr-3" />
                                Push Notification
                            </span>
                        </Link>
                        <div>
                            <button
                                onClick={() => setIsAdsOpen(!isAdsOpen)}
                                className="w-full flex justify-between items-center p-3 rounded-md hover:text-green-300 cursor-pointer"
                            >
                                <div className="flex items-center">
                                    <FaAd className="mr-3" />
                                    <span>Advertisement</span>
                                </div>
                                <FaChevronDown className={`transform transition-transform ${isAdsOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isAdsOpen && (
                                <div className="ml-4 mt-2 space-y-2">
                                    <Link href="/food/promotion-management/newad">
                                        <span className="flex items-center p-2 text-sm rounded-md hover:text-green-300">
                                            <span className="mr-2 text-blue-300">•</span>
                                            New Advertisement
                                        </span>
                                    </Link>
                                    <Link href="/food/promotion-management/adrequests">
                                        <span className="flex items-center p-2 text-sm rounded-md hover:text-green-300">
                                            <span className="mr-2 text-blue-300">•</span>
                                            Ad Requests
                                        </span>
                                    </Link>
                                    <Link href="/food/promotion-management/adslist">
                                        <span className="flex items-center p-2 text-sm rounded-md hover:text-green-300">
                                            <span className="mr-2 text-blue-300">•</span>
                                            Ads List
                                        </span>
                                    </Link>
                                </div>
                            )}
                        </div>
                        <p className='text-neutral-400 text-sm flex items-center'>

                            PRODUCT MANAGEMENT
                        </p>
                        <div>
                            <button
                                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                                className="w-full flex justify-between items-center p-3 rounded-md hover:text-green-300 cursor-pointer"
                            >
                                <div className="flex items-center">
                                    <FaLayerGroup className="mr-3" />
                                    <span>Categories</span>
                                </div>
                                <FaChevronDown className={`transform transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isCategoryOpen && (
                                <div className="ml-4 mt-2 space-y-2">
                                    <Link href="/food/product-management/category">
                                        <span className="flex items-center p-2 text-sm rounded-md hover:text-green-300">
                                            <span className="mr-2 text-blue-300">•</span>
                                            Category
                                        </span>
                                    </Link>
                                    <Link href="/food/product-management/sub-category">
                                        <span className="flex items-center p-2 text-sm rounded-md hover:text-green-300">
                                            <span className="mr-2 text-blue-300">•</span>
                                            Sub Category
                                        </span>
                                    </Link>
                                    <Link href="/food/product-management/bulk-import">
                                        <span className="flex items-center p-2 text-sm rounded-md hover:text-green-300">
                                            <span className="mr-2 text-blue-300">•</span>
                                            Bulk Import
                                        </span>
                                    </Link>
                                    <Link href="/food/product-management/bulk-export">
                                        <span className="flex items-center p-2 text-sm rounded-md hover:text-green-300">
                                            <span className="mr-2 text-blue-300">•</span>
                                            Bulk Export
                                        </span>
                                    </Link>
                                </div>
                            )}
                        </div>
                        <Link href="/food/product-management/attributes">
                            <span className="flex items-center p-3 rounded-md hover:text-green-300 cursor-pointer">
                                <FaTags className="mr-3 " />
                                Attributes
                            </span>
                        </Link>
                        <Link href="/food/product-management/units">
                            <span className="flex items-center p-3 rounded-md hover:text-green-300 cursor-pointer">
                                <FaRulerHorizontal className="mr-3 " />
                                Units
                            </span>
                        </Link>
                        <div>
                            <button
                                onClick={() => setIsProductSetupOpen(!isProductSetupOpen)}
                                className="w-full flex justify-between items-center p-3 rounded-md hover:text-green-300 cursor-pointer"
                            >
                                <div className="flex items-center">
                                    <FaCog className="mr-3" />
                                    <span>Product Setup</span>
                                </div>
                                <FaChevronDown className={`transform transition-transform ${isProductSetupOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isProductSetupOpen && (
                                <div className="ml-4 mt-2 space-y-2">
                                    <Link href="/product/add">
                                        <span className="flex items-center p-2 text-sm rounded-md hover:text-green-300">
                                            <span className="mr-2 text-blue-300">•</span>
                                            Add New
                                        </span>
                                    </Link>
                                    <Link href="/product/list">
                                        <span className="flex items-center p-2 text-sm rounded-md hover:text-green-300">
                                            <span className="mr-2 text-blue-300">•</span>
                                            List
                                        </span>
                                    </Link>
                                    <Link href="/product/low-stock">
                                        <span className="flex items-center p-2 text-sm rounded-md hover:text-green-300">
                                            <span className="mr-2 text-blue-300">•</span>
                                            Low Stock List
                                        </span>
                                    </Link>
                                    <Link href="/product/gallery">
                                        <span className="flex items-center p-2 text-sm rounded-md hover:text-green-300">
                                            <span className="mr-2 text-blue-300">•</span>
                                            Product Gallery
                                        </span>
                                    </Link>
                                    <Link href="/product/requests">
                                        <span className="flex items-center p-2 text-sm rounded-md hover:text-green-300">
                                            <span className="mr-2 text-blue-300">•</span>
                                            New Item Request
                                        </span>
                                    </Link>
                                    <Link href="/product/reviews">
                                        <span className="flex items-center p-2 text-sm rounded-md hover:text-green-300">
                                            <span className="mr-2 text-blue-300">•</span>
                                            Review
                                        </span>
                                    </Link>
                                    <Link href="/product/bulk-import">
                                        <span className="flex items-center p-2 text-sm rounded-md hover:text-green-300">
                                            <span className="mr-2 text-blue-300">•</span>
                                            Bulk Import
                                        </span>
                                    </Link>
                                    <Link href="/product/bulk-export">
                                        <span className="flex items-center p-2 text-sm rounded-md hover:text-green-300">
                                            <span className="mr-2 text-blue-300">•</span>
                                            Bulk Export
                                        </span>
                                    </Link>
                                </div>
                            )}
                        </div>
                        
                        
                        
                        <p className='text-neutral-400 text-sm flex items-center'>

                            STORES MANAGEMENT
                        </p>
                        <Link href="/storeslist">
                            <span className="flex items-center p-3 rounded-md hover:text-green-300 cursor-pointer">
                                <FaStoreAlt className="mr-3" />
                                New Stores
                            </span>
                        </Link>
                        <Link href="/addstores">
                            <span className="flex items-center p-3 rounded-md hover:text-green-300 cursor-pointer">
                                <FaPlusCircle className="mr-3" />
                                Add Store
                            </span>
                        </Link>
                        <Link href="/storeslist">
                            <span className="flex items-center p-3 rounded-md hover:text-green-300 cursor-pointer">
                                <FaStoreAlt className="mr-3" />
                                Stores List
                            </span>
                        </Link>
                        <Link href="/addstores">
                            <span className="flex items-center p-3 rounded-md hover:text-green-300 cursor-pointer">
                                <FaPlusCircle className="mr-3" />
                                Recommended Stores
                            </span>
                        </Link>
                        <Link href="/addstores">
                            <span className="flex items-center p-3 rounded-md hover:text-green-300 cursor-pointer">
                                <FaPlusCircle className="mr-3" />
                                Bulk Import
                            </span>
                        </Link>
                        <Link href="/addstores">
                            <span className="flex items-center p-3 rounded-md hover:text-green-300 cursor-pointer">
                                <FaPlusCircle className="mr-3" />
                                Bulk Export
                            </span>
                        </Link>
                        <span className='p-14'></span>
                        
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
