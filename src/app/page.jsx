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

      <section className="hero h-screen flex flex-col items-center justify-center">
        <div className="flex items-center  text-center flex-col py-14">
          <h1 className="text-accent md:text-6xl sm:text-4xl text-3xl font-extrabold">Lombok Dev Meetup #12</h1>
          <p className="text-white max-w-2xl mt-2  md:text-base sm:text-sm text-xs">Belajar teknologi terbaru, networking, dan dapetin insight seru dari para pembicara yang keren. Don&apos;t miss out!</p>
          <Button className="bg-accent cursor-pointer mt-6">
            <Link href={'/'} className="flex items-center gap-3">
              Daftar Sekarang <IoIosArrowForward />
            </Link>
          </Button>
        </div>

        <div className="max-w-5xl">
          <p className="uppercase text-border text-center">presented by</p>

          <div className="w-full mt-7 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] space-x-10">
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
    </main>
  );
}
