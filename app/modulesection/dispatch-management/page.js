'use client'
import { FaTruck, FaUserClock, FaUserSlash, FaUserPlus, FaClipboard, FaCheckCircle, FaShippingFast } from 'react-icons/fa';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Image from 'next/image';

export default function DispatchOverview() {
    const deliveryLocations = [
        { lat: 23.8103, lng: 90.4125, name: "John Doe" },
        { lat: 23.8223, lng: 90.4265, name: "Jane Smith" },
        { lat: 23.8001, lng: 90.4087, name: "Mike Johnson" }
    ];

    const mapContainerStyle = {
        width: '100%',
        height: '300px'
    };

    const center = {
        lat: 23.8103,
        lng: 90.4125
    };

    return (
        <div className="p-4">
            <div className="flex items-center mb-6">
                <div className="relative w-12 h-12 rounded-full border mr-3">
                    <Image
                        src="/icons/users.svg"
                        alt="Dispatch Overview"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="flex flex-col">
                    <h2 className="text-2xl font-semibold">Dispatch Overview</h2>
                    <p className="text-sm text-gray-500">Monitor delivery status and locations</p>
                </div>
            </div>
            <div className="flex gap-6">
                {/* Deliveryman Stats */}
                <div className="w-2/3 bg-white p-6 rounded h-[300px]">
                    
                    <div className="grid grid-cols-2 gap-4">
                        {/* Active Deliverymen */}
                        <div className=" p-4 rounded-lg shadow hover:shadow-lg">
                            <div className="flex items-center">
                                <div className="p-3 bg-blue-100 rounded-full">
                                    <FaTruck className="text-blue-600 text-xl" />
                                </div>
                                <div className="ml-4">
                                <p className="text-2xl font-bold text-blue-600">25</p>
                                    <p className="text-sm text-gray-600">Active Delivery Man</p>
                                    
                                </div>
                            </div>
                        </div>

                        {/* Fully Booked */}
                        <div className=" p-4 rounded-lg shadow hover:shadow-lg">
                            <div className="flex items-center">
                                <div className="p-3 bg-yellow-100 rounded-full">
                                    <FaUserClock className="text-yellow-600 text-xl" />
                                </div>
                                <div className="ml-4">
                                <p className="text-2xl font-bold text-yellow-600">12</p>
                                    <p className="text-sm text-gray-600">Fully Booked</p>
                                    
                                </div>
                            </div>
                        </div>

                        {/* Inactive */}
                        <div className="p-4 rounded-lg shadow hover:shadow-lg">
                            <div className="flex items-center">
                                <div className="p-3 bg-red-100 rounded-full">
                                    <FaUserSlash className="text-red-600 text-xl" />
                                </div>
                                <div className="ml-4">
                                <p className="text-2xl font-bold text-red-600">5</p>
                                    <p className="text-sm text-gray-600">Inactive</p>
                                    
                                </div>
                            </div>
                        </div>

                        {/* Available to Assign */}
                        <div className="p-4 rounded-lg shadow hover:shadow-lg">
                            <div className="flex items-center">
                                <div className="p-3 bg-green-100 rounded-full">
                                    <FaUserPlus className="text-green-600 text-xl" />
                                </div>
                                <div className="ml-4">
                                <p className="text-2xl font-bold text-green-600">8</p>
                                    <p className="text-sm text-gray-600">Available to Assign</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Order Stats */}
                <div className="w-1/3 space-y-4 h-[300px]">
                    {/* Unassigned Orders */}
                    <div className="bg-white p-1.5 rounded-lg shadow mb-6">
                        <div className="flex items-center">
                            <div className="p-3 bg-purple-100 rounded-full">
                                <FaClipboard className="text-purple-600 text-xl" />
                            </div>
                            <div className="ml-4 flex flex-row justify-between w-full">
                                <p className="text-sm text-gray-600">Unassigned Orders</p>
                                <p className="text-2xl font-bold text-purple-600">15</p>
                            </div>
                        </div>
                    </div>

                    {/* Accepted by Delivery Man */}
                    <div className="bg-white p-4 rounded-lg shadow">
                        <div className="flex items-center">
                            <div className="p-3 bg-blue-100 rounded-full">
                                <FaCheckCircle className="text-blue-600 text-xl" />
                            </div>
                            <div className="ml-4 flex flex-row justify-between w-full">
                                <p className="text-sm text-gray-600">Accepted by Delivery Man</p>
                                <p className="text-2xl font-bold text-blue-600">32</p>
                            </div>
                        </div>
                    </div>

                    {/* Out for Delivery */}
                    <div className="bg-white p-4 rounded-lg shadow">
                        <div className="flex items-center">
                            <div className="p-3 bg-green-100 rounded-full">
                                <FaShippingFast className="text-green-600 text-xl" />
                            </div>
                            <div className="ml-4 flex flex-row justify-between w-full">
                                <p className="text-sm text-gray-600">Out for Delivery</p>
                                <p className="text-2xl font-bold text-green-600">28</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Active Deliverymen Location</h3>
                <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        zoom={13}
                        center={center}
                    >
                        {deliveryLocations.map((location, index) => (
                            <Marker
                                key={index}
                                position={{ lat: location.lat, lng: location.lng }}
                                title={location.name}
                            />
                        ))}
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    );
}
