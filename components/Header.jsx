import React, { useState } from 'react'
import { Transition } from '@headlessui/react'
import HeaderMenu from './HeaderMenu'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className=" sticky  top-0 z-50 border-y border-neutral-800 bg-neutral-900 shadow ">
      <div className="container mx-auto px-6 py-3 md:max-w-none md:px-5 lg:container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a
                className="flex transform  items-center justify-center  space-x-2 text-2xl font-bold text-white transition-colors duration-200 hover:text-neutral-300 lg:text-3xl"
                href="#"
              >
                <div className="transition-all hover:animate-spin">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div>Learn Fun</div>
              </a>

              {/* <!-- Search input on desktop screen --> */}
              <div className="mx-10 hidden md:mx-1 md:block lg:mx-10">
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
                    className="w-full rounded-md border border-neutral-600 bg-neutral-800  py-2 pl-10 pr-4 text-neutral-300 focus:border-neutral-300 focus:outline-none focus:ring focus:ring-neutral-300 focus:ring-opacity-40"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>

            {/* <!-- Mobile menu button --> */}
            <div className="flex md:hidden ">
              <button
                type="button"
                className="   text-neutral-200 hover:text-neutral-400 focus:text-neutral-400 focus:outline-none"
                aria-label="toggle menu"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Transition show={!isOpen}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </Transition>
                <Transition show={isOpen}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </Transition>
              </button>
            </div>
          </div>

          {/* <!-- Desktop menu --> */}
          <div className="hidden md:block">
            <HeaderMenu />
          </div>

          {/* <!-- Mobile menu --> */}
          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-60 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            className="md:hidden"
          >
            <HeaderMenu handleClose={() => setIsOpen(!isOpen)} />
          </Transition>
          {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
        </div>
      </div>
    </nav>
  )
}

export default Header
