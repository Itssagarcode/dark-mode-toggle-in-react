import React from 'react'

const Card = () => {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="data:image/jpeg;base64,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" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card