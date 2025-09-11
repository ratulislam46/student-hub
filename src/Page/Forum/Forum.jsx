import React, { use } from 'react';
import Button from '../../Components/Button/Button';
import { AuthContext } from '../../Context/AuthProvider';
import UseAxiosSecure from '../../hook/UseAxiosSecure';
import ShowForum from './ShowForum';

const Forum = () => {
    const { user } = use(AuthContext);
    const axiosSecure = UseAxiosSecure();

    const handleAddForum = async (e) => {
        e.preventDefault();
        const form = e.target;
        const message = form.message.value;

        // save form in database 
        const forumData = {
            user: user?.email,
            message: message,
            create_at: new Date().toISOString()
        }
        const addForum = await axiosSecure.post('/add-forum', forumData)
        console.log(addForum.data);
    }

    return (
        <div className='mx-1 md:mx-0'>
            <form onSubmit={handleAddForum}>
                <div className="flex items-center px-1 md:px-3 py-10 rounded-lg bg-gradient-to-r from-orange-200 to-orange-100 my-6">
                    <textarea rows="3"
                        name='message'
                        className=" mx-4 p-2.5 w-full text-sm bg-gradient-to-r from-orange-100 to-orange-50 rounded-lg"
                        placeholder="Your message..." required></textarea>
                    <Button label="Post" size="w-full" />
                </div>
            </form>
            <div>
                <ShowForum />
            </div>
        </div>
    );
};

export default Forum;