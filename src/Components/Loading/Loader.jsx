import React from 'react';
import {FadeLoader} from 'react-spinners'

const Loader = () => {
    return (
        <div className='flex justify-center items-center min-h-[60vh]'>
            <FadeLoader 
            color='green'/>
        </div>
    );
};

export default Loader;