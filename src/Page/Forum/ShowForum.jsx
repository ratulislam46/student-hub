import React from 'react';
import UseAxiosSecure from '../../hook/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const ShowForum = () => {
    const axiosSecure = UseAxiosSecure();

    const getForum = axiosSecure.get('/all-forums');

    const { data: allForm = [], isloading } = useQuery({
        queryKey: ['allForum'],
        queryFn: async () => {
            const res = await axiosSecure.get('/all-forums')
            return res.data;
        }
    })
    // console.log(allForm);
    return (
        <div>
            <h1>sajfj</h1>
            {
                allForm?.map(signleForumm =>
                    <div key={signleForumm._id}
                        className='py-8 px-0 md:px-8 border'
                    >
                        <p>{signleForumm?.user}</p>
                        <h3>{signleForumm?.mmessage}</h3>
                    </div>
                )
            }
        </div>
    );
};

export default ShowForum;