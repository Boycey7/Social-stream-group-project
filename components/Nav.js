"use client"
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Pic from '@/components/pic.jpg'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex-col justify-end bg-black">
      <Image className="p-5" width="100" height="100" src={Pic} alt="social logo" />
      <div className="hidden w-full md:flex p-5 text-white">
              <Link href="/View" className='px-5'>View</Link>
        <Link href="/Add">Add</Link>
      </div>
      <div className="md:hidden absolute z-10 right-5 top-6 text-white">
        <button onClick={toggleNavbar}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <div className="flex basis-full flex-col p-5 text-white">
          <Link href="/View">View</Link>
          <Link href="/Add">Add</Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
