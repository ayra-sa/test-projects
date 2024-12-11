import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Input } from "../ui/input";
import OptionCard from "../ui/option-card";

const data = ["Light", "Dark"];

const Appearance = () => {
  const [active, setActive] = useState<number>(0);

  const handleClick = (id: number) => {
    setActive(id);
  };
  return (
    <>
      <div className="flex gap-x-10 mb-14">
        <div className="flex-1">
          <div className="flex items-center gap-x-5">
            <div className="flex-1 space-y-2">
              <h3>Event Logo</h3>
              <p className="text-tabs">
                Brand your event with a logo that will be publically shown
                through out the event. For best results, use square photos
                (1:1).
              </p>

              <div className="flex items-center gap-x-3">
                <Button variant={"outline"}>Upload</Button>
                <p className="text-tabs">.JPG/.PNG Accepted</p>
              </div>
            </div>

            <div className="flex-1 space-y-2 flex flex-col items-center">
              <Image
                src={"/sample-img.png"}
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
            <h3>Display Language</h3>
            <p className="text-tabs">Localize the experience according your audience language.</p>
            <Input type="text" defaultValue={"English"} className="max-w-sm" />
          </div>

          <div className="space-y-2">
            <h3>Caption Theme</h3>
            <p className="text-tabs">
              Choose a theme color for your brand. We’ll use that throughout the
              public pages (Photo Wall, Album, etc.)
            </p>
            <div className="flex items-center space-x-3 border border-input w-fit rounded-md">
              <div className="w-10 h-10 bg-primary rounded-tl-md rounded-bl-md" />
              <input
                type="text"
                className="w-20 focus:outline-none focus:border-none"
                placeholder="#000000"
              />
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="space-y-2 mb-7">
            <h3>Caption Theme</h3>
            <p className="text-tabs">
              Change the theme color of the photo/video caption (if it has one)
            </p>
            <div className="flex gap-x-3">
              {data.map((item, id) => (
                <OptionCard
                  key={id}
                  isActive={active === id}
                  onClick={() => handleClick(id)}
                  title={item}
                />
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h3>Text Post Backgrounds</h3>
            <p className="text-tabs">
              Customize the backgrounds that can be used for uploading Text
              Posts.
            </p>
            <Button variant={"outline"}>Edit Background</Button>
          </div>
        </div>
      </div>

      <Button>Update</Button>
    </>
  );
};

export default Appearance;
