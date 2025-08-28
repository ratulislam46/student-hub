import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const RootLayout = () => {
    return (
        <>
            <nav>
                <Navbar />
            </nav>
            <main className='border min-h-[calc(100vh-150px)]'>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default RootLayout;