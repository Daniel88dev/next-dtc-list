import { loadTopDtc } from "@/app/search-dtc/[dtc]/action";
import BasicDtcList from "@/app/search-dtc/[dtc]/BasicDtcList";

type Props = Promise<{ dtc: string }>;

const SearchDtcPage = async ({ params }: { params: Props }) => {
  const { dtc } = await params;

  const data = await loadTopDtc(dtc);

  console.log(data.success ? data.dtcList : data.message);

  return (
    <>
      {data.success && (
        <BasicDtcList dtcList={data.dtcList!} searchedDtc={dtc} />
      )}
    </>
  );
};

export default SearchDtcPage;
