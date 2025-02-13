import SubmitMissingDtcComponent from "@/app/(auth)/dtc-search/SubmitMissingDtcComponent";

type Props = {
  dtc: string | null;
};

const DtcNotFound = ({ dtc }: Props) => {
  return (
    <div className="mt-8">
      <p>
        Didnt found DTC you looking for? Submit Form for missing DTC code, to
        improve database.
      </p>
      <SubmitMissingDtcComponent dtc={dtc} />
    </div>
  );
};

export default DtcNotFound;
