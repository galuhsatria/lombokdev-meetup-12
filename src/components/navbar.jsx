'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { IoMenu } from 'react-icons/io5';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { links } from '@/content/content';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const navbar = document.querySelector('header');
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    const handleScroll = () => {
      if (window.scrollY > navbarHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-30 max-md:bg-black/50 max-md:backdrop-blur-md transition-colors duration-150 ${isScrolled ? 'md:bg-black/50 md:backdrop-blur-md' : 'bg-transparent'}`}>
      <nav className="p-4 max-md:py-3 max-w-5xl mx-auto flex items-center justify-between ">
        <div className="logo">
          <Image src={'/images/logo.png'} alt="Logo Lombok Dev Meetup" width={70} height={48} className="max-md:w-14" />
        </div>

        <div className={`menu transition-all duration-200 max-md:hidden`}>
          <ul className="flex">
            {links.map((link, index) => (
              <li key={index}>
                <Link href={link.link} className="no-underline text-white cursor-pointer hover:bg-black/20 rounded-md px-6 py-2 transition-all duration-200 ">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Sheet className="bg-[#1A1E26] text-white hidden max-md:block">
          <SheetTrigger className="max-md:block hidden">
            <IoMenu className="text-2xl text-white" />
          </SheetTrigger>
          <SheetContent className="bg-[#1A1E26] border-none">
            <div className="flex gap-6 flex-col mt-10">
              {links.map((link, index) => (
                <SheetClose key={index} asChild>
                  <Link href={link.link} className="no-underline text-white cursor-pointer hover:bg-black/20 rounded-md px-6 py-2 transition-all duration-200 ">
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}

