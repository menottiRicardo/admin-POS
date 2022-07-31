import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest, res:NextResponse) {
  const path = request.nextUrl;
  if (path.pathname === "/") {
    
    return NextResponse.redirect("/tables");
  } else {
    return NextResponse.next();
  }
}
