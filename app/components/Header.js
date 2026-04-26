"use client";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Header() {
  const pathname = usePathname();

  const tabs = [
    { name: "Work", path: "/" },
    { name: "Labs", path: "/labs" },
    { name: "About", path: "/about" },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-18 relative">
      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition">
        <Image
          src="/photo.png"
          alt="Irakli"
          width={96}
          height={96}
          className="object-cover"
          priority
        />
      </div>

      <div className="text-center mt-6">
        <h1 className="text-2xl font-semibold text-zinc-900">
          Irakli Sadgobelashvili
        </h1>

        <div className="flex items-center justify-center gap-2 text-zinc-500  mt-1">
          <span className="text-md">Frontend Developer</span>
          <BadgeCheck className="text-blue-500 w-6 h-6" />
        </div>
      </div>

      <div className="flex gap-8 mt-24 bg-gray-100 p-2 rounded-xl">
        {tabs.map(({ name, path }) => {
          const isActive = pathname === path;

          return (
            <Link
              key={path}
              href={path}
              className={`px-6 py-2 rounded-lg text-md font-medium transition
                ${
                  isActive
                    ? "bg-white shadow text-black"
                    : "text-gray-500 hover:text-black"
                }`}
            >
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
