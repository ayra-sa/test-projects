import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";

const Slideshow = () => {
  return (
    <div className="w-[40%]">
      <div className="flex items-center gap-x-5">
        <div className="flex-1 space-y-2">
          <h3>Slideshow Background</h3>
          <p className="text-tabs">Customize the background of the Slideshow.</p>

          <div className="flex items-center gap-x-3">
            <Button variant={"outline"}>Upload</Button>
            <p className="text-tabs">.JPG/.PNG Accepted</p>
          </div>
        </div>

        <div className="flex-1 space-y-2 flex flex-col items-center">
          <Image
            src={"/sample-img-2.svg"}
            alt="img"
            width={0}
            height={0}
            sizes="100vw"
            className="w-auto h-auto"
          />
          <span className="mt-2 underline text-tabs">Remove</span>
        </div>
      </div>

      <div className="space-y-2 my-7">
        <h3>Slideshow Duration</h3>
        <p className="text-tabs">Adjust how long each media is displayed in the Slideshow</p>
        <div className="flex gap-x-3">
          <div className="flex gap-x-2 items-center">
            <h3>Image</h3>
            <div className="flex flex-col items-center">
              <Input type="number" defaultValue={8} className="w-14" />
              <span className="text-muted text-sm">seconds</span>
            </div>
          </div>
          <div className="flex gap-x-2 items-center">
            <h3>Video</h3>
            <div className="flex flex-col items-center">
              <Input type="number" defaultValue={12} className="w-14" />
              <span className="text-muted text-sm">seconds</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-7">
        <div className="space-y-2">
            <h3>Hide Slideshow QR Code</h3>
            <p className="text-tabs">Turn on to remove the QR code from the Slideshow page.</p>
        </div>

        <Switch />
      </div>

      <div className="flex items-center justify-between mb-12">
        <div className="space-y-2">
            <h3>Slideshow Video Sound</h3>
            <p className="text-tabs">This will enable videos sound when played in Slideshow.</p>
        </div>

        <Switch />
      </div>

      <Button>Update</Button>
    </div>
  );
};

export default Slideshow;
