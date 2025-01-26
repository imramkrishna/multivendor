"use client"
import React, { useState } from 'react';
import { FaImage } from 'react-icons/fa';

const renderIcon = (iconPath, className) => (
  <img 
    src={iconPath} 
    alt="promotional icon" 
    className={`w-7 h-8 ${className}`}
  />
);

const Page = () => {
    const [bottomImagePreview, setBottomImagePreview] = useState(null);
    const [reviewedImagePreview, setReviewedImagePreview] = useState(null);

    const handleImageChange = (e, setPreview) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
        <h1 className='mt-3 text-xl font-bold flex items-center'>
          {renderIcon("/icons/otherpromotional.png", "mr-3")}
          Other Promotional Content Setup
        </h1>
        <div className="p-6 grid grid-cols-2 gap-6">
            
            {/* Bottom Section Banner */}
            <div className="bg-white rounded-xl shadow-sm p-6 border">
                <h2 className="text-xl font-semibold mb-6 flex items-center">
                    <FaImage className="mr-2" />
                    Bottom Section Banner
                </h2>
                <form className="space-y-4">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xl font-medium text-gray-700 mb-1">
                                Upload Banner
                            </label>

                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Banner Image
                            </label>
                            <div className="flex justify-center items-center  h-48 mb-4">
                                {bottomImagePreview ? (
                                    <img
                                        src={bottomImagePreview}
                                        alt="Preview"
                                        className="h-full w-auto object-contain"
                                    />
                                ) : (
                                    <div className="text-center">
                                        <img
                                            src="/icons/bannerimage.webp"
                                            alt="Upload"
                                            className="mx-auto  m-2 border-2 border-dashed border-gray-300 rounded-lg"
                                        />

                                    </div>
                                )}
                            </div>
                            <div className="banner-info w-full flex flex-col items-center justify-center mt-4">
                                <p className='text-xl font-medium text-gray-600'>Banner Image Ratio 4:1</p>
                                <p className='text-xs text-gray-500 opacity-60'>Image format : jpg, png, jpeg | Maximum Size: 2 MB</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end mt-4">
                        <button className="px-6 py-2 bg-teal-800 text-white rounded hover:bg-teal-700 transition-colors">
                            Submit
                        </button>
                    </div>
                </form>
            </div>

            {/* Best Reviewed Section Banner */}
            <div className="bg-white rounded-xl shadow-sm p-6 border">
                <h2 className="text-xl font-semibold mb-6 flex items-center">
                    <FaImage className="mr-2" />
                    Best Reviewed Section Banner
                </h2>
                <form className="space-y-4">
                    

                    <div className='flex flex-col justify-center items-center'>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                        <p className='text-xl my-2'>Upload Banner</p>
                        </label>
                        <div className="flex justify-center items-center border-2 border-dashed border-gray-300 rounded-lg h-64 w-36 mb-4">
                            {reviewedImagePreview ? (
                                <img
                                    src={reviewedImagePreview}
                                    alt="Preview"
                                    className="h-full w-auto object-contain"
                                />
                            ) : (
                                <div className="text-center">
                                    <img
                                        src="/icons/uploadimage.png"
                                        alt="Upload"
                                        className="mx-auto h-36 w-60"
                                    />
                                    
                                </div>
                            )}
                        </div>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageChange(e, setReviewedImagePreview)}
                            className="hidden"
                        />

                        <div className="banner-info w-full flex flex-col items-center justify-center mt-4">
                            <p className='text-xl font-medium text-gray-600'>Min Size for Better Resolution 235 x 375 px </p>
                            <p className='text-xs text-gray-500 opacity-60'>Image format : jpg, png, jpeg | Maximum Size: 2 MB</p>
                        </div>
                    </div>

                    <div className="flex justify-end mt-4">
                        <button className="px-6 py-2 bg-teal-800 text-white rounded-lg hover:bg-teal-700 transition-colors">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Page;
