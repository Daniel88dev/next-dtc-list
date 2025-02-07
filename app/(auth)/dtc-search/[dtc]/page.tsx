import { loadDetailedDtc } from "@/app/(auth)/dtc-search/[dtc]/action";
import AuthSearchDtc from "@/app/(auth)/_components/AuthSearchDtc";
import DtcSearchTable from "@/app/(auth)/dtc-search/[dtc]/DtcSearchTable";

type Props = Promise<{ dtc: string }>;

const DtcSearchPage = async ({ params }: { params: Props }) => {
  const { dtc } = await params;

  const data = await loadDetailedDtc(dtc);

  console.log(data);

  return (
    <>
      <h1>DTC Search: {dtc}</h1>
      <AuthSearchDtc dtc={dtc} />
      {data.success && <DtcSearchTable dtcList={data.dtcList!} />}
    </>
  );
};

export default DtcSearchPage;
