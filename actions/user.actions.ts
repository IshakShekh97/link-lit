"use server";

import prisma from "@/lib/db";
import { fetchCurrentUser } from "@/lib/fetchCurrentUser";

export async function GetUserInfo() {
  const user = await fetchCurrentUser();

  const userInfo = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
    select: {
      PageInfo: true,
      firstName: true,
      email: true,
      fullName: true,
      profileImage: true,
      id: true,
      lastName: true,
      username: true,
    },
  });

  return userInfo;
}
