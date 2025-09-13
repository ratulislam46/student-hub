import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import UseAxiosSecure from '../../hook/UseAxiosSecure';
import Comment from './Comment';
import Loader from '../../Components/Loading/Loader';
import QuestionCmnt from './QuestionCmnt';

const SignleForum = () => {
    const { id } = useParams();
    const UseSecure = UseAxiosSecure();

    const { data: SignleForumInfo = [], isLoading } = useQuery({
        queryKey: ["single-forum-details"],
        queryFn: async () => {
            const res = await UseSecure.get(`/single-forum/${id}`)
            return res.data;
        }
    })


    const { data: ForumComment = [] } = useQuery({
        queryKey: ["single-forum-details"],
        queryFn: async () => {
            const res = await UseSecure.get(`/single-forum/${id}`)
            return res.data;
        }
    })
    
    if (isLoading) return <Loader />

    return (
        <div>
            <div
                className='py-8 px-6 bg-gradient-to-r from-green-300 to-green-200 hover:from-green-300 hover:to-green-400 rounded-md shadow-md'
            >
                <h3 className='font-semibold text-xl'>{SignleForumInfo?.message}</h3>

                {/* Comment  */}
                <Comment id={id} />
            </div>

            {/* comment list  */}
            <div>
                <QuestionCmnt ForumComment={ForumComment} />
            </div>
        </div>
    );
};

export default SignleForum;