import { loadDetailedDtc } from "@/app/(auth)/dtc-search/[dtc]/action";
import AuthSearchDtc from "@/app/(auth)/_components/AuthSearchDtc";
import DtcSearchTable from "@/app/(auth)/dtc-search/[dtc]/DtcSearchTable";
import DtcPagination from "@/app/(auth)/dtc-search/[dtc]/DtcPagination";
import DtcErrorSearch from "@/app/search-dtc/[dtc]/DtcErrorSearch";
import DtcNotFound from "@/app/(auth)/dtc-search/DtcNotFound";

type Props = Promise<{ dtc: string }>;

const DtcSearchPage = async ({ params }: { params: Props }) => {
  const { dtc } = await params;

  const data = await loadDetailedDtc(dtc);

  if (!data.success) {
    return (
      <>
        <h1>DTC Search: {dtc}</h1>
        <AuthSearchDtc dtc={dtc} />
        <DtcErrorSearch type={data.type!} />
        <DtcNotFound dtc={dtc} />
      </>
    );
  } else {
    //I know using slice on loaded data from DB is not ideal, and i should change logic,
    // to load only needed data, but purpose why i am slice data, is mainly for UI reason,
    // to prevent too many data displayed in table.

    const firstTwenty = data.dtcList!.slice(0, 20);

    const totalPages = Math.ceil(data.dtcList!.length / 20) - 1;

    return (
      <>
        <h1>DTC Search: {dtc}</h1>
        <AuthSearchDtc dtc={dtc} />
        {data.success && <DtcSearchTable dtcList={firstTwenty} />}
        <DtcPagination dtc={dtc} currentPage={1} totalPages={totalPages} />
        <DtcNotFound dtc={dtc} />
      </>
    );
  }
};

export default DtcSearchPage;
