import React from "react";

interface Props {
  title: string;
  desc?: string;
  isActive: boolean;
  large?: boolean;
  onClick: () => void;
}

const OptionCard: React.FC<Props> = ({ title, large = false, isActive, onClick, desc }) => {
  return (
    <div
      className={`${large ? "p-5" : "px-3 py-2"} border rounded-md cursor-default ${
        isActive
          ? "bg-primary/15 border-primary"
          : "bg-[#F7F7F7] border-transparent"
      }`}
      onClick={onClick}
    >
      <p className="font-semibold">{title}</p>
      {desc ? (
        <div className="mt-10">{desc}</div>
      ) : null}
    </div>
  );
};

export default OptionCard;
