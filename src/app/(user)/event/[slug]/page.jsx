/* eslint-disable @next/next/no-img-element */

import { IoMdTime } from 'react-icons/io';
import { MdOutlineDateRange } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import parse from 'html-react-parser';

async function getEventDetail(slug) {
  const res = await fetch(`http://localhost:3000/api/events/?slug=${slug}`, { cache: 'no-store' });
  return res.json();
}

export default async function Page({ params }) {
  const event = await getEventDetail(params.slug);

  return (
    <div className="min-h-screen max-w-4xl px-6 mx-auto text-white py-28">
      <div className="flex justify-center bg-tertiary rounded-md w-full h-96 relative">
        <img src={event.thumbniel} alt={event.title} className="rounded-md  w-full object-cover brightness-50 grayscale" />
        <img src={event.thumbniel} alt={event.title} className="rounded-md w-[22rem] p-3 absolute top-3" />
      </div>
      <p className="font-bold text-2xl mt-4">{event.title}</p>
      <p className="rounded-full px-3 py-0.5 border border-blue-600 bg-blue-600/40 w-max mt-2 text-xs">{event.category}</p>
      <p className="text-base mt-3">{event.description}</p>

      <div className='border-b border-gray-700 pb-6'>
        <div className="mt-5 flex flex-col gap-2">
          {' '}
          <p className="flex items-center gap-2 text-gray-400">
            <IoMdTime /> {event.time}
          </p>
          <p className="flex items-center gap-2 text-gray-400">
            <MdOutlineDateRange /> {event.date}
          </p>
          <p className="flex items-center gap-2 text-gray-400">
            <IoLocationOutline /> {event.location}
          </p>
        </div>

        <div className="mt-4">
          <Button className="bg-blue-600 hover:bg-blue-500 text-white">
            <Link href={event.registration}>Daftar Event</Link>
          </Button>
        </div>
      </div>

      <article className="prose-config whitespace-pre-wrap mt-4 leading-relaxed">{parse(event.content)}</article>
    </div>
  );
}
