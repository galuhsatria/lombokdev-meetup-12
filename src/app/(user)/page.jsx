/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { faq } from '@/content/content';
import { FaTelegram, FaChevronRight } from 'react-icons/fa';
import { Spotlight } from '@/components/ui/spotlight';
import { HiOutlineSparkles } from 'react-icons/hi2';
import { MdOutlineGroups, MdOutlineDateRange } from 'react-icons/md';
import { IoBook, IoLocationOutline } from 'react-icons/io5';
import { FaLaptopCode } from 'react-icons/fa6';
import { IoMdTime } from 'react-icons/io';
import Event from '@/components/events';

async function getEvents() {
  const res = await fetch('http://localhost:3000/api/events', { cache: 'no-store' });
  return res.json();
}

export default async function Home() {
  const eventsData = await getEvents();

  const getLatestEventByStatus = (events, status) => {
    const filteredEvents = events.filter((event) => event.status === status);
    return filteredEvents.length > 0 ? filteredEvents[filteredEvents.length - 1] : null;
  };

  const latestCompletedEvent = eventsData ? getLatestEventByStatus(eventsData, 'Selesai') : null;
  const latestUnCompletedEvent = eventsData ? getLatestEventByStatus(eventsData, 'Segera') : null;

  return (
    <main className="w-full overflow-hidden">
      <div>
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#3B82F6" />
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <section className="hero max-sm:pt-36 sm:min-h-screen max-md:pb-14 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center text-center flex-col">
            <div className="p-[1px] text-sm rounded-full text-white bg-gradient-to-r from-blue-400 to-blue-600">
              <div className="bg-tertiary p-0.5 rounded-full">
                <p className="py-0.5 px-4 text-accent font-medium flex items-center gap-1 text-sm max-md:text-xs">
                  LombokDev Meetup #12 Coming Soon <HiOutlineSparkles className="text-white" />
                </p>
              </div>
            </div>
            <h1 className="md:text-6xl sm:text-4xl text-3xl font-extrabold">
              <span className="text-white leading-normal">Komunitas IT Semeton Lombok,</span> <span className="text-accent">Lombok Dev</span>
            </h1>
            <p className="text-white mt-4 font-medium max-w-3xl  md:text-base max-sm:text-sm">
              LombokDev adalah komunitas untuk berkolaborasi dan berbagi dari/untuk penggiat teknologi informasi dan membangun ekosistem teknologi, berbagi dan berkolaborasi yang solid di Lombok.
            </p>
            <div className="flex gap-4 mt-2">
              <Button className="cursor-pointer mt-6 bg-[#28A8E9] hover:bg-[#2cb5fa]">
                <Link href={'https://t.me/lombokdev'} className="flex items-center gap-3">
                  Join Telegram <FaTelegram className="text-xl" />
                </Link>
              </Button>
              <Button className="cursor-pointer mt-6 bg-blue-600 hover:bg-blue-500">
                <Link href={'/events'} className="flex items-center gap-3 ">
                  Telusuri Event <FaChevronRight />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="mb-6 max-md:pt-10 pt-6 mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold max-sm:text-2xl text-white">
              Berekenalan dengan <span className="text-accent">Lombok Dev</span>
            </h1>
            <p className="text-border text-base mt-1">Mengenal lebih dekat dengan lombok dev</p>
          </div>
          <div className="flex mt-14 max-sm:mt-10 max-lg:flex-col-reverse">
            <div className="text-white p-4 w-full md:mr-4">
              <h1 className="text-2xl font-bold">Komunitas IT terbesar di NTB</h1>
              <p className="mt-4">LombokDev adalah komunitas para Penggiat Teknologi Informasi mulai dari praktisi hingga pemantau seperti Programmer, Developer, Artist, SysAdmin, QA, Tech Blogger dan lain-lain.</p>
              <p className="mt-2">LombokDev sering mengadakan acara yang diselenggarakan bersama untuk memenuhi kebutuhan informasi, inspirasi, ilmu dan teknologi baru di dunia IT dan bidang terkait.</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-tertiary rounded-md p-4 text-white flex items-center max-sm:flex-col max-sm:items-start max-sm:gap-2  gap-4">
                  <MdOutlineGroups className="text-4xl text-blue-600" />
                  <div>
                    <p className="font-bold text-xl">Meetup</p>
                    <p className="text-sm text-gray-400">Pertemuan antara para penggiat IT di Lombok</p>
                  </div>
                </div>
                <div className="bg-tertiary rounded-md p-4 text-white flex items-center max-sm:flex-col max-sm:items-start max-sm:gap-2 gap-4">
                  <IoBook className="text-4xl text-blue-600" />
                  <div>
                    <p className="font-bold text-xl">Workshop</p>
                    <p className="text-sm text-gray-400">Berbagi ilmu seputar bidang teknologi</p>
                  </div>
                </div>
                <div className="bg-tertiary rounded-md p-4 text-white flex items-center max-sm:flex-col max-sm:items-start max-sm:gap-2  gap-4">
                  <FaLaptopCode className="text-4xl text-blue-600" />
                  <div>
                    <p className="font-bold text-xl">Hack Talks</p>
                    <p className="text-sm text-gray-400">Event Hacktoberfest regional Lombok</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[55rem] max-lg:w-full rounded-md p-4">
              <img src={'/images/galery.png'} width={1000} height={400} alt="galery lombok dev" className="rounded-md w-full h-full object-contain" />
            </div>
          </div>
        </section>

        <section className="mb-6 pt-10 mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold max-sm:text-2xl text-white">
              <span className="text-accent">Event</span> Mendatang
            </h1>
            <p className="text-border text-base mt-1">Event mendatang yang akan diselenggarakan</p>
          </div>

          <div className="mt-14 px-4 max-sm:mt-10">
            {
              latestUnCompletedEvent != null ? <Event event={latestUnCompletedEvent}/> : <p className='text-center text-gray-400'>Tidak ada event mendatang</p>
            }
          </div>
        </section>

        <section className="mb-6 pt-10 mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold max-sm:text-2xl text-white">
              <span className="text-accent">Event</span> Terbaru
            </h1>
            <p className="text-border text-base mt-1">Event terbaru yang telah diselenggarakan</p>
          </div>

          <div className="mt-14 px-4 max-sm:mt-10">
          {
              latestCompletedEvent != null ? <Event event={latestCompletedEvent}/> : <p className='text-center text-gray-400'>Tidak ada event terselengara</p>
            }
          </div>
        </section>

        <section id="faq" className="py-10">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold max-sm:text-2xl text-white">
              <span className="text-accent">FAQ</span>
            </h1>
            <p className="text-border text-base mt-1">Temukan jawaban dari pertanyaan anda</p>
          </div>
          <div className="text-white mt-10 mx-auto px-2">
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
      </div>
    </main>
  );
}
