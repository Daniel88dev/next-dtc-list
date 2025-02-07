"use client";

import { DtcListType } from "@/app/(auth)/dtc-search/[dtc]/action";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TableCell } from "@/components/ui/table";

type Props = {
  dtcDetail: DtcListType;
};

const DtcDetailDialog = ({ dtcDetail }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTrigger asChild>
        <TableCell
          onClick={() => setOpen(true)}
          className={"hover:underline hover:cursor-pointer"}
        >
          {dtcDetail.dtc}
        </TableCell>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>DTC Detail</DialogTitle>
          <DialogDescription>DTC: {dtcDetail.dtc}</DialogDescription>
        </DialogHeader>
        <p>Type: {dtcDetail.type}</p>
        <p>Description: {dtcDetail.description}</p>
        <p>System: {dtcDetail.system}</p>
        <p>Item: {dtcDetail.item}</p>
        <p>Detail: {dtcDetail.detail}</p>
      </DialogContent>
    </Dialog>
  );
};

export default DtcDetailDialog;
