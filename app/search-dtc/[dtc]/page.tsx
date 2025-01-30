import { cookies } from "next/headers";

type Props = Promise<{ dtc: string }>;

const SearchDtcPage = async ({ params }: { params: Props }) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  const { dtc } = await params;
  console.log(token);

  return <p>{dtc}</p>;
};

export default SearchDtcPage;
