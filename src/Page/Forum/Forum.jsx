import React, { use } from 'react';
import Button from '../../Components/Button/Button';
import { AuthContext } from '../../Context/AuthProvider';
import UseAxiosSecure from '../../hook/UseAxiosSecure';

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
        <div>
            <form onSubmit={handleAddForum}>
                <label>Share Your Questions</label>
                <div className="flex items-center px-1 md:px-3 py-4 rounded-lg bg-gray-200">

                    <textarea rows="3"
                        name='message'
                        className=" mx-4 p-2.5 w-full text-sm bg-white rounded-lg" placeholder="Your message..."></textarea>

                    <Button label="Post" size="w-full" />

                </div>
            </form>

        </div>
    );
};

export default Forum;