import { events } from '@/app/data/event';
import { NextResponse } from 'next/server';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug');

  if (slug) {
    const event = events.find((e) => e.slug === slug);

    if (event) {
      return NextResponse.json(event);
    } else {
      return NextResponse.json({ message: 'Event not found' }, { status: 404 });
    }
  } else {
    return NextResponse.json(events);
  }
}
