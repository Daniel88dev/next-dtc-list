type Props = {
  type: "short" | "notFound" | "attempts";
};

const DtcErrorSearch = ({ type }: Props) => {
  if (type === "short") {
    return <p>Too short. Need to enter at least 3 characters to search DTC.</p>;
  }

  if (type === "notFound") {
    return (
      <p>
        No Result was found. Please try enter first letter of DTC in uppercase.
      </p>
    );
  }

  if (type === "attempts") {
    return <p>You have reached the maximum number of attempts.</p>;
  }
};

export default DtcErrorSearch;
