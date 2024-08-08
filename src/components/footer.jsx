/* eslint-disable @next/next/no-img-element */
import { links } from '@/content/content';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaEnvelope, FaInstagram, FaFacebook, FaTelegramPlane, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#1A1E26] text-white p-4">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center max-md:flex-col max-md:items-start">
          <div>
            <img src="/images/lombok-dev.png" alt="Logo Lombok Dev" className="w-40" />
            <div>
              <ul className="flex gap-4 mt-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.link} className="text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-6">
            <p className="text-xl font-semibold">Kontak</p>
            <div className="flex items-center text-white gap-2 mt-2">
              <FaEnvelope className="text-sm" />
              <a href="mailto:lombokdev@gmail.com" className="text-sm">
                lombokdev@gmail.com
              </a>
            </div>
            <div className="flex gap-3 items-center mt-3">
              <a href="https://www.instagram.com/lombokdev/" target="_blank">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/groups/637288823062993/" target="_blank">
                <FaFacebook />
              </a>
              <a href="https://t.me/lombokdev" target="_blank">
                <FaTelegramPlane />
              </a>
              <a href="https://www.youtube.com/c/LombokDev" target="_blank">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="py-4 flex justify-between items-center border-t border-gray-600 mt-6 max-sm:flex-col-reverse max-sm:gap-2">
          <p className="text-sm">&copy; {currentYear} Lombok Dev - All rights reserved.</p>
          <p className="text-sm flex items-center gap-1.5">
            this website is
            <a href="https://github.com/galuhsatria/lombokdev-meetup-12" target="_blank" className="font-bold text-sm flex gap-1.5 items-center">
              {' '}
              Open Source on
              <FaGithub className="text-white" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
