import React from "react";
import { Toogler } from "./toggler";
import { GetUserInfo } from "@/actions/user.actions";
import AvatarSelector from "./avatarSelector";
import InfoForm from "./infoForm";
import { SaveUserInfoToDb } from "@/actions/page.actions";
import SubmitBtn from "@/components/reusables/SubmitBtn";

const DashboardPageForm = async () => {
  const userInfo = await GetUserInfo();

  return (
    <div className="max-w-screen-sm max-2xl:mx-auto w-full">
      <form action={SaveUserInfoToDb}>
        <div className="py-5">
          <Toogler
            defaultColor={userInfo?.PageInfo[0].color as string}
            defaultImage={userInfo?.PageInfo[0].coverimage as string}
          />
        </div>
        <div className="flex items-center justify-center -mt-10">
          <AvatarSelector profileImage={userInfo?.profileImage as string} />
        </div>
        <div className="mt-5">
          <InfoForm
            bioInfo={userInfo?.PageInfo[0].bio || ""}
            displayNameInfo={userInfo?.PageInfo[0].displayName as string}
            locationInfo={userInfo?.PageInfo[0].location as string}
          />
        </div>

        <input type="hidden" name="pageId" value={userInfo?.PageInfo[0].id} />

        <SubmitBtn
          intialValue="Save Changes"
          loadingValue="Saving Changes..."
          className="mt-5 mx-auto w-[60%] flex items-center justify-center"
        />
      </form>
    </div>
  );
};

export default DashboardPageForm;
