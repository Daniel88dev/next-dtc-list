import AuthSearchDtc from "@/app/(auth)/_components/AuthSearchDtc";
import DtcErrorSearch from "@/app/search-dtc/[dtc]/DtcErrorSearch";
import DtcNotFound from "@/app/(auth)/dtc-search/DtcNotFound";

const DtcSearchEmpty = () => {
  return (
    <>
      <h1>DTC Search: no DTC entered</h1>
      <AuthSearchDtc dtc={null} />
      <DtcErrorSearch type={"notFound"} />
      <DtcNotFound dtc={null} />
    </>
  );
};

export default DtcSearchEmpty;
