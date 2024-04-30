"use client";
//import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Menubar } from "@/components/ui/menubar";
import { Button } from "@/components/ui/moving-border";
import { ModeToggle } from "@/components/ui/toggle_theme";
import Link from "next/link"; // Import Link component from Next.js
import React from "react";

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
          </div>
        </Menubar>
        <ModeToggle />
      </div>
      <div className="w-2/5">
        <Card>
          <CardHeader>
            <CardTitle>Hi i&apos;m Muhammad Mannan 👋</CardTitle>
            <CardDescription>
              CSSE Student @ University of Washington Bothell
            </CardDescription>
          </CardHeader>
          <CardContent className="flex items-center">
            <div className="space-y-3">
              <p>
                I&apos;m a computer science and software engineering student at
                the University of Washington. I am passionate about creating
                software and solving problems with data-driven solutions.
              </p>

              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Here are some of my interests!
              </h4>

              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                {currentInterests.map((interest, index) => (
                  <li key={index}>{interest}</li>
                ))}
              </ul>
            </div>
            <div className="ml-6">
              <img
                src="https://avatars.githubusercontent.com/u/25876150?v=4"
                alt="mannan"
                width={1000} // Adjust width as needed
                height={1000} // Adjust height as needed
                className="rounded-sm"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              borderRadius="1.25rem"
              onClick={reorderList}
            >
              Reorder
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
