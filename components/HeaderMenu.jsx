import Link from 'next/link'
import React from 'react'

function HeaderMenu({ handleClose = () => {} }) {
  return (
    <div className="items-center md:flex">
      <div
        className="mt-2 flex flex-col md:mx-1 md:mt-0 md:flex-row"
        onClick={handleClose}
      >
        <Link href="#" passHref>
          <a className="my-1 flex transform  items-center justify-start space-x-2 text-sm leading-5 text-neutral-200  transition-all  duration-200 ease-in-out hover:scale-110 hover:text-neutral-400 hover:underline md:my-0  md:mx-2 lg:mx-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <div className="md:hidden xl:block">Home</div>
          </a>
        </Link>
        <Link href="#" passHref>
          <a className=" my-1 flex  transform items-center justify-start  space-x-2 text-sm leading-5  text-neutral-200  transition-all duration-200 hover:scale-110 hover:text-neutral-400 hover:underline md:my-0  md:mx-2 lg:mx-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="md:hidden xl:block"> Submit </div>
          </a>
        </Link>
        <Link href="#" passHref>
          <a className=" my-1 flex transform  items-center justify-start space-x-2 text-sm leading-5  text-neutral-200  transition-all  duration-200 hover:scale-110 hover:text-neutral-400 hover:underline md:my-0  md:mx-2 lg:mx-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <div className="md:hidden xl:block"> Rank </div>
          </a>
        </Link>
        <Link href="#" passHref>
          <a className=" my-1 flex transform  items-center justify-start space-x-2 text-sm leading-5  text-neutral-200  transition-all  duration-200 hover:scale-110 hover:text-neutral-400 hover:underline md:my-0  md:mx-2 lg:mx-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
            <div className="md:hidden xl:block"> Discover </div>
          </a>
        </Link>
      </div>

      <div
        className="-mx-1 flex items-center py-2 md:mx-0"
        onClick={handleClose}
      >
        <Link href="#" passHref>
          <a className="mx-1 block w-1/2 transform rounded-md bg-neutral-500 px-3 py-2 text-center text-sm font-medium leading-5 text-white transition-all duration-200 hover:bg-neutral-600 md:mx-2 md:w-auto">
            Log In
          </a>
        </Link>
        <Link href="#" passHref>
          <a className="mx-1 block w-1/2 transform rounded-md bg-neutral-200 px-3 py-2 text-center text-sm font-medium leading-5 text-black transition-all duration-200 hover:bg-neutral-600 hover:text-white md:mx-0 md:w-auto">
            Sign Up
          </a>
        </Link>
      </div>

      {/* <!-- Search input on mobile screen--> */}
      <div className="mt-3 md:hidden">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-neutral-400"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </span>

          <input
            type="text"
            className="w-full rounded-md border border-neutral-600 bg-neutral-800 py-2 pl-10 pr-4 text-neutral-300 focus:border-neutral-300  focus:outline-none  focus:ring  focus:ring-neutral-300  focus:ring-opacity-40"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  )
}

export default HeaderMenu
