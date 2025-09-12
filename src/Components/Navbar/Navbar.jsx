import { Link } from 'react-router';
import SmalDeviceNavbar from './SmalDeviceNavbar';
import { FaHome, FaUserCircle, FaNewspaper, FaPlus } from "react-icons/fa";
import { MdQuiz, MdForum, MdLogin } from "react-icons/md";
import { VscSaveAs } from "react-icons/vsc";
import { AiFillAppstore } from "react-icons/ai";



const Navbar = () => {

    return (
        <div>
            <div className='hidden lg:block border min-h-screen bg-gray-800'>
                <div className="p-6 overflow-y-auto">
                    <h5 className="text-base font-semibold text-gray-500 uppercase">Menu</h5>

                    <div className="py-4 overflow-y-auto">
                        <ul className="space-y-2 font-medium">
                            {/* Home  */}
                            <li className='nav-link'>
                                <FaHome size={24} />
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            {/* Quiz  */}
                            <li className='nav-link'>
                                <MdQuiz size={24} />
                                <Link to="/quiz">
                                    Quiz
                                </Link>
                            </li>
                            {/* Forum  */}
                            <li className='nav-link'>
                                <MdForum size={24} />
                                <Link to="/forum">
                                    Forum
                                </Link>
                            </li>
                            {/* Profile  */}
                            <li className='nav-link'>
                                <FaUserCircle size={24} />
                                <Link
                                    to="/profile"
                                >
                                    Profile
                                </Link>
                            </li>
                            {/* Notice  */}
                            <li className='nav-link'>
                                <FaNewspaper size={24} />
                                <Link to="/notice">
                                    Notice
                                </Link>
                            </li>
                            {/* Add Notice */}
                            <li className='nav-link'>
                                <FaPlus size={24} />
                                <Link to="/add-notice">
                                    Add Notice
                                </Link>
                            </li>
                            {/* Routine */}
                            <li className='nav-link'>
                                <AiFillAppstore size={24} />
                                <Link to="/routine">
                                    Routine
                                </Link>
                            </li>
                            {/* Sign in */}
                            <li className='nav-link'>
                                <MdLogin size={24} />
                                <Link to="/sign-in">
                                    Sign in
                                </Link>
                            </li>
                            {/* Sign up */}
                            <li className='nav-link'>
                                <VscSaveAs size={24} />
                                <Link to="/sign-up">
                                    Sign up
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='lg:hidden'>
                <SmalDeviceNavbar />
            </div>
        </div>

    );
};

export default Navbar;