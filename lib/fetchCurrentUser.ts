import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function fetchCurrentUser() {
  const user = await currentUser();
  if (!user || !user.id) {
    redirect("/sign-in");
  }

  return user;
}
