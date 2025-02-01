import { loadTopDtc } from "@/app/search-dtc/[dtc]/action";
import BasicDtcList from "@/app/search-dtc/[dtc]/BasicDtcList";
import SearchDtcComponent from "@/app/search-dtc/[dtc]/SearchDtcComponent";

type Props = Promise<{ dtc: string }>;

const SearchDtcPage = async ({ params }: { params: Props }) => {
  const { dtc } = await params;

  const data = await loadTopDtc(dtc);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <main className="max-w-4xl w-full rounded-lg shadow-xl p-8 space-y-8">
        <SearchDtcComponent dtc={dtc} />
        {data.success && (
          <BasicDtcList
            key={`searched-dtc-${dtc}`}
            dtcList={data.dtcList!}
            searchedDtc={dtc}
          />
        )}
      </main>
    </div>
  );
};

export default SearchDtcPage;
