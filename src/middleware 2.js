import { NextRequest, NextResponse } from "next/server";

// const protectedRoutes = ['/contact'];
const protectedRoutes = [];

export default function middleware(req) {
    const token = req.cookies.get('_token')?.value;
    if (!token && protectedRoutes.includes(req.nextUrl.pathname)) {
        const absoluteURL = new URL("/", req.nextUrl.origin);
        return NextResponse.redirect(absoluteURL.toString());
    }
}