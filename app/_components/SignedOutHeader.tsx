import { auth } from "@clerk/nextjs/server";
import Header from "@/app/_components/Header";

/**
 * Renders the public Header for signed-out visitors.
 *
 * Same behaviour as wrapping <Header /> in Clerk's <SignedOut>, but tolerates a
 * request where clerkMiddleware() did not run. auth() throws in that case, and
 * because this lives in the root layout the throw turns every such request into
 * a 500 — including 404s that fall through to /_not-found. Treat a missing auth
 * context as "not signed in" instead.
 */
const SignedOutHeader = async () => {
  try {
    const { userId } = await auth();
    return userId ? null : <Header />;
  } catch {
    return <Header />;
  }
};

export default SignedOutHeader;
