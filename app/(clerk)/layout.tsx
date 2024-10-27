import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import React from "react";

const Clerklayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {children}
      <ThemeSwitcher className="fixed md:right-20 right-10 bottom-10" />
    </div>
  );
};

export default Clerklayout;
