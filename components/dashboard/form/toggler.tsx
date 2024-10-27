"use client";

import { GetColorName } from "hex-color-to-color-name";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { UploadButton, UploadDropzone } from "@/lib/uploadthing";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { toast } from "sonner";
import Image from "next/image";

interface TooglerProps {
  defaultImage?: string;
  defaultColor?: string;
}

export const Toogler = ({ defaultColor, defaultImage }: TooglerProps) => {
  const [image, setImage] = useState<string | undefined>(
    defaultImage || undefined
  );
  const [color, setColor] = useState<string | undefined>(
    defaultColor || undefined
  );
  const [toggleMode, setToggleMode] = useState<"image" | "color">(
    defaultImage ? "image" : "color"
  );

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center py-3 px-2 rounded bg-secondary my-5">
        <div className="">
          <input
            checked={toggleMode === "image"}
            type="radio"
            name="bgtype"
            className="peer hidden"
            id="image"
            value={"image"}
            onChange={() => {
              setToggleMode("image");
            }}
          />
          <label
            className="peer-checked:bg-blue-500 rounded px-5 py-2"
            htmlFor="image"
            onClick={() => {
              setToggleMode("image");
            }}
          >
            Image
          </label>
        </div>
        <div className="">
          <Input
            onChange={() => {
              setToggleMode("color");
            }}
            checked={toggleMode === "color"}
            type="radio"
            name="bgtype"
            className="peer hidden"
            id="color"
            defaultValue={"color"}
          />
          <label
            className="peer-checked:bg-blue-500 rounded px-5 py-2"
            htmlFor="color"
            onClick={() => {
              setToggleMode("color");
            }}
          >
            Color
          </label>
        </div>
      </div>

      <div className="bg-transparent max-h-80  w-full rounded-xl border-2 border-dashed overflow-hidden">
        {toggleMode === "image" ? (
          <>
            {image ? (
              <div className="w-full h-96 relative">
                <Image
                  src={image}
                  // width={1000}
                  // height={1000}
                  fill
                  alt="image"
                  className="object-center w-full"
                />

                <div className="absolute bottom-32  w-full flex items-center justify-center">
                  <div className="bg-background/20 backdrop-blur-3xl px-5 pt-5 pb-3 rounded-xl">
                    <UploadButton
                      appearance={{
                        allowedContent: "text-primary",
                      }}
                      onClientUploadComplete={(data) => {
                        setImage(data[0].url);
                        toast.success("Image uploaded successfully");
                      }}
                      onUploadError={(error) => {
                        toast.error(error.message);
                      }}
                      onUploadAborted={() => {
                        toast.warning("Upload Aborted");
                      }}
                      endpoint="imageUploader"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-96 flex items-center justify-center">
                <UploadDropzone
                  appearance={{
                    container: "bg-transparent border-transparent",
                  }}
                  endpoint="imageUploader"
                  className="bg-transparent border-transparent "
                  onClientUploadComplete={(data) => {
                    setImage(data[0].url);
                    toast.success("Image uploaded successfully");
                  }}
                  onUploadError={(error) => {
                    toast.error(error.message);
                  }}
                />
              </div>
            )}
          </>
        ) : (
          <div
            className={cn(`flex items-center justify-center size-full`)}
            style={{
              backgroundColor: color,
            }}
          >
            <Card className="max-w-[250px] my-20 w-full text-center">
              <CardHeader>
                <CardTitle>Select Color</CardTitle>
              </CardHeader>
              <CardContent>
                <Input
                  type="color"
                  value={color}
                  onChange={(e) => {
                    setColor(e.target.value);
                  }}
                  className="w-full"
                />
              </CardContent>
              <CardFooter className="flex items-center justify-center">
                <p
                  style={{
                    color: color,
                  }}
                >
                  {GetColorName(color as string)}
                </p>
              </CardFooter>
            </Card>
          </div>
        )}

        <input type="hidden" name="coverImage" value={image} />
        <input type="hidden" name="coverColor" value={color} />
      </div>
    </div>
  );
};
