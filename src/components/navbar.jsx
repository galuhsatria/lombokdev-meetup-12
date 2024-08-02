'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { IoMenu } from 'react-icons/io5';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`fixed w-full z-30 max-md:bg-black/50 max-md:backdrop-blur-md transition-all duration-150 ${isScrolled ? 'md:bg-black/50 md:backdrop-blur-md' : 'bg-transparent'}`}>
      <nav className="p-4 max-md:py-3 max-w-6xl mx-auto flex items-center justify-between ">
        <div className="logo">
          <Image
            src={'/images/logo.png'}
            alt="Logo Lombok Dev Meetup"
            width={70}
            height={100}
            className="
          max-md:w-14"
          />
        </div>

        <div className={`menu transition-all duration-200 max-md:hidden`}>
          <ul className="flex">
            <li>
              <Link href="#tentang" className="no-underline font-medium hover:bg-black/20 rounded-md px-6 py-2 transition-all duration-200 text-white cursor-pointer">
                Tentang
              </Link>
            </li>
            <li>
              <Link href="#sesi" className="no-underline text-white cursor-pointer hover:bg-black/20 rounded-md px-6 py-2 transition-all duration-200 ">
                Sesi
              </Link>
            </li>
            <li>
              <Link href="#pembicara" className="no-underline text-white cursor-pointer hover:bg-black/20 rounded-md px-6 py-2 transition-all duration-200 ">
                Pembicara
              </Link>
            </li>
            <li>
              <Link href="hadiah" className="no-underline text-white cursor-pointer hover:bg-black/20 rounded-md px-6 py-2 transition-all duration-200 ">
                Hadiah
              </Link>
            </li>
            <li>
              <Link href="#FAQ" className="no-underline text-white cursor-pointer hover:bg-black/20 rounded-md px-6 py-2 transition-all duration-200 ">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <Sheet className="bg-[#1A1E26] text-white hidden max-md:block">
          <SheetTrigger className="max-md:block hidden">
            <IoMenu className="text-2xl text-white" />
          </SheetTrigger>
          <SheetContent className="bg-[#1A1E26] border-none">
            <ul className="flex gap-6 flex-col mt-10">
              <li>
                <Link href="#tentang" className="no-underlin transition-all duration-200 text-white cursor-pointer hover:bg-black/20 rounded-md px-6 py-2 ">
                  Tentang
                </Link>
              </li>
              <li>
                <Link href="#sesi" className="no-underline text-white cursor-pointer hover:bg-black/20 rounded-md px-6 py-2 transition-all duration-200 ">
                  Sesi
                </Link>
              </li>
              <li>
                <Link href="#pembicara" className="no-underline text-white cursor-pointer hover:bg-black/20 rounded-md px-6 py-2 transition-all duration-200 ">
                  Pembicara
                </Link>
              </li>
              <li>
                <Link href="#hadiah" className="no-underline text-white cursor-pointer hover:bg-black/20 rounded-md px-6 py-2 transition-all duration-200 ">
                  Hadiah
                </Link>
              </li>
              <li>
                <Link href="#faq" className="no-underline text-white cursor-pointer hover:bg-black/20 rounded-md px-6 py-2 transition-all duration-200 ">
                  FAQ
                </Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
