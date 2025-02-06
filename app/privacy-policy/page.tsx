import AuthHeader from "@/app/(auth)/_components/AuthHeader";
import { SignedIn } from "@clerk/nextjs";

const PrivacyPolicy = () => {
  return (
    <>
      <SignedIn>
        <AuthHeader />
      </SignedIn>
      <div className="min-h-[90%] flex flex-col items-center justify-center p-4">
        <main className="max-w-4xl w-full rounded-lg shadow-xl p-8 space-y-8">
          <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

            <p className="mb-4">Effective Date: 1st March 2025</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">
              1. Introduction
            </h2>
            <p className="mb-4">
              This Privacy Policy explains how we collect, use, and protect your
              personal data when using our DTC Code Lookup service.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">
              2. Data We Collect
            </h2>
            <p className="mb-4">
              When you use our service, we may collect the following data:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                Account information (e.g., email, username) via Clerk
                authentication.
              </li>
              <li>Search queries related to DTC codes.</li>
              <li>Technical logs (IP address, browser type, device data).</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">
              3. How We Use Your Data
            </h2>
            <p className="mb-4">We use your data to:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Provide authentication services through Clerk.</li>
              <li>Search and display DTC code results using NeonDB.</li>
              <li>Generate additional information via ChatGPT API.</li>
              <li>Improve our service performance and security.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">
              4. Data Sharing
            </h2>
            <p className="mb-4">
              We do not sell or trade your personal data. However, we share
              necessary information with:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Clerk for authentication management.</li>
              <li>NeonDB for storing search-related data.</li>
              <li>OpenAI (ChatGPT API) to provide additional insights.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">
              5. User Rights Under GDPR
            </h2>
            <p className="mb-4">As a user, you have the right to:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Access, update, or delete your personal data.</li>
              <li>Request a copy of your stored data.</li>
              <li>Withdraw consent for data processing.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">
              6. Cookies & Tracking
            </h2>
            <p className="mb-4">
              Our service may use cookies for authentication and performance
              analytics. You can manage cookie settings in your browser.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">
              7. Data Security
            </h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your data
              from unauthorized access, alteration, or disclosure.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">
              8. Changes to This Policy
            </h2>
            <p className="mb-4">
              We may update this Privacy Policy periodically. Continued use of
              our service after changes indicates acceptance of the updated
              policy.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">
              9. Contact Information
            </h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, contact us at{" "}
              <a href="mailto:daniel@hrynusiw.cz" className="underline">
                daniel@hrynusiw.cz
              </a>
              .
            </p>
          </div>
        </main>
      </div>
    </>
  );
};

export default PrivacyPolicy;
