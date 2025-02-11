import AuthSearchDtc from "@/app/(auth)/_components/AuthSearchDtc";

const HomePage = () => {
  return (
    <>
      <h1 className={"text-xl"}>Welcome on DTC List Home page</h1>
      <p>Enter your searched DTC code</p>
      <AuthSearchDtc />
      <p>At least 3 characters of DTC code need to be entered.</p>
      <p>
        Plan in future to implement AI chatbot to get even more details about
        searched DTC code.
      </p>
    </>
  );
};

export default HomePage;
