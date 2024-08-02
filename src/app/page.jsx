/* eslint-disable @next/next/no-img-element */
import Pembicara from '@/components/pembicara';
import Sesi from '@/components/sesi';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import { Button } from '@/components/ui/button';
import { TriangleAlert } from 'lucide-react';

export default function Home() {
  return (
    <main className="max-w-6xl px-4 mx-auto relative z-10">
      <div className="absolute md:top-[-30rem] top-[-30rem]  right-0 fixed-size w-[800px] h-[100px]">
        <Image src={'/images/background.png'} alt="bg-image" width={800} height={100} />
      </div>

      <section className="hero h-screen flex flex-col items-center justify-center">
        <div className="flex items-center  text-center flex-col py-14">
          <h1 className="text-accent md:text-6xl sm:text-4xl text-3xl font-extrabold">Lombok Dev Meetup #12</h1>
          <p className="text-white max-w-2xl mt-2  md:text-base sm:text-sm tex">Belajar teknologi terbaru, networking, dan dapetin insight seru dari para pembicara yang keren. Don&apos;t miss out!</p>
          <Button className="bg-accent cursor-pointer mt-6">
            <Link href={'/'} className="flex items-center gap-3">
              Daftar Sekarang <IoIosArrowForward />
            </Link>
          </Button>
        </div>

        <div className="max-w-5xl w-full">
          <p className="uppercase text-border text-center">presented by</p>
          <div className="w-full mx-auto px-4 md:px-6 mt-7 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] space-x-10">
            <div className="flex items-center space-x-10 justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
              <Image src={'/images/example-sponsor.png'} width={150} height={50} alt="logo sponspor" />
              <Image src={'/images/example-sponsor.png'} width={150} height={50} alt="logo sponspor" />
              <Image src={'/images/example-sponsor.png'} width={150} height={50} alt="logo sponspor" />
              <Image src={'/images/example-sponsor.png'} width={150} height={50} alt="logo sponspor" />
              <Image src={'/images/example-sponsor.png'} width={150} height={50} alt="logo sponspor" />
              <Image src={'/images/example-sponsor.png'} width={150} height={50} alt="logo sponspor" />
              <Image src={'/images/example-sponsor.png'} width={150} height={50} alt="logo sponspor" />
              <Image src={'/images/example-sponsor.png'} width={150} height={50} alt="logo sponspor" />
              <Image src={'/images/example-sponsor.png'} width={150} height={50} alt="logo sponspor" />
              <Image src={'/images/example-sponsor.png'} width={150} height={50} alt="logo sponspor" />
            </div>
            <div className="flex items-center space-x-10 justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
              <Image src={'/images/example-sponsor.png'} width={150} height={50} alt="logo sponspor" />
              <Image src={'/images/example-sponsor.png'} width={150} height={50} alt="logo sponspor" />
              <Image src={'/images/example-sponsor.png'} width={150} height={50} alt="logo sponspor" />
              <Image src={'/images/example-sponsor.png'} width={150} height={50} alt="logo sponspor" />
              <Image src={'/images/example-sponsor.png'} width={150} height={50} alt="logo sponspor" />
              <Image src={'/images/example-sponsor.png'} width={150} height={50} alt="logo sponspor" />
              <Image src={'/images/example-sponsor.png'} width={150} height={50} alt="logo sponspor" />
              <Image src={'/images/example-sponsor.png'} width={150} height={50} alt="logo sponspor" />
              <Image src={'/images/example-sponsor.png'} width={150} height={50} alt="logo sponspor" />
              <Image src={'/images/example-sponsor.png'} width={150} height={50} alt="logo sponspor" />
            </div>
          </div>
        </div>
      </section>

      {/* <section> */}
      {/* <div className="flex items-center justify-center h-screen bg-gray-900">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-28 h-28 bg-accent rounded-full animate-pulse opacity-50"></div>
            <div className="absolute  w-28 h-28 bg-accent rounded-full opacity-75"></div>
            <div className="relative w-20 h-20 bg-accent rounded-full p-2">
              <div className="bg-accent rounded-full w-full h-full flex items-center justify-center">
                <TriangleAlert className="text-white w-10 h-10" />
              </div>
            </div>
          </div>
        </div> */}
      {/* </section> */}

      <section id="tentang" className="mb-6">
        <div className="text-center">
          <h1 className="text-3xl text-accent font-extrabold ">Apa itu Lombok Dev Meetup?</h1>
          <p className="text-border text-sm">Berkenalan dengan event Lombok Dev Meetup</p>
        </div>
        <div className="flex max-md:flex-col-reverse mt-12 items-center">
          <div className="text-white p-4 w-full">
            <p className="mb-6 leading-loose text-justify">
              LombokDev Meetup adalah acara rutin yang diselenggarakan bersama untuk memenuhi kebutuhan informasi, inspirasi, ilmu dan teknologi baru di dunia IT, open source, pengembangan perangkat lunak, sysadmin dan bidang terkait.
            </p>
            <p className="leading-loose text-justify">
              Niat utama dari event ini adalah untuk menyulut semangat berkolaborasi dan berbagi dari/untuk penggiat teknologi informasi dan membangun ekosistem teknologi, berbagi dan berkolaborasi yang solid di Lombok.
            </p>
          </div>
          <div className="p-4 w-full">
            <img src={'/images/galery.png'} width={1200} height={400} alt="galery lombok dev" />
          </div>
        </div>
      </section>

      <section id="sesi" className="py-10">
        <div className="text-center">
          <h1 className="text-3xl text-accent font-extrabold ">Berbagai Sesi Menarik</h1>
          <p className="text-border text-sm">Ikutilah beragam kegiatan menarik dalam sesi kami</p>
        </div>

        <div className="mt-12 flex justify-between max-w-[46rem] mx-auto max-md:flex-col max-md:gap-5 max-md:justify-center max-md:items-center">
          <div className="bg-[#1A1E26] rounded-lg p-4 flex flex-col items-center w-56 max-md:w-80">
            <div className="relative w-28 h-28 mb-4">
              <div className="absolute inset-2 bg-accent rounded-full opacity-40"></div>
              <div className="absolute inset-4 bg-accent rounded-full opacity-60"></div>
              <div className="absolute inset-6 bg-accent rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
            </div>
            <h3 className="text-white font-bold text-2xl mb-2">Tech Talk</h3>
            <p className="text-gray-400 text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
          </div>
          <div className="bg-[#1A1E26] rounded-lg p-4 flex flex-col items-center w-56 max-md:w-80">
            <div className="relative  w-28 h-28 mb-4">
              <div className="absolute inset-2 bg-accent rounded-full opacity-40"></div>
              <div className="absolute inset-4 bg-accent rounded-full opacity-60"></div>
              <div className="absolute inset-6 bg-accent rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
            </div>
            <h3 className="text-white font-bold text-2xl mb-2">Discussion</h3>
            <p className="text-gray-400 text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
          </div>
          <div className="bg-[#1A1E26] rounded-lg p-4 flex flex-col items-center w-56 max-md:w-80">
            <div className="relative  w-28 h-28 mb-4">
              <div className="absolute inset-2 bg-accent rounded-full opacity-40"></div>
              <div className="absolute inset-4 bg-accent rounded-full opacity-60"></div>
              <div className="absolute inset-6 bg-accent rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-white font-bold text-2xl mb-2">Challenge</h3>
            <p className="text-gray-400 text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
          </div>
        </div>
      </section>

      <section id="pembicara" className="py-10">
        <div className="text-center">
          <h1 className="text-3xl text-accent font-extrabold ">Para Pembicara Inspiratif</h1>
          <p className="text-border text-sm">Berkenalan dengan para pembicara pada sesi tech talk</p>
        </div>
      </section>
    </main>
  );
}
