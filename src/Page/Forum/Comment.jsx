import React from 'react';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';

const Comment = () => {
    const handleComment = (e) => {
        e.preventDefault();
        const comment = e.target.comment.value;
        console.log(comment);
        
    }
    return (
        <div>
            <form
                onSubmit={handleComment}
                className='flex gap-1 items-center'>
                <Input placeholder="Your opinion.." type="text" name="comment"/>
                <Button label="Post" size="w-sm" />
            </form>
        </div>
    );
};

export default Comment;