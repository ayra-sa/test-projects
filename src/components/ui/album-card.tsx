import Image from "next/image";
import React from "react";

interface CardProps {
  image: string;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const AlbumCard: React.FC<CardProps> = ({
  image,
  title,
  isActive,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`border rounded-md cursor-pointer transition-all ${
        isActive
          ? "border-primary"
          : "border-gray-300"
      }`}
    >
      <Image
        src={image}
        alt={title}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-32 object-cover"
      />
      <div className={`p-4 rounded-br-md rounded-bl-md ${isActive ? "bg-primary text-white" : "bg-white text-black"}`}>
        <h3 className="font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default AlbumCard;
