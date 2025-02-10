import AuthSearchDtc from "@/app/(auth)/_components/AuthSearchDtc";
import { loadDetailedDtc } from "@/app/(auth)/dtc-search/[dtc]/action";
import DtcSearchTable from "@/app/(auth)/dtc-search/[dtc]/DtcSearchTable";
import DtcPagination from "@/app/(auth)/dtc-search/[dtc]/DtcPagination";

type Props = Promise<{ dtc: string; pageId: number }>;

const DtcSearchWithPage = async ({ params }: { params: Props }) => {
  const { dtc, pageId } = await params;

  const pageNo: number = +pageId;

  const data = await loadDetailedDtc(dtc);

  const nextTwenty = data.dtcList!.slice(20 * pageNo, 20 * (pageNo + 1));

  const totalPages = Math.ceil(data.dtcList!.length / 20) - 1;

  return (
    <>
      <h1>DTC Search: {dtc}</h1>
      <AuthSearchDtc dtc={dtc} />
      {data.success && <DtcSearchTable dtcList={nextTwenty} />}
      <DtcPagination dtc={dtc} currentPage={pageNo} totalPages={totalPages} />
    </>
  );
};

export default DtcSearchWithPage;
