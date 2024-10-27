"use client";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "./sidebar";
import Link from "next/link";
import { cn } from "@/lib/utils";

const SidebarItem = () => {
  const pathname = usePathname();

  return (
    <>
      {sidebarLinks.map((link, idx) => (
        <Link
          href={link.href}
          key={idx}
          className={cn(
            "bg-transparent w-full md:w-[80%] text-center py-2 px-6 rounded-lg flex items-center gap-5",
            pathname === link.href
              ? "dark:bg-secondary bg-zinc-300  text-blue-500 font-bold"
              : "text-muted-foreground border hover:dark:bg-secondary/30 hover:bg-zinc-300/30"
          )}
        >
          <link.icon className={cn("size-5")} />
          <p>{link.title}</p>
        </Link>
      ))}
    </>
  );
};

export default SidebarItem;
