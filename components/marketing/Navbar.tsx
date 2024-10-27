import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

import { Logo } from "@/components/reusables/Logo";
import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export const Navbar = async () => {
  const user = await currentUser();

  return (
    <>
      <div className="sticky z-50  backdrop-blur top-0 border-b border-foreground">
        {/* DeskTop Nav */}
        <div className="max-md:hidden max-w-[1800px] px-2 sm:px-4 lg:px-6 mx-auto h-20 flex items-center justify-between">
          <div>
            <Logo />
          </div>

          {user ? (
            <div className="flex items-center justify-center">
              <p className="pr-5">Hello , {user.fullName}</p>
              <div className="dark:hidden">
                <UserButton />
              </div>
              <div className="dark:block hidden">
                <UserButton
                  appearance={{
                    baseTheme: dark,
                  }}
                />
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-4">
              <RainbowButton className="h-1 py-4 px-3 rounded-md">
                <Link href="/sign-in">Log In</Link>
              </RainbowButton>

              <Button className="relative" variant={"secondary"}>
                <Link href="/sign-up">Register</Link>
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Nav */}

        <div className="md:hidden flex items-center justify-between px-4 sm:px-5  h-14">
          <div className="">
            <Logo />
          </div>
          <div className="flex items-center justify-center gap-2">
            <ThemeSwitcher className="rounded-full" />
            <div className="pt-1">
              <div className="dark:hidden">
                <UserButton />
              </div>
              <div className="dark:block hidden">
                <UserButton
                  appearance={{
                    baseTheme: dark,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
