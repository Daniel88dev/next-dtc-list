import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { checkDtcSession } from "@/lib/sessionHandler";
import { redirect } from "next/navigation";

type Props = {
  dtc?: string;
};

const SearchDtcComponent = ({ dtc }: Props) => {
  const onSearch = async (formData: FormData) => {
    "use server";

    await checkDtcSession();

    const searchedDtc = formData.get("searchedDtc");
    console.log(searchedDtc);
    redirect(`/search-dtc/${searchedDtc}`);
  };

  return (
    <form
      action={onSearch}
      className="flex flex-col sm:flex-row gap-4 items-center"
    >
      <Input
        type="search"
        name={"searchedDtc"}
        placeholder="Enter DTC code (e.g., P0300)"
        className="flex-grow"
        defaultValue={dtc ? dtc : ""}
      />
      <Button type={"submit"} className="w-full sm:w-auto">
        Search
      </Button>
    </form>
  );
};

export default SearchDtcComponent;
