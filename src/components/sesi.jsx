import Image from "next/image";
import React from "react";

export default function Sesi() {
  return (
    <section className="mb-6">
      <div className="items-center flex flex-col md:items-start">
        <h1 className="text-accent md:text-4xl sm:text-3xl text-2xl font-extrabold">
          Berbagai Sesi Menarik
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10">
        <div className="flex flex-col rounded-lg bg-tertiary p-8">
          <div className="relative flex justify-end mb-6">
            <Image
              src={"/images/icon_mic.png"}
              alt="sesi-1"
              width={80}
              height={80}
              className="w-40 aspect-square "
            />
          </div>
          <h1 className="text-white md:text-4xl mb-4 sm:text-3xl text-2xl font-extrabold">
            Tect Talk
          </h1>
          <p className="text-white md:text-base sm:text-sm text-xs">
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </p>
        </div>
        <div className="flex flex-col rounded-lg bg-tertiary p-8">
          <div className="relative flex justify-end mb-6">
            <Image
              src={"/images/icon_chat.png"}
              alt="sesi-1"
              width={80}
              height={80}
              className="w-40 aspect-square "
            />
          </div>
          <h1 className="text-white md:text-4xl mb-4 sm:text-3xl text-2xl font-extrabold">
            Discussion
          </h1>
          <p className="text-white md:text-base sm:text-sm text-xs">
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </p>
        </div>
        <div className="flex flex-col rounded-lg bg-tertiary p-8">
          <div className="relative flex justify-end mb-6">
            <Image
              src={"/images/icon_pc.png"}
              alt="sesi-1"
              width={80}
              height={80}
              className="w-40 aspect-square "
            />
          </div>
          <h1 className="text-white md:text-4xl mb-4 sm:text-3xl text-2xl font-extrabold">
            Challenge
          </h1>
          <p className="text-white md:text-base sm:text-sm text-xs">
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </p>
        </div>
      </div>
    </section>
  );
}
