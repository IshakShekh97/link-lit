"use client";

import { useFormStatus } from "react-dom";
import { Button, ButtonProps } from "../ui/button";
import { Loader } from "lucide-react";
import { cn } from "@/lib/utils";

interface SubmitBtnProps {
  className?: string;
  intialValue?: string;
  loadingValue?: string;
  variant?: ButtonProps["variant"];
}

const SubmitBtn = ({
  className,
  intialValue,
  loadingValue,
  variant,
}: SubmitBtnProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      variant={variant}
      className={cn(className)}
      disabled={pending}
      type="submit"
    >
      {pending ? (
        <>
          <Loader className="size-4 mr-3 animate-spin" />
          <span className="animate-pulse">{loadingValue}</span>
        </>
      ) : (
        <span>{intialValue}</span>
      )}
    </Button>
  );
};

export default SubmitBtn;
