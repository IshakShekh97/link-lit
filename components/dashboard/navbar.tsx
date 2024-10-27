import React from "react";
import { Logo } from "../reusables/Logo";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { Menu, Unlink } from "lucide-react";
import { UserBadge } from "./userBadge";
import SidebarItem from "./sidebar-item";
import { GetUserInfo } from "@/actions/user.actions";
import Link from "next/link";

export const Navbar = async () => {
  const userinfo = await GetUserInfo();

  return (
    <div className="md:hidden sticky top-0 backdrop-blur-lg  rounded-b-lg w-full h-14 flex items-center justify-between px-5 ">
      <Sheet>
        <SheetTrigger>
          <Button size={"icon"} variant={"outline"}>
            <Menu />
          </Button>
        </SheetTrigger>

        <SheetContent
          className="bg-background/10 backdrop-blur-lg"
          side={"left"}
        >
          <div className="flex py-10 flex-col items-center justify-between h-full">
            <div className="flex flex-col items-center justify-center w-full">
              <Link
                href={"/"}
                className="flex items-center justify-center gap-2 md:gap-3 cursor-pointer"
              >
                <Unlink className="size-7  " />
                <p className="text-3xl font-bold">Link Lit</p>
              </Link>
              <div className="flex flex-col gap-3 w-full items-center my-10">
                <SidebarItem />
              </div>
            </div>

            <div className="flex items-center justify-between w-full md:px-5">
              <UserBadge
                userImage={userinfo?.profileImage as string}
                username={userinfo?.username as string}
              />
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <Logo />
      <ThemeSwitcher />
    </div>
  );
};
