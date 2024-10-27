import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ArrowTopRightIcon, QuestionMarkIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

const AvatarSelector = (userInfo: { profileImage: string } | undefined) => {
  return (
    <div className="relative">
      <Avatar className="size-40 border-2 border-primary">
        <AvatarImage
          src={userInfo?.profileImage as string}
          className="object-center"
        />
        <AvatarFallback>
          <AvatarImage src={"https://avatar.iran.liara.run/public"} />
        </AvatarFallback>
      </Avatar>
      <Popover>
        <PopoverTrigger className="absolute bottom-5 right-5 z-50 rounded-full bg-secondary p-1">
          <QuestionMarkIcon />
        </PopoverTrigger>
        <PopoverContent>
          You Can Change Your Profile Picture From profile Page <br />
          <span className="text-xs text-muted-foreground">
            (Logout and Login again to see changes)
          </span>
          <Link
            href={"/dashboard/settings"}
            className="bg-blue-500 px-2 py-1 rounded-md flex items-center justify-center gap-2 mt-2 text-white"
          >
            Profile <ArrowTopRightIcon />
          </Link>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default AvatarSelector;
