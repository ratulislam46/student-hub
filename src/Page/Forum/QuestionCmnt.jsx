import React from 'react';
import Loader from '../../Components/Loading/Loader';
import { CiWarning } from "react-icons/ci";

const QuestionCmnt = ({ ForumComment }) => {
    console.log(ForumComment);

    if (!ForumComment) {
        return <Loader />
    }

    if (!ForumComment?.Comment) {
        return <p className='text-2xl md:text-3xl lg:text-5xl text-center text-gray-500 mt-12 flex justify-center items-center gap-2'>
            <CiWarning className='text-yellow-500'/> No comments yet.
        </p>
    }

    return (
        <div>
            {ForumComment?.Comment?.map((cmnt, i) => (
                <div key={i}
                    className="p-4 shadow hover:shadow-md rounded my-3 bg-gradient-to-r from-orange-200 to-orange-100 hover:from-orange-100 hover:to-orange-200">
                    <p className='text-xl font-semibold'>{cmnt?.comment}</p>
                    <small>By: {cmnt?.user} </small>
                </div>
            ))}
        </div>
    );
};

export default QuestionCmnt;