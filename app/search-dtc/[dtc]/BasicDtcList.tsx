import { LoadedBasicDtcListType } from "@/app/search-dtc/[dtc]/action";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  dtcList: LoadedBasicDtcListType[];
  searchedDtc: string;
};

const BasicDtcList = ({ dtcList, searchedDtc }: Props) => {
  return (
    <Card className={"w-[750px]"}>
      <CardHeader>
        <CardTitle>Searched DTC results</CardTitle>
        <CardDescription>Results for: {searchedDtc}</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>DTC</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dtcList.map((record) => (
              <TableRow key={`basicDtc-${record.id}`}>
                <TableCell>{record.dtc}</TableCell>
                <TableCell>{record.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default BasicDtcList;
