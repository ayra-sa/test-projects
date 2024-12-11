import React, { useState } from "react";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import OptionCard from "../ui/option-card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import Tabs from "../ui/tabs";
import Cover from "../tabs-screen/cover";
import Guest from "../tabs-screen/guest";

const dataMedia = ["Photos", "Videos", "Text"];
const dataPermission = [
  {
    title: "View & Upload",
    desc: "Guests can upload new photos & view existing ones",
  },
  {
    title: "View Only",
    desc: "Guests can view existing photos but can’t upload new ones",
  },
  {
    title: "Upload Only",
    desc: "Guests can upload new photos & view existing ones",
  },
];

const tabData = [
  {
    label: "Cover",
    content: <Cover />,
  },
  {
    label: "Guest Form",
    content: <Guest />,
  },
];

const Moderation = () => {
  const [active, setActive] = useState<number>(0);
  const [activePermission, setActivePermission] = useState<number>(0);

  const handleClick = (id: number) => {
    setActive(id);
  };
  const handleClickPermission = (id: number) => {
    setActivePermission(id);
  };
  return (
    <div className="w-[60%]">
      <div className="space-y-1 my-7">
        <h3>Welcome Screen</h3>
        <p className="text-tabs">
          Set up an introductory screen for guests’ first visit, with a form to
          collect their info.
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"outline"}>Edit Welcome Screen</Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[800px] bg-white">
            <DialogHeader>
              <DialogTitle>Welcome Screen Settings</DialogTitle>
              <DialogDescription>
                Set up a welcome screen that appears once for time guest
              </DialogDescription>
            </DialogHeader>
            <Tabs tabs={tabData} />
            <DialogFooter className="md:justify-start">
              <div className="flex items-center gap-x-3">
                <Button>Save</Button>
                <Button variant={"outline"}>Cancel</Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center gap-x-20 mb-7 w-fit">
        <div className="space-y-1">
          <h3>Hide Slideshow QR Code</h3>
          <p className="text-tabs">
            Turn on to remove the QR code from the Slideshow page.
          </p>
        </div>

        <Switch />
      </div>

      <div className="space-y-1 my-7">
        <h3>Allowed Media Types</h3>
        <p className="text-tabs">
          Control what type of media can be uploaded to your event.
        </p>
        <div className="flex gap-x-3">
          {dataMedia.map((item, id) => (
            <OptionCard
              key={id}
              title={item}
              isActive={active === id}
              onClick={() => handleClick(id)}
            />
          ))}
        </div>
      </div>
      <div className="space-y-1 mb-7">
        <h3>Digital Album</h3>
        <p className="text-tabs">
          Control what type of media can be uploaded to your event.
        </p>
        <div className="flex gap-x-3">
          {dataPermission.map((item, id) => (
            <OptionCard
              key={id}
              large
              title={item.title}
              desc={item.desc}
              isActive={activePermission === id}
              onClick={() => handleClickPermission(id)}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center gap-x-20 w-fit mb-12">
        <div className="space-y-1">
          <h3>Disable Download</h3>
          <p className="text-tabs">
            Hide the download button to prevent guests from downloading
            photos/videos in the album page.
          </p>
        </div>

        <Switch />
      </div>

      <Button>Update</Button>
    </div>
  );
};

export default Moderation;
