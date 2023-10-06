"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import searchIcon from './Images/search.png';
import Pic from './Images/pic.jpg';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 bg-white border-b border-gray-200 md:p-5">
    <div className="flex items-center justify-between w-full">

    <Link href="/"> 
          <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-bottom bg-no-repeat bg-[length:100%_6px] hover:bg-[length:100%_100%] transition-[background-size]">
            Social
          </span>
        </Link>


        <div className="flex items-center justify-center flex-grow space-x-3 md:space-x-5">
            <div className="flex items-center w-3/4 p-3 bg-gray-300 rounded-lg shadow-sm md:w-1/2">
                <Image src={searchIcon} alt="Search" className="w-6 h-6 mr-2 rounded-full" />
                <input
                    type="text"
                    className="w-full p-1 bg-transparent border-none rounded-lg focus:outline-none"
                    placeholder="Search Posts"
                />
            </div>
        </div>

        <div className="items-center hidden space-x-5 text-gray-900 md:flex">
            <Link href="/View">
                <span className="text-2xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-bottom bg-no-repeat bg-[length:100%_6px] hover:bg-[length:100%_100%] transition-[background-size]">View</span>
            </Link>
            <Link href="/Add">
                <span className="text-2xl bg-gradient-to-r from-orange-500 to-purple-600 bg-bottom bg-no-repeat bg-[length:100%_6px] hover:bg-[length:100%_100%] transition-[background-size]">Add</span>
            </Link>
        </div>
    </div>

    <div className="flex md:hidden">
        <button onClick={toggleNavbar} className="p-2 text-gray-500 rounded focus:outline-none focus:bg-gray-300">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        </div>

          
        {isOpen && (
        <div className="flex flex-col mt-4 space-y-3 text-gray-900 md:hidden">
          <Link href="/View">
            <span className="text-2xl bg-gradient-to-r from-orange-500 to-purple-600 bg-bottom bg-no-repeat bg-[length:100%_6px] hover:bg-[length:100%_100%] transition-[background-size]">View</span>
          </Link>
          <Link href="/Add">
            <span className="text-2xl bg-gradient-to-r from-orange-500 to-purple-600 bg-bottom bg-no-repeat bg-[length:100%_6px] hover:bg-[length:100%_100%] transition-[background-size]">Add</span>
          </Link>
        </div>
    )}
</nav>

  );
};

export default Nav;