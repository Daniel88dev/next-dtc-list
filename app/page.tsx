import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import SearchDtcComponent from "@/app/search-dtc/[dtc]/SearchDtcComponent";

export default function WelcomePage() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100">
        Welcome to DTC List
      </h1>

      <p className="text-center text-gray-600 dark:text-gray-100 text-lg">
        Your one-stop solution for Diagnostic Trouble Codes. Search, learn, and
        resolve vehicle issues with ease.
      </p>

      <SearchDtcComponent />

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <SignUpButton mode={"modal"} forceRedirectUrl={"/home"}>
          <Button variant="outline" className="w-full sm:w-auto">
            Register
          </Button>
        </SignUpButton>
        <SignInButton mode={"modal"} forceRedirectUrl={"/home"}>
          <Button className="w-full sm:w-auto">Login</Button>
        </SignInButton>
      </div>
    </>
  );
}
