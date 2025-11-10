import React from 'react';
import { FaGraduationCap, FaBook, FaComments } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="relative min-h-screen flex items-center overflow-hidden">

            {/* Main content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text content */}
                    <div className="text-center lg:text-left space-y-6">
                        <div className="space-y-4">
                            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                                <span className="mr-2">🎓</span> Student & Teacher Toolkit
                            </div>
                            
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-base-content leading-tight">
                                Your Ultimate <span className="text-primary">Learning</span> Platform
                            </h1>
                            
                            <p className="text-lg md:text-xl text-base-content/70 max-w-2xl">
                                Connect, collaborate, and excel in your academic journey. A complete toolkit for students and educators to share knowledge, resources, and ideas.
                            </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                            <button className="px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Get Started
                            </button>
                            <button className="px-8 py-3 bg-base-100 text-base-content font-medium rounded-lg border border-base-300 hover:bg-base-200 transition-all duration-300 shadow hover:shadow-md">
                                Learn More
                            </button>
                        </div>
                        
                        {/* Stats */}
                        <div className="pt-8 flex flex-wrap justify-center lg:justify-start gap-8">
                            <div className="text-center">
                                <p className="text-3xl font-bold text-base-content">5000+</p>
                                <p className="text-base-content/70">Active Students</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-base-content">200+</p>
                                <p className="text-base-content/70">Expert Teachers</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-base-content">1000+</p>
                                <p className="text-base-content/70">Resources</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Image/Illustration */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            {/* Using an actual image instead of colored background */}
                            <img 
                                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                                alt="Student Learning Platform" 
                                className="w-full h-auto object-cover aspect-video"
                            />
                        </div>
                        
                        {/* Floating cards with React Icons */}
                        <div className="absolute -bottom-6 -left-6 bg-base-100 p-4 rounded-xl shadow-lg border border-base-300 w-48">
                            <div className="flex items-center">
                                <div className="bg-success/10 p-2 rounded-lg mr-3">
                                    <FaBook className="text-success w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-semibold text-base-content">Assignments</p>
                                    <p className="text-xs text-base-content/60">Share & Submit</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="absolute -top-6 -right-6 bg-base-100 p-4 rounded-xl shadow-lg border border-base-300 w-48">
                            <div className="flex items-center">
                                <div className="bg-info/10 p-2 rounded-lg mr-3">
                                    <FaComments className="text-info w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-semibold text-base-content">Discussion</p>
                                    <p className="text-xs text-base-content/60">Ask & Answer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;