const TermsOfServicePage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>

      <p className="mb-4">Effective Date: 1st February 2025</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Introduction</h2>
      <p className="mb-4">
        Welcome to our DTC Code Lookup service. By using our website, you agree
        to comply with and be bound by these Terms of Service.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. User Accounts</h2>
      <p className="mb-4">
        You may create an account using Clerk authentication. Your personal
        information is stored securely and managed according to our{" "}
        <a href="#" className="underline">
          Privacy Policy
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        3. Data Usage and Privacy
      </h2>
      <p className="mb-4">
        We store and process user data in accordance with the General Data
        Protection Regulation (GDPR). Data retrieved from our database (NeonDB)
        and ChatGPT API is used solely for providing search results.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        4. Liability Disclaimer
      </h2>
      <p className="mb-4">
        Our service provides information based on stored data and AI-generated
        content. We do not guarantee the accuracy or completeness of the
        information and shall not be liable for any issues arising from its use.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        5. User Responsibilities
      </h2>
      <p className="mb-4">
        Users must ensure their queries and interactions comply with applicable
        laws. Misuse of the service, including automated scraping or malicious
        activities, is strictly prohibited.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to modify these Terms at any time. Continued use of
        the service after modifications constitutes acceptance of the updated
        terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        7. Contact Information
      </h2>
      <p className="mb-4">
        If you have any questions regarding these Terms, please contact us at{" "}
        <a href="mailto:daniel@hrynusiw.cz" className="underline">
          daniel@hrynusiw.cz
        </a>
        .
      </p>
    </div>
  );
};

export default TermsOfServicePage;
