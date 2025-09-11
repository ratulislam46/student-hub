import React from 'react';

const Button = ({ label, size }) => {

    const btnSize = {
        full: "w-full px-5 py-2.5",
        sm: "px-3 py-1.5 text-xs",
        lg: "px-7 py-3 text-base",
        default: "px-5 py-2.5 text-sm",
    }

    return (
        <button
            type="submit"
            className={`text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer
            ${btnSize[size]}`}>
            {label}
        </button>
    );
};

export default Button;