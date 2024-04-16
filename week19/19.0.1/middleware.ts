import { NextResponse, NextRequest } from "next/server";

let reqCount = 0;
export function middleware(req: NextRequest) {
  reqCount++;
  console.log("Number of req is: ", reqCount);
  return NextResponse.next();
}
// It runs on all Routes
