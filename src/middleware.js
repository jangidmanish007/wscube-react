import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers';

// const protectedRoutes = ['/contact'];
const protectedRoutes = [];


export default function middleware(req) {
    // const url = req.nextUrl;
    // const pathname = url.pathname;
    // const searchParams = url.searchParams;
    // const response = NextResponse.next(); // Initialize response
    // const id = pathname.split("/").pop();
    // const cookieStore = cookies();
    // Extract query parameters
    // const utmSource = searchParams.get("utm_source");
    // const utmCookie = cookieStore.get('social_url_source');
    // const parsedUtm = utmCookie?.value ? JSON.parse(utmCookie?.value) : null;

    // if (utmSource != null && utmSource !== parsedUtm?.utm_source) {
    //     const queryParams = {};

    //     searchParams.forEach((value, key) => {
    //         queryParams[key] = value;
    //     });

    //     response.cookies.set({
    //         name: "social_url_source",
    //         value: JSON.stringify(queryParams),
    //         maxAge: 30 * 60,
    //         domain: `${process.env.COOKIES_DOMAIN}`,
    //     });
    //     response.cookies.set({
    //         name: "utm_pathname",
    //         value: url.pathname,
    //         maxAge: 30 * 60,
    //         domain: `${process.env.COOKIES_DOMAIN}`,
    //     });
    // }

    // Handle authentication for protected routes
    const token = req.cookies.get('_token')?.value;
    if (!token && protectedRoutes.includes(req.nextUrl.pathname)) {
        const absoluteURL = new URL("/", req.nextUrl.origin);
        return NextResponse.redirect(absoluteURL.toString());
    }

    // return response;
}