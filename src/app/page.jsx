/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import { Button } from '@/components/ui/button';
import { MicVocal, MessageCircleMore, Laptop, Instagram, Linkedin, Facebook } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function Home() {
  return (
    <main className="max-w-6xl px-4 mx-auto relative z-10">
      <div className="absolute md:top-[-30rem] top-[-30rem]  right-0 fixed-size w-[800px] h-[100px]">
        <Image src={'/images/background.png'} alt="bg-image" width={800} height={100} />
      </div>

      <section className="hero md:h-screen max-md:pt-40 max-md:pb-14 flex flex-col items-center justify-center">
        <div className="flex items-center  text-center flex-col py-14">
          <h1 className="text-accent md:text-6xl sm:text-4xl text-3xl font-extrabold">Lombok Dev Meetup #12</h1>
          <p className="text-white max-w-2xl mt-2  md:text-base sm:text-sm tex">Belajar teknologi terbaru, networking, dan dapetin insight seru dari para pembicara yang keren. Don&apos;t miss out!</p>
          <Button className="bg-accent cursor-pointer mt-6">
            <Link href={'/'} className="flex items-center gap-3">
              Daftar Sekarang <IoIosArrowForward />
            </Link>
          </Button>
        </div>

        <div className="max-w-5xl w-full mt-4">
          <p className="uppercase text-border text-center">presented by</p>
          <div className="w-full mx-auto px-4 md:px-6 mt-7 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] space-x-10">
            <div className="flex items-center space-x-10 justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
              <Image src={'/images/example-sponsor.png'} width={150} height={25} alt="logo sponspor" />
              <Image src={'/images/example-sponsor.png'} width={150} height={25} alt="logo sponspor" />
              <Image src={'/images/example-sponsor.png'} width={150} height={25} alt="logo sponspor" />
              <Image src={'/images/example-sponsor.png'} width={150} height={25} alt="logo sponspor" />
              <Image src={'/images/example-sponsor.png'} width={150} height={25} alt="logo sponspor" />
              <Image src={'/images/example-sponsor.png'} width={150} height={25} alt="logo sponspor" />
              <Image src={'/images/example-sponsor.png'} width={150} height={25} alt="logo sponspor" />
              <Image src={'/images/example-sponsor.png'} width={150} height={25} alt="logo sponspor" />
              <Image src={'/images/example-sponsor.png'} width={150} height={25} alt="logo sponspor" />
              <Image src={'/images/example-sponsor.png'} width={150} height={25} alt="logo sponspor" />
            </div>
            <div className="flex items-center space-x-10 justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
              <Image src={'/images/example-sponsor.png'} width={150} height={25} alt="logo sponspor" />
              <Image src={'/images/example-sponsor.png'} width={150} height={25} alt="logo sponspor" />
              <Image src={'/images/example-sponsor.png'} width={150} height={25} alt="logo sponspor" />
              <Image src={'/images/example-sponsor.png'} width={150} height={25} alt="logo sponspor" />
              <Image src={'/images/example-sponsor.png'} width={150} height={25} alt="logo sponspor" />
              <Image src={'/images/example-sponsor.png'} width={150} height={25} alt="logo sponspor" />
              <Image src={'/images/example-sponsor.png'} width={150} height={25} alt="logo sponspor" />
              <Image src={'/images/example-sponsor.png'} width={150} height={25} alt="logo sponspor" />
              <Image src={'/images/example-sponsor.png'} width={150} height={25} alt="logo sponspor" />
              <Image src={'/images/example-sponsor.png'} width={150} height={25} alt="logo sponspor" />
            </div>
          </div>
        </div>
      </section>

      <section id="tentang" className="mb-6 max-md:pt-10 pt-6">
        <div className="text-center">
          <h1 className="text-3xl text-accent font-extrabold ">Apa itu Lombok Dev Meetup?</h1>
          <p className="text-border text-sm">Berkenalan dengan event Lombok Dev Meetup</p>
        </div>
        <div className="flex max-md:flex-col-reverse mt-10 items-center">
          <div className="text-white p-4 w-full">
            <p className="mb-6 leading-loose md:text-justify">
              LombokDev Meetup adalah acara rutin yang diselenggarakan bersama untuk memenuhi kebutuhan informasi, inspirasi, ilmu dan teknologi baru di dunia IT, open source, pengembangan perangkat lunak, sysadmin dan bidang terkait.
            </p>
            <p className="leading-loose md:text-justify">
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

        <div className="mt-12 flex justify-between max-w-[46rem] mx-auto max-md:flex-col max-md:gap-5 max-md:justify-center max-md:items-center">
          <div className="bg-[#1A1E26] rounded-lg p-4 flex flex-col items-center w-56 max-md:w-80">
            <div className="relative w-28 h-28 mb-4">
              <div className="absolute inset-2 bg-accent rounded-full opacity-40"></div>
              <div className="absolute inset-4 bg-accent rounded-full opacity-60"></div>
              <div className="absolute inset-6 bg-accent rounded-full flex items-center justify-center">
                <MicVocal className="w-8 h-8 text-white" />
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
                <MessageCircleMore className="w-8 h-8 text-white" />
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
                <Laptop className="w-8 h-8 text-white" />
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

        <div className="mt-10 flex justify-center flex-wrap gap-6 items-center">
          <div className="bg-[#1A1E26] rounded-md w-72">
            <div>
              <img src="/images/person.png" alt="" className="rounded-t-md w-full h-72 object-cover object-top" />
            </div>
            <div className="text-white mt-4 px-3">
              <p className="text-xl font-bold">Lorem Ipsum</p>
              <p className="text-gray-400">Android Dev</p>
            </div>
            <div className="flex mt-4 pb-4 px-3 flex-col">
              <div className="flex gap-4">
                <Link href={'/'} className="text-gray-400 text-2xl flex items-center justify-center hover:bg-accent hover:border-white hover:text-white w-7 h-7 rounded-full border border-gray-400 text-center transition-all duration-200">
                  <Instagram className="text-gray-400 p-1 hover:text-white transition-all duration-200" />
                </Link>
                <Link href={'/'} className="text-gray-400 text-2xl flex items-center justify-center hover:bg-accent hover:border-white hover:text-white w-7 h-7 rounded-full border border-gray-400 text-center transition-all duration-200">
                  <Facebook className="text-gray-400 p-1 hover:text-white transition-all duration-200" />
                </Link>
                <Link href={'/'} className="text-gray-400 text-2xl flex items-center justify-center hover:bg-accent hover:border-white hover:text-white w-7 h-7 rounded-full border border-gray-400 text-center transition-all duration-200">
                  <Linkedin className="text-gray-400 p-1 hover:text-white transition-all duration-200" />
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-[#1A1E26] rounded-md w-72">
            <div>
              <img src="/images/person.png" alt="" className="rounded-t-md w-full h-72 object-cover object-top" />
            </div>
            <div className="text-white mt-4 px-3">
              <p className="text-xl font-bold">Lorem Ipsum</p>
              <p className="text-gray-400">Android Dev</p>
            </div>
            <div className="flex mt-4 pb-4 px-3 flex-col">
              <div className="flex gap-4">
                <Link href={'/'} className="text-gray-400 text-2xl flex items-center justify-center hover:bg-accent hover:border-white hover:text-white w-7 h-7 rounded-full border border-gray-400 text-center transition-all duration-200">
                  <Instagram className="text-gray-400 p-1 hover:text-white transition-all duration-200" />
                </Link>
                <Link href={'/'} className="text-gray-400 text-2xl flex items-center justify-center hover:bg-accent hover:border-white hover:text-white w-7 h-7 rounded-full border border-gray-400 text-center transition-all duration-200">
                  <Facebook className="text-gray-400 p-1 hover:text-white transition-all duration-200" />
                </Link>
                <Link href={'/'} className="text-gray-400 text-2xl flex items-center justify-center hover:bg-accent hover:border-white hover:text-white w-7 h-7 rounded-full border border-gray-400 text-center transition-all duration-200">
                  <Linkedin className="text-gray-400 p-1 hover:text-white transition-all duration-200" />
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-[#1A1E26] rounded-md w-72">
            <div>
              <img src="/images/person.png" alt="" className="rounded-t-md w-full h-72 object-cover object-top" />
            </div>
            <div className="text-white mt-4 px-3">
              <p className="text-xl font-bold">Lorem Ipsum</p>
              <p className="text-gray-400">Android Dev</p>
            </div>
            <div className="flex mt-4 pb-4 px-3 flex-col">
              <div className="flex gap-4">
                <Link href={'/'} className="text-gray-400 text-2xl flex items-center justify-center hover:bg-accent hover:border-white hover:text-white w-7 h-7 rounded-full border border-gray-400 text-center transition-all duration-200">
                  <Instagram className="text-gray-400 p-1 hover:text-white transition-all duration-200" />
                </Link>
                <Link href={'/'} className="text-gray-400 text-2xl flex items-center justify-center hover:bg-accent hover:border-white hover:text-white w-7 h-7 rounded-full border border-gray-400 text-center transition-all duration-200">
                  <Facebook className="text-gray-400 p-1 hover:text-white transition-all duration-200" />
                </Link>
                <Link href={'/'} className="text-gray-400 text-2xl flex items-center justify-center hover:bg-accent hover:border-white hover:text-white w-7 h-7 rounded-full border border-gray-400 text-center transition-all duration-200">
                  <Linkedin className="text-gray-400 p-1 hover:text-white transition-all duration-200" />
                </Link>
              </div>
            </div>
          </div>
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

        <div className="text-white mt-4 max-w-4xl mx-auto">
          <Accordion collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Kapan acara Lombok Dev Meetup ke 12?</AccordionTrigger>
              <AccordionContent className="text-gray-400">Akan diadakah pada 1 September 2024</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Berapakah biaya pendaftaran?</AccordionTrigger>
              <AccordionContent className="text-gray-400">Biaya pendaftaran GRATIS untuk 50 orang pertama</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Setiap berapa kali setahun diadakanya Lombok Dev Meetup?</AccordionTrigger>
              <AccordionContent className="text-gray-400">Diadakan setiap satu tahun sekali</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </main>
  );
}
