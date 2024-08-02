import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="max-w-6xl px-4 mx-auto relative z-10">
      <div className="absolute md:top-[-30rem] top-[-30rem]  right-0 fixed-size w-[800px] h-[100px]">
        <Image src={'/images/background.png'} alt="bg-image" width={800} height={100} />
      </div>

      <section className="hero h-screen flex items-center justify-center">
        <div className="flex items-center  text-center flex-col ">
          <h1 className="text-accent md:text-6xl sm:text-4xl text-3xl font-extrabold">Lombok Dev Meetup #12</h1>
          <p className="text-white max-w-2xl mt-2  md:text-base sm:text-sm text-xs">Belajar teknologi terbaru, networking, dan dapetin insight seru dari para speaker kece. Don&apos;t miss out!</p>
          <Button className="bg-accent cursor-pointer mt-6">
            <Link href={'/'} className="flex items-center gap-3">
              Daftar Sekarang <IoIosArrowForward />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
