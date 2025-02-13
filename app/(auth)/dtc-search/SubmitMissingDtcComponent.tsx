"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { onMissingDtcSubmit } from "@/app/(auth)/dtc-search/[dtc]/missingDtcAction";

type Props = {
  dtc: string | null;
};

const SubmitMissingDtcComponent = ({ dtc }: Props) => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string[]>([]);

  const onSubmit = async (formData: FormData) => {
    const result = await onMissingDtcSubmit(formData);

    if (!result.success) {
      setError(result.errorArray!);
    } else {
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)} variant={"secondary"}>
          Report
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Submit Missing DTC</DialogTitle>
        </DialogHeader>
        <form action={onSubmit}>
          <Label htmlFor={"dtcCode"}>Missing DTC code:</Label>
          <Input
            id={"dtcCode"}
            name={"dtcCode"}
            defaultValue={dtc ?? ""}
            placeholder={"Enter DTC code"}
          />
          <Label htmlFor={"description"}>Description:</Label>
          <Textarea
            id={"description"}
            name={"description"}
            placeholder={
              "Enter some basic description, like where did you found this DTC, and what could be this DTC be related to."
            }
            rows={4}
          />
          {error.length > 0 && (
            <ul>
              {error.map((singleError, index) => (
                <li key={`error-${index}`} className={"text-red-500"}>
                  {singleError}
                </li>
              ))}
            </ul>
          )}
          <DialogFooter className={"mt-8"}>
            <Button type={"submit"}>Submit missing</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SubmitMissingDtcComponent;
