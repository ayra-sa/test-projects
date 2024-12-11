import React, { useState } from "react";
import AlbumCard from "@/components/ui/album-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout";

const data = [
  {
    image: "/sample-img.png",
    title: "Dara & Arifin Weddings",
  },
  {
    image: "/sample-img.png",
    title: "Dara & Arifin Weddings",
  },
  {
    image: "/sample-img.png",
    title: "Dara & Arifin Weddings",
  },
];

const Album = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setActiveCard(id);
  };

  return (
    <Layout title="Album">
      <div>
        <h2 className="text-2xl mb-4">Album</h2>
        <div className="flex items-center gap-x-3 mb-5">
          {data.map((item, id) => (
            <AlbumCard
              key={id}
              image={item.image}
              title={item.title}
              isActive={activeCard === id}
              onClick={() => handleCardClick(id)}
            />
          ))}
        </div>

        <Card>
          <CardHeader className="border-b mb-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <CardTitle>Beach Club Party with Colleagues</CardTitle>
                <Button>Upload</Button>
              </div>

              <div className="flex items-center gap-x-3">
                <p>78 photos of Unlimited Photos</p>
                <Button variant={"outline"}>Album Cover</Button>
                <Button variant={"outline"}>Download</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-8 gap-5">
              {Array.from({ length: 24 }, (_, id) => (
                <div key={id} className="w-full h-32 bg-[#F2F2F2] rounded-md" />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Album;
