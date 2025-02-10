import { loadDetailedDtc } from "@/app/(auth)/dtc-search/[dtc]/action";
import AuthSearchDtc from "@/app/(auth)/_components/AuthSearchDtc";
import DtcSearchTable from "@/app/(auth)/dtc-search/[dtc]/DtcSearchTable";
import DtcPagination from "@/app/(auth)/dtc-search/[dtc]/DtcPagination";

type Props = Promise<{ dtc: string }>;

const DtcSearchPage = async ({ params }: { params: Props }) => {
  const { dtc } = await params;

  const data = await loadDetailedDtc(dtc);

  const firstTen = data.dtcList!.slice(0, 20);

  const totalPages = Math.ceil(data.dtcList!.length / 20) - 1;

  return (
    <>
      <h1>DTC Search: {dtc}</h1>
      <AuthSearchDtc dtc={dtc} />
      {data.success && <DtcSearchTable dtcList={firstTen} />}
      <DtcPagination dtc={dtc} currentPage={1} totalPages={totalPages} />
    </>
  );
};

export default DtcSearchPage;
