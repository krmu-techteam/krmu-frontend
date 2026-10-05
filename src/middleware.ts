import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    const startTime = Date.now();
    requestHeaders.set("x-start-time", String(startTime));
    requestHeaders.set("x-pathname", request.nextUrl.pathname);

    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });

    return response;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - api routes
         * - _next/static, _next/image
         * - favicon.ico, images, modules
         */
        "/((?!api|_next/static|_next/image|favicon.ico|images|modules).*)",
    ],
};
