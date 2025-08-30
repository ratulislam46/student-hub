import React from 'react';
import Input from '../Components/Input/Input';
import Button from '../Components/Button/Button';

const SignIn = () => {

    const handleSignIn = () => {

    }
    return (
        <div className='mt-20 border container mx-auto'>

            <form class="max-w-md mx-auto">
                <Input type='email' name='email' placeholder='' label='Email address' />
                <Input type='password' name='password' placeholder='' label='Password' />
                <Input type='text' name='name' placeholder='' label='Full name' />
                <div class="grid md:grid-cols-2 md:gap-6">
                    <Input type='number' name='phone' placeholder='' label='Phone number' />
                    <Input type='text' name='class' placeholder='' label='Class name' />
                </div>

                <Button label='Sign in'/>
            </form>

        </div>
    );
};

export default SignIn;