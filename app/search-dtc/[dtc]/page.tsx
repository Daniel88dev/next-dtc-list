import { loadTopDtc } from "@/app/search-dtc/[dtc]/action";
import BasicDtcList from "@/app/search-dtc/[dtc]/BasicDtcList";
import SearchDtcComponent from "@/app/search-dtc/[dtc]/SearchDtcComponent";
import DtcErrorSearch from "@/app/search-dtc/[dtc]/DtcErrorSearch";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

type Props = Promise<{ dtc: string }>;

const SearchDtcPage = async ({ params }: { params: Props }) => {
  const { dtc } = await params;

  const user = await currentUser();

  if (user?.id) {
    redirect("/home");
  }

  const data = await loadTopDtc(dtc);

  return (
    <div className="h-[90%] flex flex-col items-center justify-center p-4">
      <main className="max-w-4xl w-full rounded-lg shadow-xl p-8 space-y-8">
        <SearchDtcComponent dtc={dtc} attempts={data.attempts} />
        {data.success && (
          <BasicDtcList
            key={`searched-dtc-${dtc}`}
            dtcList={data.dtcList!}
            searchedDtc={dtc}
          />
        )}
        {!data.success && <DtcErrorSearch type={data.type!} />}
      </main>
    </div>
  );
};

export default SearchDtcPage;
