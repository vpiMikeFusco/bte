import { NextResponse } from 'next/server';
import { products } from '@/lib/mock-data';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const q = (url.searchParams.get('q') || '').toLowerCase();
  const items = products.filter((p) => !q || `${p.partNumber} ${p.title} ${p.brand}`.toLowerCase().includes(q));
  return NextResponse.json({ ok: true, items });
}
