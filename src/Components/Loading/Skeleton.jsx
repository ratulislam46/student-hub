import React from 'react';

const Skeleton = () => {
    return (
        <div>
            <div role="status" className="nimate-pulse">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-[40%] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-[60%] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-[80%] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-[80%] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-[60%]"></div>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Skeleton;