import { Unlink } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link
      href={"/"}
      className="flex items-center justify-center gap-2 md:gap-3"
    >
      <Unlink className="size-5 md:size-8 " />
      <p className="text-xl sm:text-2xl xl:text-3xl font-bold">Link Lit</p>
    </Link>
  );
};
