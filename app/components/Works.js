import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Works() {
  const works = [
    {
      img: "/work10.png",
      title: "hashbank: mobile bank",
      text: "Founding designer from concept to launch.",
    },
    {
      img: "/work4.png",
      title: "Design System: hashbank",
      text: "Crafting a scalable atomic framework for speed and consistency.",
    },
    {
      img: "/work3.png",
      title: "SpaceCargo: WMS",
      text: "Designing a logistics powerhouse for complex operations.",
    },
  ];

  return (
    <div className="mb-24">
      <div className="mx-auto max-w-2xl mt-24 flex flex-col gap-24">
        {works.map(({ img, title, text }, i) => (
          <div className="flex flex-col gap-3" key={i}>
            <Link
              href={"#"}
              className="bg-gray-100 relative h-94 w-full rounded-xl"
            >
              <Image
                src={img}
                alt={title}
                width={280}
                height={280}
                className="absolute left-1/2 -translate-x-1/2 bottom-0 object-cover"
              />
            </Link>
            <div>
              <h3 className="text-gray-900 font-medium">{title}</h3>
              <p className="text-gray-500 text-sm">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
