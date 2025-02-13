import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

type Props = {
  dtc?: string | null;
};

const AuthSearchDtc = ({ dtc }: Props) => {
  const onSearch = async (formData: FormData) => {
    "use server";
    const searchedDtc = formData.get("searchedDtc");
    redirect(`/dtc-search/${searchedDtc}`);
  };

  return (
    <form action={onSearch}>
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <Input
          type="search"
          name={"searchedDtc"}
          placeholder="Enter DTC code (e.g., P0300)"
          className="flex-grow"
          defaultValue={dtc ?? ""}
        />
        <Button type={"submit"} className="w-full sm:w-auto">
          Search
        </Button>
      </div>
    </form>
  );
};

export default AuthSearchDtc;
