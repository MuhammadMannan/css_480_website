"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ModeToggle } from "@/components/ui/toggle_theme";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Link from "next/link"; // Import Link component from Next.js
import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function ThingsToReadPage() {
  const projects = [
    {
      title: "Why is it so difficult to play Fallout games on PC right now?",
      description:
        "Delving into modding, the author revives Fallout: New Vegas on PC with the help of a comprehensive guide, amidst disappointments over Bethesda's lack of support for older titles.",
      link: "https://www.polygon.com/24141738/fallout-games-pc-difficult-in-2024-new-vegas-mods",
    },
    {
      title:
        "Warhammer 40K’s Dark Angels are enjoying a golden age of new lore",
      description:
        "After decades of dormancy, Lion El'Jonson's resurrection sparks intrigue within the Dark Angels faction, setting the stage for a narrative shift and potential conflicts in the Warhammer 40,000 universe.",
      link: "https://www.polygon.com/tabletop-games/24046814/warhammer-40k-dark-angels-lore-codex-supplement-lion-risen",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];

  return (
    <div className="relative w-full flex justify-center items-center flex-col min-h-screen">
      <div className="absolute top-0 right-0 m-4 flex items-center space-x-4">
        <Menubar>
          <div className="flex items-center m-3 space-x-5 text-sm">
            <div>
              <Link href="/Home">Home</Link>
            </div>
            <div>Things To Read</div>
          </div>
        </Menubar>
        <ModeToggle />
      </div>

      <div className="font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <p className=" ">Things to Read</p>
      </div>

      <div className="px-10">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}
