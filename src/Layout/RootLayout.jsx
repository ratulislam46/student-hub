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
            <main className='min-h-[calc(100vh-150px)] space-y-12 container mx-auto'>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default RootLayout;