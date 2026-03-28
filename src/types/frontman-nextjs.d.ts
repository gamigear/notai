declare module "@frontman-ai/nextjs" {
  import type { NextRequest, NextResponse } from "next/server";

  export function createMiddleware(config: {
    host: string;
  }): (req: NextRequest) => Promise<NextResponse | undefined>;
}

declare module "@frontman-ai/nextjs/Instrumentation" {
  export function setup(): [any, any];
}
