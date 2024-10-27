import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Input } from "@/components/ui/input";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Hero = async () => {
  const user = await currentUser();

  return (
    <div className="flex h-[70vh] w-full">
      <div className="flex relative flex-col items-center pt-20 z-50  h-full w-full text-center">
        <span className="dark:bg-secondary/70 bg-slate-200 mb-2 px-5 py-2 rounded-full font-bold capitalize md:text-xl text-xs sm:text-sm">
          Share Your Links
        </span>
        <span className="dark:bg-secondary/70 bg-slate-200 mb-10 px-5 py-2 rounded-full font-bold capitalize md:text-xl text-xs sm:text-sm">
          With link Lit
        </span>
        <h1 className="xl:text-8xl md:text-6xl text-5xl font-bold text-pretty max-w-4xl capitalize">
          Your One Stop for <br />
          <span className="bg-gradient-to-br from-amber-500 to-emerald-400 text-transparent bg-clip-text">
            all Links
          </span>
        </h1>
        <p className="text-sm  xl:text-xl md:text-base mt-8 text-pretty max-w-sm md:max-w-md xl:max-w-2xl text-muted-foreground">
          Share your links with the world and discover new connections. Stay
          updated and explore what others are sharing!
        </p>

        <div className="mt-5 flex relative bg-input border-foreground border dark:border-none rounded-md items-center justify-center mx-3">
          <span className="absolute left-4 top-[7px] text-base">
            linklit.to/
          </span>
          <Input
            placeholder="username"
            value={user?.username || undefined}
            className="bg-transparent pl-[95px] text-base"
          />
        </div>

        <div className="flex items-center gap-5 mt-5 md:hidden">
          <SignedIn>
            <div className="flex flex-col gap-3">
              hello, {user?.fullName}
              <RainbowButton className="h-1 py-5 px-5 rounded-md">
                <Link
                  href={"/dashboard"}
                  className="flex items-center justify-center gap-2"
                >
                  Dashboard
                  <ArrowTopRightIcon className="size-5 font-bold" />
                </Link>
              </RainbowButton>
            </div>
          </SignedIn>

          <SignedOut>
            <Link
              className="px-6 py-2 bg-foreground text-background rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
              href={"/sign-in"}
            >
              Log In
            </Link>

            <Link
              href={"/sign-up"}
              className="px-4 py-2 group rounded-md border border-black bg-primary-foreground text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255)] transition duration-200 flex items-center gap-2"
            >
              Try For Free{" "}
              <ArrowUpRight className="group-hover:animate-bounce" />
            </Link>
          </SignedOut>
        </div>
        <div className="flex items-center gap-5 mt-5 max-md:hidden">
          <SignedIn>
            <RainbowButton className="h-1 py-5 px-5 rounded-md">
              <Link
                href={"/dashboard"}
                className="flex items-center justify-center gap-2"
              >
                Dashboard
                <ArrowTopRightIcon className="size-5 font-bold" />
              </Link>
            </RainbowButton>
          </SignedIn>

          <SignedOut>
            <Link
              className="px-6 py-2 bg-foreground text-background rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
              href={"/sign-in"}
            >
              Log In
            </Link>

            <Link
              href={"/sign-up"}
              className="px-4 py-2 group rounded-md border border-black bg-primary-foreground text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255)] transition duration-200 flex items-center gap-2"
            >
              Try For Free{" "}
              <ArrowUpRight className="group-hover:animate-bounce" />
            </Link>
          </SignedOut>
        </div>
      </div>

      <ThemeSwitcher className="fixed bottom-10 right-14 max-md:hidden" />
    </div>
  );
};

export default Hero;
