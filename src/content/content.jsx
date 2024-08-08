import { MicVocal, MessageCircleMore, Laptop } from "lucide-react";
import React from "react";

export const faq = [
  {
    question: 'Bagaimana cara bergabung jadi anggota?',
    answer: 'anda dapat bergabung ke telegram resi lombok dev melalui link berikut https://t.me/lombokdev',
  },
  {
    question: 'Apa syarat menjadi anggota?',
    answer: 'Cukup bergabung ke channel telegram kami',
  },
  {
    question: 'Apakah ada biaya pendaftaran?',
    answer: 'Tidak, untuk bergabung menjadi bagian dari LombokDev itu GRATIS',
  },
  {
    question: 'Dimana domisili tempat rutin berkumpul?',
    answer: 'Untuk saat ini lombok dev masih berpusat di mataram untuk beberapa kegiatan',
  },
];

export const speakers = [
    {
        name:'Lorem Ipsum',
        job:'Android Dev',
        image:'/images/person.png',
        socialMedia: {
            instagram:'/',
            facebook:'/',
            linkedin:'/'
        }
    },
    {
        name:'Lorem Ipsum',
        job:'Android Dev',
        image:'/images/person.png',
        socialMedia: {
            instagram:'/',
            facebook:'/',
            linkedin:'/'
        }
    },
    {
        name:'Lorem Ipsum',
        job:'Android Dev',
        image:'/images/person.png',
        socialMedia: {
            instagram:'/',
            facebook:'/',
            linkedin:'/'
        }
    },
    {
        name:'Lorem Ipsum',
        job:'Android Dev',
        image:'/images/person.png',
        socialMedia: {
            instagram:'/',
            facebook:'/',
            linkedin:'/'
        }
    }
]

export const sessions = [
    {
        name:'Tech Talk',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing.',
        icon: <MicVocal className="w-8 h-8 text-white"/>
    },
    {
      name:'Discussion',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing.',
      icon: <MessageCircleMore className="w-8 h-8 text-white"/>
  },
    {
      name:'Challenge',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing.',
      icon: <Laptop className="w-8 h-8 text-white"/>
  }
]


export const links = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'Event',
    link: '/events',
  },
  {
    label: 'Team',
    link: '/teams',
  },
  {
    label: 'FAQ',
    link: '/#faq',
  },
];