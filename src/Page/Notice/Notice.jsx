import React from 'react';
import UseAxiosSecure from '../../hook/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { MdOutlineDateRange } from "react-icons/md";


const Notice = () => {

    const axiosSecure = UseAxiosSecure();

    const { data: allNotice = [], isLoading } = useQuery({
        queryKey: ['allNotice'],
        queryFn: async () => {
            const res = await axiosSecure.get('/all-notice')
            return res.data;
        }
    })
    console.log(allNotice);

    return (
        <div>
            <section className="py-8 px-4 md:px-8 bg-gray-50">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Notices</h2>
                <div className="grid gap-4 md:gap-6 sm:grid-cols-1 md:grid-cols-2 ">
                    {allNotice.map((notice) => (
                        <div
                            key={notice._id}
                            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className='flex justify-between'>
                                <h3 className="text-lg md:text-xl font-semibold mb-2">{notice.title}</h3>
                                <h3 className='flex gap-1 items-center'>
                                    <MdOutlineDateRange className='text-green-500' />
                                    {notice.create_at}
                                </h3>
                            </div>
                            <p className="text-sm text-gray-500 mb-2">{notice.date}</p>
                            <p className="text-gray-700">{notice.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Notice;