"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

type Props = {
  dtc?: string;
};

const SearchDtcComponent = ({ dtc }: Props) => {
  const router = useRouter();

  const onSearch = (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const searchedDtc = formData.get("searchedDtc");
    console.log("running");
    router.push(`/search-dtc/${searchedDtc}`);
  };

  return (
    <form
      onSubmit={onSearch}
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
