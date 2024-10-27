import { Navbar } from "@/components/marketing/Navbar";
import React from "react";

const Marketinglayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <Navbar />
      <div className="max-w-[1800px] px-2 sm:px-4 lg:px-6  mx-auto">
        {children}
      </div>
    </div>
  );
};

export default Marketinglayout;
