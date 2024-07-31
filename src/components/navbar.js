'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoSunnyOutline, IoMenu } from 'react-icons/io5';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed w-full z-30">
      <nav className="px-4 py-4 max-w-6xl mx-auto flex items-center justify-between max-md:bg-secondary">
        <div className="logo">
          <Image src={'/images/logo.png'} alt="Logo Lombok Dev Meetup" width={50} height={100} />
        </div>

        <div
          className={`menu max-md:absolute max-md:top-20 max-md:bg-secondary max-md:border-t max-md:border-[#1A1E26] left-0 backdrop-blur-md transition-all duration-200 max-md:w-full max-md:h-screen ${
            isOpen ? 'max-md:block' : 'max-md:opacity-0 max-md:hidden '
          }`}
        >
          <ul className="flex gap-4 max-md:flex-col max-md:items-center max-md:pt-6">
            <li>
              <Link href="#tentang" className="no-underline text-white cursor-pointer">
                Tentang
              </Link>
            </li>
            <li>
              <Link href="#tentang" className="no-underline text-white cursor-pointer">
                Sesi
              </Link>
            </li>
            <li>
              <Link href="#tentang" className="no-underline text-white cursor-pointer">
                Pembicara
              </Link>
            </li>
            <li>
              <Link href="#tentang" className="no-underline text-white cursor-pointer">
                Hadiah
              </Link>
            </li>
            <li>
              <Link href="#tentang" className="no-underline text-white cursor-pointer">
                FAQ
              </Link>
            </li>
            <li className="max-md:hidden">
              <button>
                <IoSunnyOutline className="text-xl" />
              </button>
            </li>
          </ul>
        </div>

        <div className="hidden max-md:flex items-center gap-6">
          <div>
            <button>
              <IoSunnyOutline className="text-xl" />
            </button>
          </div>
          <div>
            <button onClick={() => setIsOpen(!isOpen)}>
              <IoMenu className="text-2xl" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
