import React from 'react';
import UseAxiosSecure from '../../hook/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Skeleton from '../../Components/Loading/skeleton';
import Comment from './Comment';

const ShowForum = () => {
    const axiosSecure = UseAxiosSecure();

    const { data: allForm = [], isLoading } = useQuery({
        queryKey: ['allForum'],
        queryFn: async () => {
            const res = await axiosSecure.get('/all-forums')
            return res.data;
        }
    })

    // console.log(allForm);
    if (isLoading) {
        return <Skeleton />
    }
    return (
        <div>
            <div className='grid grid-cols-1 gap-4'>
                {
                    allForm?.map(signleForumm =>
                        <div key={signleForumm._id}
                            className='py-8 px-6 border border-gray-300 hover:border-green-300 rounded-md shadow-md lg:flex justify-between items-center'
                        >
                            <h3 className='font-semibold text-xl text-red-500'>{signleForumm?.message}</h3>

                            {/* Comment  */}
                            <Comment />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ShowForum;