import React from "react";

export default function Works() {
  const works = [
    {
      title: "hashbank: mobile bank",
      text: "Founding designer from concept to launch.",
    },
    {
      title: "Design System: hashbank",
      text: "Crafting a scalable atomic framework for speed and consistency.",
    },
    {
      title: "SpaceCargo: WMS",
      text: "Designing a logistics powerhouse for complex operations.",
    },
  ];

  return (
    <div className="mb-24">
      <div className="mx-auto max-w-2xl mt-24 flex flex-col gap-24">
        {works.map(({ title, text }, i) => (
          <div className="flex flex-col gap-3" key={i}>
            <div className="bg-gray-100 relative h-94 w-full rounded-xl"></div>
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
