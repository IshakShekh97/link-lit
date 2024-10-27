"use server";
import prisma from "@/lib/db";
import { fetchCurrentUser } from "@/lib/fetchCurrentUser";
import { revalidatePath } from "next/cache";

export async function SaveUserInfoToDb(formData: FormData) {
  const user = await fetchCurrentUser();

  const data = {
    displayName: formData.get("displayName") as string,
    location: formData.get("location") as string,
    bio: formData.get("bio") as string,
    profileImage: user.imageUrl,
    coverImage: formData.get("coverImage") as string,
    coverColor: formData.get("coverColor") as string,
    pageId: formData.get("pageId") as string,
  };

  const userData = await prisma.pageInfo.findUnique({
    where: {
      id: data.pageId,
      userId: user.id,
    },
  });

  if (data.bio !== userData?.bio) {
    await prisma.pageInfo.update({
      where: {
        id: data.pageId,
        userId: user.id,
      },
      data: {
        bio: data.bio,
      },
    });
  }

  if (data.location !== userData?.location) {
    await prisma.pageInfo.update({
      where: {
        id: data.pageId,
        userId: user.id,
      },
      data: {
        location: data.location,
      },
    });
  }

  if (data.coverColor !== userData?.color) {
    await prisma.pageInfo.update({
      where: {
        id: data.pageId,
        userId: user.id,
      },
      data: {
        color: data.coverColor,
      },
    });
  }

  if (data.displayName !== userData?.displayName) {
    await prisma.pageInfo.update({
      where: {
        id: data.pageId,
        userId: user.id,
      },
      data: {
        displayName: data.displayName,
      },
    });
  }

  if (data.coverImage !== userData?.coverimage) {
    await prisma.pageInfo.update({
      where: {
        id: data.pageId,
        userId: user.id,
      },
      data: {
        coverimage: data.coverImage,
      },
    });
  }

  revalidatePath("/dashboard");
}
