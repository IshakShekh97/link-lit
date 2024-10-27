import { SettingsIcon, GitGraph, LayoutDashboard } from "lucide-react";
import React from "react";
import { Logo } from "../reusables/Logo";
import { UserBadge } from "./userBadge";
import SidebarItem from "./sidebar-item";
import { GetUserInfo } from "@/actions/user.actions";

export const sidebarLinks = [
  {
    title: "My Page",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Analytics",
    icon: GitGraph,
    href: "/dashboard/analytics",
  },
  {
    title: "Profile",
    icon: SettingsIcon,
    href: "/dashboard/settings",
  },
];

export const Sidebar = async () => {
  const userinfo = await GetUserInfo();

  return (
    <div className="lg:w-80 w-56 shrink-0 max-md:hidden h-screen sticky top-0 left-0">
      <div className="flex py-10 flex-col items-center justify-between h-full">
        <div className="flex flex-col items-center justify-center w-full">
          <Logo />
          <div className="flex flex-col gap-3 w-full items-center my-10">
            <SidebarItem />
          </div>
        </div>

        <div className="flex items-center justify-between w-full px-5">
          <UserBadge
            userImage={userinfo?.profileImage as string}
            username={userinfo?.username as string}
          />
        </div>
      </div>
    </div>
  );
};
