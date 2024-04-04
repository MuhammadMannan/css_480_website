"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ModeToggle } from "@/components/ui/toggle_theme";
import { Button } from "@/components/ui/button";
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
      [currentInterests[i], currentInterests[j]] = [currentInterests[j], currentInterests[i]];
    }
    setCurrentInterests([...currentInterests]); // Update state to trigger re-render
  };

  return (
    <div className="relative w-full flex justify-center items-center flex-col min-h-screen">
      <div className="absolute top-0 right-0 m-4">
        <ModeToggle />
      </div>
      <div className="w-1/5">
        <Card>
          <CardHeader>
            <CardTitle>Hi i'm Muhammad Mannan 👋</CardTitle>
            <CardDescription>CSSE Student @ University of Washington Bothell</CardDescription>
          </CardHeader>
          <CardContent>

            <div className="flex flex-col items-center">
              <img src="https://avatars.githubusercontent.com/u/25876150?v=4" alt="mannan" className="w-1/2 h-1/2 rounded-full" />
            </div>

            

            <p>
              I'm a computer science and software engineering student at the University of Washington.
              I am passionate about creating software and solving problems with data driven solutions.
            </p>

            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Here are some of my interests! 
            </h4>

            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              {currentInterests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button onClick={reorderList}>Reorder</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
