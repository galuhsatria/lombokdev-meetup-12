'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoSunnyOutline, IoMenu } from 'react-icons/io5';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed w-full z-30  max-md:bg-black/30 backdrop-blur-md">
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
          <ul className="flex gap-10">
            <li>
              <Link href="#tentang" className="no-underline  hover:text-accent transition-all duration-200 text-white cursor-pointer">
                Tentang
              </Link>
            </li>
            <li>
              <Link href="#tentang" className="no-underline text-white cursor-pointer hover:text-accent transition-all duration-200 ">
                Sesi
              </Link>
            </li>
            <li>
              <Link href="#tentang" className="no-underline text-white cursor-pointer hover:text-accent transition-all duration-200 ">
                Pembicara
              </Link>
            </li>
            <li>
              <Link href="#tentang" className="no-underline text-white cursor-pointer hover:text-accent transition-all duration-200 ">
                Hadiah
              </Link>
            </li>
            <li>
              <Link href="#tentang" className="no-underline text-white cursor-pointer hover:text-accent transition-all duration-200 ">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <Sheet className="bg-[#1A1E26] text-white hidden max-md:block">
          <SheetTrigger className='max-md:block hidden'>
            <IoMenu className="text-2xl text-white" />
          </SheetTrigger>
          <SheetContent className="bg-[#1A1E26] border-none">
            <ul className="flex gap-6 flex-col mt-10">
              <li>
                <Link href="#tentang" className="no-underline  hover:text-accent transition-all duration-200 text-white cursor-pointer">
                  Tentang
                </Link>
              </li>
              <li>
                <Link href="#tentang" className="no-underline text-white cursor-pointer hover:text-accent transition-all duration-200 ">
                  Sesi
                </Link>
              </li>
              <li>
                <Link href="#tentang" className="no-underline text-white cursor-pointer hover:text-accent transition-all duration-200 ">
                  Pembicara
                </Link>
              </li>
              <li>
                <Link href="#tentang" className="no-underline text-white cursor-pointer hover:text-accent transition-all duration-200 ">
                  Hadiah
                </Link>
              </li>
              <li>
                <Link href="#tentang" className="no-underline text-white cursor-pointer hover:text-accent transition-all duration-200 ">
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
