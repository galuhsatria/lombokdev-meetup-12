import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";

export default function Pembicara() {
  return (
    <section className="min-h-screen">
      <div className="items-center flex flex-col md:items-start">
        <h1 className="text-accent md:text-4xl sm:text-3xl text-2xl font-extrabold">
          Para Pembicara Inspiratif
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 py-10">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 rounded-lg bg-tertiary p-6 border-gradient border">
          <div className="relative flex justify-center md:mb-0">
            <Image
              src={"/images/person.png"}
              alt="sesi-1"
              width={800}
              height={800}
              className="w-44 md:w-80 rounded-md object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-white md:text-3xl mb-2 sm:text-2xl text-xl font-bold">
              Eby Sofyan
            </h1>
            <p className="text-white md:text-base sm:text-sm text-xs mb-4 md:mb-6 font-light">
              Android and Backend Dev
            </p>
            <p className="text-white md:text-base sm:text-sm text-xs">
              Adalah seorang android developer sekaligus backend developer yang
              akan berbagai ilmu mengenai pengembangan aplikasi android yang
              terintegrasi dengan backend
            </p>
            <div className="mt-4 text-icon flex gap-3">
              <a href="">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="">
                <FiFacebook className="text-2xl" />
              </a>
              <a href="">
                <LuLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 rounded-lg bg-tertiary p-6 border-gradient border">
          <div className="relative flex justify-center md:mb-0">
            <Image
              src={"/images/person.png"}
              alt="sesi-1"
              width={800}
              height={800}
              className="w-44 md:w-80 rounded-md object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-white md:text-3xl mb-2 sm:text-2xl text-xl font-bold">
              Eby Sofyan
            </h1>
            <p className="text-white md:text-base sm:text-sm text-xs mb-4 md:mb-6 font-light">
              Android and Backend Dev
            </p>
            <p className="text-white md:text-base sm:text-sm text-xs">
              Adalah seorang android developer sekaligus backend developer yang
              akan berbagai ilmu mengenai pengembangan aplikasi android yang
              terintegrasi dengan backend
            </p>
            <div className="mt-4 text-icon flex gap-3">
              <a href="">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="">
                <FiFacebook className="text-2xl" />
              </a>
              <a href="">
                <LuLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 rounded-lg bg-tertiary p-6 border-gradient border">
          <div className="relative flex justify-center md:mb-0">
            <Image
              src={"/images/person.png"}
              alt="sesi-1"
              width={800}
              height={800}
              className="w-44 md:w-80 rounded-md object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-white md:text-3xl mb-2 sm:text-2xl text-xl font-bold">
              Eby Sofyan
            </h1>
            <p className="text-white md:text-base sm:text-sm text-xs mb-4 md:mb-6 font-light">
              Android and Backend Dev
            </p>
            <p className="text-white md:text-base sm:text-sm text-xs">
              Adalah seorang android developer sekaligus backend developer yang
              akan berbagai ilmu mengenai pengembangan aplikasi android yang
              terintegrasi dengan backend
            </p>
            <div className="mt-4 text-icon flex gap-3">
              <a href="">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="">
                <FiFacebook className="text-2xl" />
              </a>
              <a href="">
                <LuLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
