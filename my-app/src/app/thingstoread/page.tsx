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

export default function ThingsToReadPage() {
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
    </div>
  );
}
