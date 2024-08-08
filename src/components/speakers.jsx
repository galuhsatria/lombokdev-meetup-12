'use client';

/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from '@/components/ui/carousel';
import { speakers } from '@/content/content';
import Link from 'next/link';
import { Instagram, Linkedin, Facebook, Dot } from 'lucide-react';

export default function Speakers() {
  const plugin = React.useRef(Autoplay({ delay: 3000 }));

  const [api, setApi] = React.useState(null);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        align: 'start',
        loop: true,
      }}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      setApi={setApi}
    >
      <CarouselContent >
        {speakers.map((speaker, index) => (
          <CarouselItem key={index} className="sm:basis-1/2">
            <div className="bg-[#1A1E26] rounded-md w-full flex max-md:h-max border border-b-0 border-[#2c3241] items-center justify-center p-4 gap-4 max-md:flex-col max-md:py-4 max-sm:p-0">
              <div className="sm:w-[60%] w-full max-sm:h-64">
                <img src="/images/person.png" alt="" className="rounded-md max-sm:w-full max-sm:rounded-b-none max-sm:object-cover h-full" />
              </div>
              <div className="flex-col w-full max-sm:p-4">
                <div className="text-white">
                  <p className="text-xl font-bold">{speaker.name}</p>
                  <p className="text-gray-400">{speaker.job}</p>
                </div>
                <p className="text-white mt-3 mb-4 text-sm">Adalah seorang android dev yang telah berkarir selama 10 tahun di dunia IT, dan akan berbagi ilmu mengenai android development pada sesi ini</p>
                <div className="flex gap-4 mt-2">
                  <Link
                    href={speaker.socialMedia.instagram}
                    className="text-gray-400 text-2xl flex items-center justify-center hover:bg-accent hover:border-white hover:text-white w-7 h-7 rounded-full border border-gray-400 text-center transition-all duration-200"
                  >
                    <Instagram className="text-gray-400 p-1 hover:text-white transition-all duration-200" />
                  </Link>
                  <Link
                    href={speaker.socialMedia.facebook}
                    className="text-gray-400 text-2xl flex items-center justify-center hover:bg-accent hover:border-white hover:text-white w-7 h-7 rounded-full border border-gray-400 text-center transition-all duration-200"
                  >
                    <Facebook className="text-gray-400 p-1 hover:text-white transition-all duration-200" />
                  </Link>
                  <Link
                    href={speaker.socialMedia.linkedin}
                    className="text-gray-400 text-2xl flex items-center justify-center hover:bg-accent hover:border-white hover:text-white w-7 h-7 rounded-full border border-gray-400 text-center transition-all duration-200"
                  >
                    <Linkedin className="text-gray-400 p-1 hover:text-white transition-all duration-200" />
                  </Link>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      <div className="flex justify-center mt-4">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 mx-1 rounded-full cursor-pointer ${current === index + 1 ? 'bg-white' : 'bg-gray-600'}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </Carousel>
  );
}
