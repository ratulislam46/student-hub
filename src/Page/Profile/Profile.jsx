import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Profile = () => {
    const {user} = use(AuthContext);
    return (
        <div>
            <h1>Profile</h1>
            <img src={user?.photoURL} alt="USER" />
            <p>Name: {user?.displayName || 'User'}</p>
            <p>Email: {user?.email}</p>
            <p>Created At: {user?.metadata?.createdAt}</p>
            <p>Last Login: {user?.metadata?.lastLoginAt}</p>
            <p>Phone Number: {user?.phoneNumber || "N/A"}</p>
            <p>UID: {user?.uid}</p>
        </div>
    );
};

export default Profile;