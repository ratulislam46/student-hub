import React, { use, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { FaUser, FaEnvelope, FaPhone, FaIdCard, FaCalendarAlt, FaClock, FaCopy, FaCheck } from 'react-icons/fa';

const Profile = () => {
    const {user} = use(AuthContext);
    const [copied, setCopied] = useState(false);
    
    // Format timestamp to readable date
    const formatDate = (timestamp) => {
        if (!timestamp) return 'N/A';
        const date = new Date(timestamp * 1000);
        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    };

    // Copy UID to clipboard
    const copyToClipboard = (text) => {
        if (text) {
            navigator.clipboard.writeText(text);
            setCopied(true);
            // Reset the copied state after 2 seconds
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        }
    };

    return (
        <div>
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* Profile Header */}
                    <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="avatar">
                                <div className="w-24 h-24 rounded-full ring-4 ring-white/30">
                                    <img 
                                        src={user?.photoURL || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} 
                                        alt="Profile" 
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="text-center md:text-left">
                                <h1 className="text-3xl font-bold">{user?.displayName || 'User'}</h1>
                                <p className="text-white/90 mt-1">Profile Information</p>
                            </div>
                        </div>
                    </div>

                    {/* Profile Details */}
                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name */}
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-primary/10 rounded-full text-primary">
                                        <FaUser />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Name</p>
                                        <p className="font-medium">{user?.displayName || 'User'}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-primary/10 rounded-full text-primary">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Email</p>
                                        <p className="font-medium">{user?.email || 'N/A'}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-primary/10 rounded-full text-primary">
                                        <FaPhone />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Phone</p>
                                        <p className="font-medium">{user?.phoneNumber || 'N/A'}</p>
                                    </div>
                                </div>
                            </div>

                            {/* UID with Copy Functionality */}
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-primary/10 rounded-full text-primary">
                                        <FaIdCard />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-500">User ID</p>
                                        <div className="flex items-center gap-2">
                                            <p className="font-medium truncate max-w-[160px]">{user?.uid || 'N/A'}</p>
                                            <button 
                                                onClick={() => copyToClipboard(user?.uid)}
                                                className={`p-1 rounded ${copied ? 'text-green-500 bg-green-50' : 'text-gray-500 hover:text-primary hover:bg-primary/10'}`}
                                                title={copied ? "Copied!" : "Copy to clipboard"}
                                            >
                                                {copied ? <FaCheck size={14} /> : <FaCopy size={14} />}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Created At */}
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-primary/10 rounded-full text-primary">
                                        <FaCalendarAlt />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Member Since</p>
                                        <p className="font-medium">{formatDate(user?.metadata?.createdAt) || 'N/A'}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Last Login */}
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-primary/10 rounded-full text-primary">
                                        <FaClock />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Last Login</p>
                                        <p className="font-medium">{formatDate(user?.metadata?.lastLoginAt) || 'N/A'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        {/* <div className="mt-8 flex flex-wrap gap-4 justify-center">
                            <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors shadow-md">
                                Edit Profile
                            </button>
                            <button className="px-6 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors shadow-md">
                                Change Password
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;