import React from 'react';
import Stats from '../Stats/Stats';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <>
            <section className='border-b'>
                <Banner/>
            </section>
            <section className='border-b'>
                <Stats />
            </section>
            <section className='border-b'>
                <Contact/>
            </section>
        </>
    );
};

export default Home;