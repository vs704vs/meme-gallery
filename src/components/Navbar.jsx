import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-800 fixed z-50 w-[100%] top-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 lg:mx-60">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <a href="https://www.reddit.com/" target="_blank">
            <img
              src="https://logosmarcas.net/wp-content/uploads/2020/11/Reddit-Emblema.png"
              className="h-8"
              alt="Flowbite Logo"
            />
          </a>

          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Meme Gallery
          </span>
        </div>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <div className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700 lg:mx-4">
            <a
              href="https://www.reddit.com/r/memes/"
              target="_blank"
              className="block py-2 px-3 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Visit r/Memes
            </a>
            <a
              href="https://github.com/vs704vs/meme-gallery"
              target="_blank"
              className="block py-2 px-3 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
