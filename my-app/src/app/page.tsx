"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Menubar } from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/toggle_theme";
import Link from "next/link"; // Import Link component from Next.js
import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const interests = [
  "Photography 📸",
  "Videogames 👾",
  "Software Development ‍👨🏻‍💻",
]; // Array to store your interests

export default function Home() {
  const [currentInterests, setCurrentInterests] = React.useState(interests); // State to hold the list items

  const reorderList = () => {
    // Shuffle the list items using the Fisher-Yates algorithm
    for (let i = currentInterests.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [currentInterests[i], currentInterests[j]] = [
        currentInterests[j],
        currentInterests[i],
      ];
    }
    setCurrentInterests([...currentInterests]); // Update state to trigger re-render
  };

  return (
    <div className="relative w-full flex justify-center items-center flex-col min-h-screen">
      <div className="absolute top-0 right-0 m-4 flex items-center space-x-4">
        <Menubar>
          <div className="flex items-center m-3 space-x-5 text-sm">
            <div>Home</div>
            <div>
              <Link href="/thingstoread">Things To Read</Link>
            </div>
            <div>
              <Link href="interestingtopic">Interesting Topic</Link>
            </div>
          </div>
        </Menubar>
        <ModeToggle />
      </div>
      <div className="w-2/5">
        <Card>
          <CardHeader>
            <CardTitle>Hi i&apos;m Muhammad Mannan 👋</CardTitle>
            <Separator />
            <CardDescription className="text-[#333E4D] dark:text-[#ACB8C8]">
              CSSE Student @ University of Washington Bothell
            </CardDescription>
          </CardHeader>
          <CardContent className="flex ">
            <div>
              <p>
                I&apos;m a computer science and software engineering student at
                the University of Washington. I am passionate about creating
                software and solving problems with data-driven solutions.
              </p>

              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-5">
                Here are some of my interests!
              </h4>

              <ul className="mb-5 ml-6 list-disc [&>li]:mt-2">
                {currentInterests.map((interest, index) => (
                  <li key={index}>{interest}</li>
                ))}
              </ul>
              <Button onClick={reorderList}>Reorder</Button>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="https://avatars.githubusercontent.com/u/25876150?v=4"
                alt="mannan"
                width={1000}
                height={1000}
                className="rounded-sm"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
