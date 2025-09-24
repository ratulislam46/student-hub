import React from 'react';
import UseAxiosSecure from '../../hook/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../Components/Loading/Loader';
import QuizList from './QuizList';

const Quiz = () => {

    const axiosSecure = UseAxiosSecure();

    const { data: allQuesAndAns = [], isLoading } = useQuery({
        queryKey: ["all-question-answer"],
        queryFn: async () => {
            const res = await axiosSecure.get('/question-answer')
            return res.data;
        }
    })

    if (isLoading) return <Loader />
    // console.log(allQuesAndAns);
    return (
        <div>
            <QuizList allQuesAndAns={allQuesAndAns}></QuizList>
        </div>
    );
};

export default Quiz;