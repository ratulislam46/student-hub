import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Page/Home/Home/Home";
import Quiz from "../Page/Quiz/Quiz";
import Forum from "../Page/Forum/Forum";
import Profile from "../Page/Profile/Profile";
import Notice from "../Page/Notice/Notice";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/quiz',
                Component: Quiz
            },
            {
                path: '/forum',
                Component: Forum
            },
            {
                path: '/profile',
                Component: Profile
            },
            {
                path: '/notice',
                Component: Notice
            },
        ]
    },
    {
        path: '/sign-in',
        Component: SignIn
    },
    {
        path: '/sign-up',
        Component: SignUp
    }
]);