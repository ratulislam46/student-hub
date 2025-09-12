import React from 'react';
import UseAxiosSecure from '../../hook/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Skeleton from '../../Components/Loading/skeleton';
import Comment from './Comment';
import { Link } from 'react-router';

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
                    allForm?.map((signleForumm, index) =>
                        // show single question
                        <Link
                            to={`/single-forum/${signleForumm._id}`}
                            key={signleForumm._id}>
                            <div
                                className='py-8 px-6 bg-gradient-to-r from-green-300 to-green-200 hover:from-green-300 hover:to-green-400 rounded-md shadow-md'
                            >
                                <h3 className='font-semibold text-xl'>
                                    <span>{index + 1}. </span>
                                    {signleForumm?.message}
                                </h3>

                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default ShowForum;