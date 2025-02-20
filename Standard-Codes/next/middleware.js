import { NextResponse } from "next/server";

export function middleware(req) {
  console.log("\nmiddleware ran ~~\n");

  if (req.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.json({ msg: "fr fr" });
}

export const config = {
  matcher: ["/userslist/:path*"],
};
