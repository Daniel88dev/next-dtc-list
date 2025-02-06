import { Input } from "@/components/ui/input";

const AuthSearchDtc = () => {
  return (
    <form>
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <Input
          type="search"
          name={"searchedDtc"}
          placeholder="Enter DTC code (e.g., P0300)"
          className="flex-grow"
        />
      </div>
    </form>
  );
};

export default AuthSearchDtc;
