import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function middleware(request: NextRequest) {
	const sessionCookie = getSessionCookie(request);
    // THIS IS NOT SECURE!
    // This is the recommended approach to optimistically redirect users
    // We recommend handling auth checks in each page/route
	if (!sessionCookie) {
        console.log(`No cookie set; redirecting to login`)
		return NextResponse.redirect(new URL("/login", request.url));
	}
	return NextResponse.next();
}
export const config = {
    matcher: [
        '/((?!$|login|api|img|auth|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ]
};
