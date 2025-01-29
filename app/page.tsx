"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function WelcomePage() {
  const router = useRouter();
  const [dtc, setDtc] = useState("");

  const onSearch = () => {
    router.push(`/search-dtc/${dtc}`);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <main className="max-w-4xl w-full rounded-lg shadow-xl p-8 space-y-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100">
          Welcome to DTC List
        </h1>

        <p className="text-center text-gray-600 dark:text-gray-100 text-lg">
          Your one-stop solution for Diagnostic Trouble Codes. Search, learn,
          and resolve vehicle issues with ease.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Input
            type="search"
            placeholder="Enter DTC code (e.g., P0300)"
            className="flex-grow"
            onChange={(e) => setDtc(e.target.value)}
          />
          <Button onClick={onSearch} className="w-full sm:w-auto">
            Search
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <SignUpButton>
            <Button variant="outline" className="w-full sm:w-auto">
              Register
            </Button>
          </SignUpButton>
          <SignInButton>
            <Button className="w-full sm:w-auto">Login</Button>
          </SignInButton>
        </div>
      </main>
    </div>
  );
}
