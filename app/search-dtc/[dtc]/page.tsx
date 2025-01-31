import { loadTopDtc } from "@/app/search-dtc/[dtc]/action";
import BasicDtcList from "@/app/search-dtc/[dtc]/BasicDtcList";
import SearchDtcComponent from "@/app/search-dtc/[dtc]/SearchDtcComponent";

type Props = Promise<{ dtc: string }>;

const SearchDtcPage = async ({ params }: { params: Props }) => {
  const { dtc } = await params;

  const data = await loadTopDtc(dtc);

  return (
    <>
      <SearchDtcComponent dtc={dtc} />
      {data.success && (
        <BasicDtcList
          key={`searched-dtc-${dtc}`}
          dtcList={data.dtcList!}
          searchedDtc={dtc}
        />
      )}
    </>
  );
};

export default SearchDtcPage;
