import { ModeToggle } from "@/components/ui/toggle_theme";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Link from "next/link"; // Import Link component from Next.js
import React from "react";

export default function ThingsToReadPage() {
  return (
    <div className="relative w-full flex justify-center items-center flex-col min-h-screen">
      <div className="absolute top-0 right-0 m-4 flex items-center space-x-4">
        <Menubar>
          <MenubarMenu>
            <Link href="/Home">
              <MenubarTrigger>Home</MenubarTrigger>
            </Link>
          </MenubarMenu>
          <MenubarMenu>
            {/* Wrap the "Things To Read" trigger with Link */}
            <MenubarTrigger>Things To Read</MenubarTrigger>
          </MenubarMenu>
        </Menubar>
        <ModeToggle />
      </div>
    </div>
  );
}
