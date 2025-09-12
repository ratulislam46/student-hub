import React, { use } from 'react';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import UseAxiosSecure from '../../hook/UseAxiosSecure';
import { AuthContext } from '../../Context/AuthProvider';

const Comment = ({ id }) => {
    const { user } = use(AuthContext)
    const UseSecure = UseAxiosSecure();

    const handleComment = async (e) => {
        e.preventDefault();
        const comment = e.target.comment.value;
        console.log(comment);
        try {
            const res = await UseSecure.patch(`/question-answer/${id}`, {
                comment: comment,
                user: user?.email
            })
            console.log('Update Question', res.data);
        }
        catch (error) {
            console.log("Error posting comment", error);
        }
    }

    return (
        <div className='mt-4'>
            <form
                onSubmit={handleComment}
                className='flex gap-3 items-center'>
                <Input placeholder="Your opinion.." type="text" name="comment" />
                <Button label="Post" size="w-sm" />
            </form>
        </div>
    );
};

export default Comment;