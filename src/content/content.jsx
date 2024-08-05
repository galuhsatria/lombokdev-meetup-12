import { MicVocal, MessageCircleMore, Laptop } from "lucide-react";
import React from "react";

export const faq = [
  {
    question: 'Kapan acara Lombok Dev Meetup ke 12?',
    answer: 'Akan diadakah pada 1 September 2024',
  },
  {
    question: 'Berapakah biaya pendaftaran?',
    answer: 'Biaya pendaftaran GRATIS untuk 50 orang pertama',
  },
  {
    question: 'Setiap berapa kali setahun diadakanya Lombok Dev Meetup?',
    answer: 'Diadakan setiap satu tahun sekali',
  },
  {
    question: 'Apakah event ini untuk umum?',
    answer: 'Ya event ini terbuka untuk umum',
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
    label: 'Tentang',
    link: '#tentang',
  },
  {
    label: 'Sesi',
    link: '#sesi',
  },
  {
    label: 'Pembicara',
    link: '#pembicara',
  },
  {
    label: 'Hadiah',
    link: '#hadiah',
  },
  {
    label: 'FAQ',
    link: '#faq',
  },
];