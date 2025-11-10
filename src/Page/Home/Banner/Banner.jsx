import React from 'react';

const Banner = () => {
    return (
        <div className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background with gradient and animated elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
            
            {/* Animated background elements */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/2 w-60 h-60 bg-blue-300/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            
            {/* Main content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text content */}
                    <div className="text-center lg:text-left space-y-6">
                        <div className="space-y-4">
                            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                                <span className="mr-2">🎓</span> Student & Teacher Toolkit
                            </div>
                            
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Your Ultimate <span className="text-primary">Learning</span> Platform
                            </h1>
                            
                            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                                Connect, collaborate, and excel in your academic journey. A complete toolkit for students and educators to share knowledge, resources, and ideas.
                            </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                            <button className="px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Get Started
                            </button>
                            <button className="px-8 py-3 bg-white text-gray-900 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow hover:shadow-md">
                                Learn More
                            </button>
                        </div>
                        
                        {/* Stats */}
                        <div className="pt-8 flex flex-wrap justify-center lg:justify-start gap-8">
                            <div className="text-center">
                                <p className="text-3xl font-bold text-gray-900">5000+</p>
                                <p className="text-gray-600">Active Students</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-gray-900">200+</p>
                                <p className="text-gray-600">Expert Teachers</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-gray-900">1000+</p>
                                <p className="text-gray-600">Resources</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Image/Illustration */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <div className="bg-gradient-to-br from-primary to-secondary aspect-video rounded-2xl flex items-center justify-center">
                                <div className="text-center p-8">
                                    <div className="text-5xl mb-4">📚</div>
                                    <h3 className="text-2xl font-bold text-white">Student Hub Platform</h3>
                                    <p className="text-white/90 mt-2">Learn • Share • Collaborate</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Floating cards */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 w-48">
                            <div className="flex items-center">
                                <div className="bg-green-100 p-2 rounded-lg mr-3">
                                    <span className="text-green-600">📝</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Assignments</p>
                                    <p className="text-xs text-gray-500">Share & Submit</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 w-48">
                            <div className="flex items-center">
                                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                                    <span className="text-blue-600">💬</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Discussion</p>
                                    <p className="text-xs text-gray-500">Ask & Answer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Custom styles for animations */}
            <style jsx>{`
                @keyframes blob {
                    0% {
                        transform: translate(0px, 0px) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                    100% {
                        transform: translate(0px, 0px) scale(1);
                    }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </div>
    );
};

export default Banner;