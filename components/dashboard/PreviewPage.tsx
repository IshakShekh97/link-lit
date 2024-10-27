import { GetUserInfo } from "@/actions/user.actions";
import Image from "next/image";
import React from "react";
import { Avatar, AvatarImage } from "../ui/avatar";

const PreviewPage = async () => {
  const userdata = await GetUserInfo();
  const pageData = userdata?.PageInfo[0];
  return (
    // <div className="max-2xl:hidden bg-accent w-full p-5 rounded-xl		">
    //   <div
    //     style={{
    //       backgroundColor: pageData?.color as string,
    //     }}
    //     className="bg-popover size-full rounded-xl p-10"
    //   >
    //     <div className="rounded-xl">
    //       <div className="relative w-full h-60">
    //         <Image
    //           src={pageData?.coverimage as string}
    //           alt={pageData?.id as string}
    //           fill
    //           className="w-full object-cover rounded-xl"
    //         />
    //       </div>
    //       <Avatar className="mx-auto flex size-40">
    //         <AvatarImage src={userdata?.profileImage as string} />
    //       </Avatar>
    //     </div>
    //   </div>
    // </div>

    <div className="">sd</div>
  );
};

export default PreviewPage;
