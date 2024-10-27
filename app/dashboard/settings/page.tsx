import { UserProfile } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import React from "react";

const SettingsPage = () => {
  return (
    <div className="flex size-full overflow-hidden items-center ">
      <div className="">
        <div className="dark:hidden">
          <UserProfile
            routing="hash"
            appearance={{
              elements: {
                rootBox: {
                  width: "100%",
                },
                card: {
                  width: "100%",
                  border: "1px solid #e5e5e5",
                },
              },
            }}
          />
        </div>
        <div className="dark:flex hidden">
          <UserProfile
            routing="hash"
            appearance={{
              elements: {
                rootBox: {
                  width: "100%",
                },
                card: {
                  width: "100%",
                  border: "1px solid #e5e5e5",
                },
              },
              baseTheme: dark,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
