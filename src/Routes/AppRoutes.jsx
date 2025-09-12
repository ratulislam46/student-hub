import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Page/Home/Home/Home";
import Quiz from "../Page/Quiz/Quiz";
import Forum from "../Page/Forum/Forum";
import Profile from "../Page/Profile/Profile";
import Notice from "../Page/Notice/Notice";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import AddNotice from "../Page/Notice/AddNotice";
import Routine from "../Page/Routine/Routine";
import SignleForum from "../Page/Forum/SignleForum";


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
                path: '/single-forum/:id',
                Component: SignleForum
            },
            {
                path: '/profile',
                Component: Profile
            },
            {
                path: '/notice',
                Component: Notice
            },
            {
                path: '/add-notice',
                Component: AddNotice
            },
            {
                path: '/routine',
                Component: Routine
            }
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