import React from 'react';
import Input from '../Components/Input/Input';
import Button from '../Components/Button/Button';
import { Link } from 'react-router';

const SignIn = () => {

    const handleSignIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.email.value;
        const sign_at = new Date().toLocaleDateString();
        console.log(email, password, sign_at);
    }
    return (
        <div className='mt-20 container mx-auto'>
            <div className="max-w-lg mx-auto shadow-2xl rounded-md p-16">
                <h2 className='text-center font-semibold text-4xl pb-6'>Sign in</h2>
                <form onSubmit={handleSignIn}>
                    <Input type='email' name='email' placeholder='' label='Email address' />
                    <Input type='password' name='password' placeholder='' label='Password' />
                    <Button label='Sign in' size='full' />
                </form>
                <p className='py-2 pl-1 text-gray-500'> Don't have an account?
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