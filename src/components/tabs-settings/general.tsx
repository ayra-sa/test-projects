import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import OptionCard from "../ui/option-card";

const data = ["Wedding", "Party", "Conference", "Birthday", "Others"];

const General = () => {
  const [active, setActive] = useState<number>(0);

  const handleClick = (id: number) => {
    setActive(id);
  };
  return (
    <div>
      <div className="space-y-1 mb-7">
        <h2>Event Name</h2>
        <p className="text-tabs">Lorem ipsum dolor sit amet consectetur.</p>
        <Input
          type="text"
          defaultValue={"Dara & Arifin Weddings"}
          className="max-w-sm"
        />
      </div>
      <div className="space-y-1 mb-7">
        <h2>Event Date</h2>
        <p className="text-tabs">Lorem ipsum dolor sit amet consectetur.</p>
        <Input type="date" className="w-fit" />
      </div>
      <div className="space-y-1 mb-14">
        <h2>Event Type</h2>
        <p className="text-tabs">Lorem ipsum dolor sit amet consectetur.</p>
        <div className="flex gap-x-3">
          {data.map((item, id) => (
            <OptionCard key={id} title={item} isActive={active === id} onClick={() => handleClick(id)} />
          ))}
        </div>
      </div>

      <Button>Update</Button>
    </div>
  );
};

export default General;
