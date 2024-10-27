"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

interface InfoFormProps {
  displayNameInfo: string;
  locationInfo: string;
  bioInfo: string;
}

const InfoForm = ({
  bioInfo,
  displayNameInfo,
  locationInfo,
}: InfoFormProps) => {
  const [displayName, setDisplayName] = useState<undefined | string>(undefined);
  const [location, setLocation] = useState<undefined | string>(undefined);
  const [bio, setBio] = useState<undefined | string>(undefined);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <Label>Display name</Label>
        <Input
          type="text"
          placeholder="Display name"
          name="displayName"
          value={displayName}
          defaultValue={displayNameInfo}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Location</Label>
        <Input
          type="text"
          placeholder="Location"
          name="location"
          value={location}
          defaultValue={locationInfo}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Bio</Label>
        <Textarea
          placeholder="Your Bio Here..."
          name="bio"
          className="h-32 resize-none"
          value={bio}
          defaultValue={bioInfo}
          onChange={(e) => setBio(e.target.value)}
        />
      </div>
    </div>
  );
};

export default InfoForm;
