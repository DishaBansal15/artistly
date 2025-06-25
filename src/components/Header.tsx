'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import { FaMicrophoneAlt } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { text: 'Home', url: '/' },
    { text: 'Artists', url: '/artists' },
    { text: 'Onboard', url: '/onboarding' },
    { text: 'Dashboard', url: '/dashboard' },
  ];

  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
        <FaMicrophoneAlt className="text-indigo-600 w-6 h-6" />
          <span className="text-xl font-semibold text-indigo-700">Artistly</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-6">
          {menuItems.map(item => (
            <li key={item.text}>
              <Link
                href={item.url}
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
              >
                {item.text}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/onboarding"
              className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors text-sm"
            >
              Book Now
            </Link>
          </li>
        </ul>

        {/* Mobile Nav Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden bg-indigo-600 text-white p-2 rounded-full"
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiOutlineXMark size={20} /> : <HiBars3 size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <Transition
        show={isOpen}
        enter="transition duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition duration-150 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden bg-white px-6 pb-6">
          <ul className="space-y-4 pt-4">
            {menuItems.map(item => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="block text-gray-700 hover:text-indigo-600 font-medium"
                  onClick={toggleMenu}
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/onboarding"
                className="block text-center bg-indigo-600 text-white py-2 rounded-full hover:bg-indigo-700"
                onClick={toggleMenu}
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
