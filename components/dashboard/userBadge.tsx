"use client";

import { SignOutButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "../ui/button";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { Avatar, AvatarImage } from "../ui/avatar";

export const UserBadge = ({
  username,
  userImage,
}: {
  username: string;
  userImage: string;
}) => {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex items-center pl-2  rounded-md gap-5">
        <Avatar className="size-10">
          <AvatarImage src={userImage} />
        </Avatar>
        <span className="font-bold ">{username}</span>
      </div>

      <div className="flex items-center justify-center gap-5 w-full rounded-md">
        <Button asChild variant={"destructive"} className="flex-1">
          <SignOutButton />
        </Button>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
