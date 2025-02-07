import { DtcListType } from "@/app/(auth)/dtc-search/[dtc]/action";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DtcDetailDialog from "@/app/(auth)/dtc-search/[dtc]/DtcDetailDialog";

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
            <DtcDetailDialog dtcDetail={record} />
            <TableCell>{record.type}</TableCell>
            <TableCell>{record.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DtcSearchTable;
