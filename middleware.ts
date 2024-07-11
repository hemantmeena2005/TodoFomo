import { clerkMiddleware,createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
    '/view',
    '/add'
  ]);
  export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) {
      auth().protect(); // Protect the route if it matches the defined criteria
    }
  });
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};