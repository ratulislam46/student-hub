import React, { use } from 'react';
import Input from '../Components/Input/Input';
import Button from '../Components/Button/Button';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';
import GoogleSign from './GoogleSign';
import UseAxiosSecure from '../hook/UseAxiosSecure';

const SignUp = () => {
    const { SignUp, user } = use(AuthContext);
    const navigate = useNavigate();
    const axoiosSecure = UseAxiosSecure();

    const handleRegisterForm = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const currentClass = form.class.value;
        console.table(email, password, name, phone, currentClass)

        SignUp(email, password)
            .then(result => {
                console.log(result.user);

                // post userinfo in database
                const userInfo = {
                    user: user?.displayName || 'N/A',
                    email: user?.email,
                    role: 'Student',
                    create_at: new Date().toISOString(),
                    last_login: new Date().toISOString()
                }
                const userPostedData = axoiosSecure.post('/users', userInfo);
                console.log(userPostedData);

                // navigate homw page 
                navigate('/')
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='mt-20 container mx-auto'>
            <div className="max-w-lg mx-auto shadow-2xl rounded-md p-16">
                <h2 className='text-center font-semibold text-4xl pb-6'>Register</h2>
                <form onSubmit={handleRegisterForm}>
                    <Input type='email' name='email' placeholder='' label='Email address' />
                    <Input type='password' name='password' placeholder='' label='Password' />
                    <Input type='text' name='name' placeholder='' label='Full name' />
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <Input type='number' name='phone' placeholder='' label='Phone number' />
                        <Input type='text' name='class' placeholder='' label='Class name' />
                    </div>
                    <Button label='Register' size='full' />

                    {/* googleRegister  */}
                    <GoogleSign />
                </form>
                <p className='text-center text-gray-500'>Already have an account?
                    <Link
                        to='/sign-in'
                        className='text-blue-500 underline pl-1'>Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;