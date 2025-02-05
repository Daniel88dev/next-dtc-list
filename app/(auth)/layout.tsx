import { ReactNode } from "react";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SignedIn, UserButton } from "@clerk/nextjs";

export default async function AuthenticatedLayout({
  children,
}: {
  children: ReactNode;
}) {
  const user = await currentUser();

  if (!user) {
    redirect("/");
  }

  return (
    <>
      {/*<SignedIn>*/}
      {/*  <UserButton />*/}
      {/*</SignedIn>*/}
      <SignedIn>
        <header>
          <UserButton />
        </header>
        {children}
      </SignedIn>
    </>
  );
}
