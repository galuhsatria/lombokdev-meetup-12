/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import { Button } from '@/components/ui/button';
import { Instagram, Linkedin, Facebook, Calendar, MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { faq, speakers, sessions } from '@/content/content';
import Countdown from '@/components/countdown';
import Speakers from '@/components/speakers';

export default function Home() {
  return (
    <main className="max-w-5xl px-4 mx-auto relative z-10">
      <div className="absolute md:top-[-30rem] top-[-30rem]  right-0 fixed-size w-[800px] h-[100px]">
        <Image src={'/images/background.png'} alt="bg-image" width={800} height={100} />
      </div>

      <section className="hero md:h-screen md:pt-24 max-md:pt-40 max-md:pb-14 flex flex-col items-center justify-center">
        <div className="flex items-center  text-center flex-col py-14">
          <h1 className="text-accent md:text-6xl sm:text-4xl text-3xl font-extrabold">Lombok Dev Meetup #12</h1>
          <p className="text-white max-w-2xl mt-2  md:text-base sm:text-sm tex">Belajar teknologi terbaru, networking, dan dapetin insight seru dari para pembicara yang keren. Don&apos;t miss out!</p>
          <Button className="bg-accent cursor-pointer mt-6">
            <Link href={'/'} className="flex items-center gap-3">
              Daftar Sekarang <IoIosArrowForward />
            </Link>
          </Button>
        </div>

        <div className=" w-full mt-4">
          <p className="uppercase text-border text-center">presented by</p>
          <div className="w-full mx-auto px-4 md:px-6 mt-7 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] space-x-10">
            <div className="flex items-center space-x-10 justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
                <Image key={index} src={'/images/lombok-dev.png'} width={150} height={25} alt="logo sponspor" />
              ))}
            </div>
            <div className="flex items-center space-x-10 justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
                <Image key={index} src={'/images/lombok-dev.png'} width={150} height={25} alt="logo sponspor" className="mix-blend-overlay" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="tentang" className="mb-6 max-md:pt-10 pt-6  mx-auto">
        <div className="text-center">
          <h1 className="text-3xl text-accent font-extrabold ">Apa itu Lombok Dev Meetup?</h1>
          <p className="text-border text-sm">Berkenalan dengan event Lombok Dev Meetup</p>
        </div>
        <div className="flex max-md:flex-col-reverse mt-10 items-center">
          <div className="text-white p-4 w-full">
            <p className="mb-4 leading-relaxed md:text-justify">
              LombokDev Meetup adalah acara rutin yang diselenggarakan bersama untuk memenuhi kebutuhan informasi, inspirasi, ilmu dan teknologi baru di dunia IT, open source, pengembangan perangkat lunak, sysadmin dan bidang terkait.
            </p>
            <p className="leading-relaxed md:text-justify">
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
          <p className="text-border text-sm">Ikutilah beragam sesi kegiatan menarik</p>
        </div>

        <div className="mt-12 grid justify-between gap-4 px-2 mx-auto md:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-md:gap-5 max-md:justify-center max-md:items-center">
          {sessions.map((session, index) => (
            <div className="bg-[#1A1E26] rounded-lg p-4 flex flex-col items-center w-full border border-b-0 border-[#2c3241]" key={index}>
              <div className="relative  w-28 h-28 mb-4">
                <div className="absolute inset-2 bg-accent rounded-full opacity-40"></div>
                <div className="absolute inset-4 bg-accent rounded-full opacity-60"></div>
                <div className="absolute inset-6 bg-accent rounded-full flex items-center justify-center">{session.icon}</div>
              </div>
              <h3 className="text-white font-bold text-2xl mb-2">{session.name}</h3>
              <p className="text-gray-400 text-sm text-center">{session.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pembicara" className="py-10">
        <div className="text-center">
          <h1 className="text-3xl text-accent font-extrabold ">Para Pembicara Inspiratif</h1>
          <p className="text-border text-sm">Berkenalan dengan para pembicara pada sesi tech talk</p>
        </div>

        <div className="mt-10 px-2">
          <Speakers />
        </div>
      </section>

      <section id="hadiah" className="py-10">
        <div className="text-center">
          <h1 className="text-3xl text-accent font-extrabold ">Dapatkah Hadiah Menarik</h1>
          <p className="text-border text-sm">Bergabung dan ikuti challenge untuk mendapatkah hadiah</p>
        </div>
        <div></div>
      </section>

      <section id="faq" className="py-10">
        <div className="text-center">
          <h1 className="text-3xl text-accent font-extrabold ">FAQ</h1>
          <p className="text-border text-sm">Temukan jawaban dari pertanyaan anda</p>
        </div>
        <div className="text-white mt-4  mx-auto px-2">
          <Accordion collapsible>
            {faq.map((faq, index) => (
              <AccordionItem value={index + 1} key={index + 1}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-400">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>


      <div className=" w-full mx-auto mt-6">
        <p className="uppercase text-border text-center">Media Partner</p>
        <div className="w-full mx-auto px-4 md:px-6 mt-7 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] space-x-10">
          <div className="flex items-center space-x-10 justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
              <Image key={index} src={'/images/lombok-dev.png'} width={150} height={25} alt="logo sponspor" />
            ))}
          </div>
          <div className="flex items-center space-x-10 justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">d
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
              <Image key={index} src={'/images/lombok-dev.png'} width={150} height={25} alt="logo sponspor" />
            ))}
          </div>
        </div>
      </div>

      <section className="py-10">
        <div className="text-center">
          <h1 className="text-3xl text-accent font-extrabold ">Segera Daftar</h1>
          <p className="text-border text-sm">Amankan tempat anda karena slot terbatas</p>
        </div>
        <div className="px-2">
          <div className="bg-[#1A1E26] gap-14  max-md:gap-10 mt-10 md:w-max w-full max-md:flex-col mx-auto py-4 px-6 rounded-md flex justify-center items-center border border-b-0 border-[#2c3241]">
            <div className="">
              <img src="/images/poster.jpg" alt="Poster Lombok Dev Meetup" className="w-80 rounded-md" />
            </div>
            <div className="">
              <p className="text-white">Segera daftar sebelum:</p>
              <Countdown />
              <div className="flex max-md:flex-col items-center gap-4 mt-7">
                <div className="flex items-center gap-2 text-white">
                  <Calendar className="h-5 w-5" /> <p>1 September 2024</p>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="h-5 w-5" />
                  <p>Taman Budaya Prov NTB</p>
                </div>
              </div>

              <div className="flex flex-col">
                <Button className="bg-accent md:w-max cursor-pointer mt-6">
                  <Link href={'/'} className="flex items-center gap-3">
                    Daftar Sekarang <IoIosArrowForward />
                  </Link>
                </Button>
                <p className="text-sm text-red-500 mt-2">*slot terbatas</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
