import Pembicara from '@/components/pembicara';
import Sesi from '@/components/sesi';
import Image from 'next/image';
import { IoIosArrowForward } from 'react-icons/io';

export default function Home() {
  return (
    <main className="max-w-6xl px-4 mx-auto relative z-10">
      <div className="absolute md:top-[-30rem] top-[-30rem]  right-0 fixed-size w-[800px] h-[100px]">
        <Image src={'/images/background.png'} alt="bg-image" width={800} height={100} />
      </div>

      <section className="hero h-screen">
        <div className="text-center">
          <h1 className="text-accent md:text-5xl sm:text-4xl text-3xl font-extrabold">Lombok Dev Meetup #12</h1>
          <p className="text-white max-w-2xl mt-2  md:text-base sm:text-sm text-xs">Belajar teknologi terbaru, networking, dan dapetin insight seru dari para speaker kece. Don&apos;t miss out!</p>
          <button className="btn bg-accent border-none text-white mt-6">
            Daftar Sekarang <IoIosArrowForward />
          </button>
        </div>
      </section>
    </main>
  );
}
