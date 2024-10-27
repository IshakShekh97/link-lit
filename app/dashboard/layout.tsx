import { Navbar } from "@/components/dashboard/navbar";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Card } from "@/components/ui/card";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Card className="m-2 w-full bg-card dark:bg-zinc-950/70 p-3 sm:p-5 lg:p-10">
          {children}
        </Card>
      </div>
    </>
  );
};

export default DashboardLayout;
