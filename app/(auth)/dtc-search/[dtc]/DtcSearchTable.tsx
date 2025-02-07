import { DtcListType } from "@/app/(auth)/dtc-search/[dtc]/action";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Props = {
  dtcList: DtcListType[];
};

const DtcSearchTable = ({ dtcList }: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>DTC Code</TableHead>
          <TableHead>DTC Type</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dtcList.map((record) => (
          <TableRow key={`dtcRecord-${record.id}`}>
            <TableCell>{record.dtc}</TableCell>
            <TableCell>{record.type}</TableCell>
            <TableCell>{record.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DtcSearchTable;
