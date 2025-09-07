import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div className='flex min-h-screen container mx-auto'>
            <div className='border w-fit'>
                <Navbar/>
            </div>
            <div className='border flex-1'>
                <Outlet/>
            </div>
        </div>
    );
};

export default RootLayout;