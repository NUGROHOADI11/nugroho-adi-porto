import React from "react";
import Image from "next/image";
import Header from "@/components/ui/Header";

const galleryItems = [
  { id: 1, url: "https://picsum.photos/id/10/800/1200" },
  { id: 2, url: "https://picsum.photos/id/20/800/600" },
  { id: 3, url: "https://picsum.photos/id/30/800/900" },
  { id: 4, url: "https://picsum.photos/id/40/800/1000" },
  { id: 5, url: "https://picsum.photos/id/50/800/700" },
  { id: 6, url: "https://picsum.photos/id/60/800/1100" },
  { id: 7, url: "https://picsum.photos/id/70/800/800" },
  { id: 8, url: "https://picsum.photos/id/80/800/1300" },
];

const GaleryPage = () => {
  return (
    <div>
      <Header title={"Gallery"} />

      <div className="p-4 columns-1 gap-4 sm:columns-2 xl:columns-3">
        {galleryItems.map((item) => (
          <div key={item.id} className="mb-4 break-inside-avoid">
            <Image
              src={item.url}
              alt={"Galery item " + item.id}
              width={500}
              height={200}
              className="w-full h-auto block rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GaleryPage;
