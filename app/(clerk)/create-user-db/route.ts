import prisma from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function GET() {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  let dbUser = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
  });

  if (dbUser) {
    if (dbUser?.profileImage !== user.imageUrl) {
      dbUser = await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          profileImage: user.imageUrl || "",
        },
      });
    }

    return redirect("/dashboard");
  }

  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        id: user.id,
        username: user.username as string,
        email: user.emailAddresses[0].emailAddress,
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        fullName: user.fullName || "",
        profileImage: user.imageUrl || "",
      },
    });
  }

  await prisma.pageInfo.create({
    data: {
      userId: user.id,
      displayName: user.fullName || "",
      bio: "",
      location: "",
    },
    include: {
      user: true,
    },
  });

  return redirect("/dashboard");
}
