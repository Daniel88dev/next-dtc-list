import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/home(.*)", "/dtc-search(.*)"]);

// export default clerkMiddleware(async (auth, req) => {
//   if (isProtectedRoute(req)) await auth.protect()
// })

export default clerkMiddleware(
  async (auth, req) => {
    if (isProtectedRoute(req)) await auth.protect();
  },
  () => ({
    authorizedParties: [
      "https://dtc-list.cz",
      "https://www.dtc-list.cz",
      "http://localhost:3000",
    ],
  })
);

export const config = {
  matcher: [
    // Everything except Next.js internals.
    //
    // Static-looking paths (.png, .css, .ico, ...) are deliberately NOT excluded:
    // a request for one that does not exist is not served statically, it renders
    // /_not-found through the root layout, and Clerk's auth() in that layout
    // throws unless clerkMiddleware() ran for the request. Bots probing
    // /apple-touch-icon.png and friends were turning 404s into 500s.
    "/((?!_next/).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
