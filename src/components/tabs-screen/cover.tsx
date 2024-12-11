import React from "react";
import { Input } from "../ui/input";
import Image from "next/image";
import { Button } from "../ui/button";


const Cover = () => {
  return (
    <div>
      <div className="space-y-1 mb-7">
        <h2>Title</h2>
        <p className="text-tabs">Lorem ipsum dolor sit amet consectetur.</p>
        <Input
          type="text"
          defaultValue={"Dara & Arifin Weddings"}
          className="max-w-sm"
        />
      </div>
      <div className="space-y-1 mb-7">
        <h2>When does it happen?</h2>
        <p className="text-tabs">Lorem ipsum dolor sit amet consectetur.</p>
        <Input type="date" className="w-fit" />
      </div>

      <div className="flex items-center gap-x-5">
        <div className="flex-1 space-y-2">
          <h3>Event Logo</h3>
          <p className="text-tabs">
            Brand your event with a logo that will be publically shown through
            out the event. For best results, use square photos (1:1).
          </p>

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
    </div>
  );
};

export default Cover;
