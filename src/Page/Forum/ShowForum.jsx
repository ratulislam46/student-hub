import React from 'react';
import UseAxiosSecure from '../../hook/UseAxiosSecure';

const ShowForum = () => {
    const axiosSecure = UseAxiosSecure();

    const getForum = axiosSecure.get('/all-forums');
    // console.log(getForum);
    // console.log('sjdfsjjfajsfjkj')

    return (
        <div>
            <h1>sajfj</h1>
        </div>
    );
};

export default ShowForum;