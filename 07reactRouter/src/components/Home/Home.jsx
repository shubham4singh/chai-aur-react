import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-0 sm:py-16 py-8">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-20 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                            Download Now
                            <span className="block sm:text-4xl text-3xl mt-2">Lorem Ipsum</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-4 py-2 sm:px-6 sm:py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75 transition-opacity"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="20"
                                height="20"
                                className="w-4 h-4 sm:w-6 sm:h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            <span className="ml-2">Download now</span>
                        </Link>
                    </div>
                </div>

                {/* Left Side Image - Responsive Positioning */}
                <div className="absolute inset-0 w-full sm:my-20 my-10 sm:pt-1 pt-4 h-full flex justify-start items-start sm:items-center">
                    <img 
                        className="w-48 sm:w-64 md:w-80 lg:w-96" 
                        src="https://images.pexels.com/photos/30352190/pexels-photo-30352190/free-photo-of-traditional-braiding-of-woman-s-hair-outdoors.jpeg" 
                        alt="Traditional hair braiding" 
                    />
                </div>
            </aside>

            {/* Bottom Image - Centered */}
            <div className="grid place-items-center sm:mt-20 mt-10">
                <img 
                    className="w-full max-w-xs sm:max-w-sm md:max-w-md" 
                    src="https://images.pexels.com/photos/30337238/pexels-photo-30337238/free-photo-of-young-couple-embracing-positively-in-love.jpeg" 
                    alt="Happy couple" 
                />
            </div>

            {/* Responsive Heading */}
            <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-8 sm:py-10 font-medium">
                Lorem Ipsum Yojo
            </h1>
        </div>
    );
}