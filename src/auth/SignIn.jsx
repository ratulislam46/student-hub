import React, { use } from 'react';
import Input from '../Components/Input/Input';
import Button from '../Components/Button/Button';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';
import GoogleSign from './GoogleSign';
import UseAxiosSecure from '../hook/UseAxiosSecure';

const SignIn = () => {
    const { SignIn, user } = use(AuthContext);
    const navigate = useNavigate();
    const axoiosSecure = UseAxiosSecure()

    const handleSignIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const sign_at = new Date().toLocaleDateString();
        console.log(email, password, sign_at);

        SignIn(email, password)
            .then(result => {
                console.log(result);

                // update user login data 
                const updateUserData = axoiosSecure.patch(`/users-last-login/${user?.email}`);
                console.log(updateUserData);

                navigate('/');
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='mt-20 container mx-auto'>
            <div className="max-w-lg mx-auto shadow-2xl rounded-md p-16">
                <h2 className='text-center font-semibold text-4xl pb-6'>Sign in</h2>
                <form onSubmit={handleSignIn}>
                    <Input type='email' name='email' placeholder='' label='Email address' />
                    <Input type='password' name='password' placeholder='' label='Password' />
                    <Button label='Sign in' size='full' />

                    {/* google login  */}
                    <GoogleSign />
                </form>
                <p className='text-gray-500 text-center'> Don't have an account?
                    <Link
                        to='/sign-up'
                        className='text-blue-500 underline pl-1'>Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;