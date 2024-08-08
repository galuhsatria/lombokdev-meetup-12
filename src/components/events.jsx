/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { IoMdTime } from 'react-icons/io';
import { MdOutlineDateRange } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Event({ event }) {
  return (
    <div className="flex gap-6 justify-center max-md:flex-col">
      <div className="w-max max-md:w-full flex justify-center bg-tertiary p-2 rounded-md">
        <img src={event.thumbniel} alt={event.title} className="w-[35rem] max-md:w-full rounded-md" />
      </div>
      <div className="text-white w-full mt-1">
        <p className="font-bold text-2xl">{event.title}</p>
        <p className="text-base mt-3">{event.description}</p>
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
        <Button className="bg-transparent border-blue-600 mt-5 hover:bg-blue-600 hover:text-white" variant="outline">
          <Link href={'events/' + event.slug}>Lihat detail</Link>
        </Button>
      </div>
    </div>
  );
}
