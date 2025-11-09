import React, { use } from 'react';
import Button from '../../Components/Button/Button';
import UseAxiosSecure from '../../hook/UseAxiosSecure';
import { AuthContext } from '../../Context/AuthProvider';
import Swal from 'sweetalert2';

const AddNotice = () => {
    const { user } = use(AuthContext)
    const axiosSecure = UseAxiosSecure();

    const handleAddNotice = async (e) => {
        e.preventDefault();
        console.log('add new notice');
        const form = e.target;
        const title = form.title.value;
        const category = form.category.value;
        const description = form.description.value;
        console.log(title, category, description);

        // save new notice in database 
        const noticeData = {
            post_by: user?.email,
            title: title,
            category: category,
            description: description,
            create_at: new Date().toISOString()
        }
        const addNewNotice = await axiosSecure.post('/add-notice', noticeData);
        console.log(addNewNotice.data);
        if (addNewNotice?.data?.insertedId) {
            Swal.fire({
                title: 'Notice pusblished successfully!',
                icon: "success",
                draggable: true
            })
        }
    }

    return (
        <div>
            <div className="max-w-lg mx-auto shadow-2xl rounded-md p-16">
                <h2 className='text-center font-semibold text-4xl pb-6'>Notice</h2>
                <form onSubmit={handleAddNotice} className='space-y-2'>
                    {/* Notice Title  */}
                    <label className="mb-2 text-sm font-medium">Notice Title</label>
                    <input type="text" name='title' className="bg-gray-50 border border-gray-300 text-sm rounded-lg w-full p-3" placeholder="Notice Title" required />
                    {/* Notice Category  */}
                    <label className="mb-2 text-sm font-medium">Category</label>
                    <input type="text" name='category' className="bg-gray-50 border border-gray-300 text-sm rounded-lg w-full p-3" placeholder="Category" required />

                    {/* Notice photo */}
                    {/* <label className="mb-2 text-sm font-medium">Upload file</label>
                    <input className="w-full text-sm border border-gray-300 rounded-lg cursor-pointer p-2" type="file" /> */}

                    {/* Notice Description */}
                    <label className="mb-2 text-sm font-medium">Notice Description</label>
                    <textarea rows="4" name='description' className="p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300" placeholder="Write your thoughts here..."></textarea>

                    <Button label='Add New Notice' size='full' />
                </form>
            </div>
        </div>
    );
};

export default AddNotice;