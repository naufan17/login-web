import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
    title?: string;
    login?: boolean;
    logout?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, login, logout }) => {
    return (
        <div className="relative bg-blue-800">
            <div className="absolute inset-x-0 bottom-0">
                <svg viewBox="0 0 224 12" fill="currentColor" className="w-full -mb-1 text-white" preserveAspectRatio="none">
                    <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
                </svg>
            </div>
            <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 md:py-20">
                {title && (
                    <div className="relative text-center">
                        <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-4xl">
                            {title}
                        </h2>
                    </div>
                )}
                {login && (
                    <>
                        <div className="relative text-center py-4">
                            <div className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-white rounded-full hover:scale-110">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="currentColor"
                                >
                                    <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="relative text-center py-4">
                            <Link
                                to={'/login'}
                                className="inline-flex items-center justify-center mx-auto h-12 px-6 font-semibold font-sans text-blue-800 text-base md:text-lg rounded-xl bg-white hover:bg-blue-200"        
                            >
                                Login
                            </Link>
                        </div>
                    </>
                )}
                {logout && (
                    <>
                        <div className="relative text-center py-4">
                            <div className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-white rounded-full hover:scale-110">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="currentColor"
                                >
                                    <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="relative text-center py-4">
                            <Link
                                to={'/logout'}
                                className="inline-flex items-center justify-center mx-auto h-12 px-6 font-semibold font-sans text-blue-800 text-base md:text-lg rounded-xl bg-white hover:bg-blue-200"        
                            >
                                Logout
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Header;