import { NextRequest, NextResponse } from 'next/server';

export async function proxy(_req: NextRequest): Promise<NextResponse> {
  void _req;
  return NextResponse.next();
}

export const config = {
  runtime: 'nodejs',
  matcher: ['/frontman', '/frontman/:path*', '/:path*/frontman', '/:path*/frontman/'],
};
