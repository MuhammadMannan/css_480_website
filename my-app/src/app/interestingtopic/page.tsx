"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Menubar } from "@/components/ui/menubar";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/ui/toggle_theme";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link"; // Import Link component from Next.js
import * as React from "react";

type CarouselData = {
  image: string;
  heading: string;
  text: string;
};

const carouselData: CarouselData[] = [
  {
    image:
      "https://github.com/MuhammadMannan/css_480_website/blob/main/my-app/src/assets/image1.png?raw=true",
    heading: "Choose Your Path",
    text: "In the vast realm of Dungeons & Dragons, your character is a reflection of your choices, values, and aspirations. Every detail, from your race and class to your background and alignment, shapes the hero you'll become. With an intricate system of abilities and skills, you can craft a truly unique persona, ready to embark on epic adventures.",
  },
  {
    image: "https://avatars.githubusercontent.com/u/25876150?v=4",
    heading: "Unleash Your Imagination",
    text: "The worlds of D&D are bound only by the limits of your imagination. Whether you seek to traverse the sprawling cities and untamed wilds of classic fantasy realms or venture into uncharted territories where the impossible becomes reality, the game's rich lore and boundless creativity offer an endless tapestry of possibilities to explore.",
  },
  {
    image: "https://avatars.githubusercontent.com/u/25876150?v=4",
    heading: "Forge Unbreakable Bonds",
    text: "At its core, D&D is a shared storytelling experience that fosters camaraderie and lasting friendships. As you and your fellow adventurers face perilous challenges, overcome daunting obstacles, and unravel ancient mysteries together, an unbreakable bond is forged – a testament to the power of cooperation, trust, and collective imagination.",
  },
  {
    image: "https://avatars.githubusercontent.com/u/25876150?v=4",
    heading: "Legends are Born",
    text: "In the heat of battle, when the fate of kingdoms hangs in the balance, true heroes are born. Whether you're facing off against a fearsome dragon, an ancient evil, or a horde of merciless foes, D&D offers an unparalleled opportunity to showcase your valor, strategic prowess, and unwavering determination as you carve your legend into the annals of history.",
  },
  {
    image: "https://avatars.githubusercontent.com/u/25876150?v=4",
    heading: "Worlds Beyond Worlds",
    text: "From the classic realms of high fantasy to the outer reaches of science fiction and beyond, the multiverse of D&D offers an endless array of worlds to explore. Each setting is a unique tapestry, woven with its own cultures, histories, and mysteries, inviting you to immerse yourself in rich narratives and confront challenges unlike any you've faced before.",
  },
];

export default function InterestingTopicPage() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  );

  return (
    <div className="relative w-full flex justify-center items-center flex-col min-h-screen">
      <div className="absolute top-0 right-0 m-4 flex items-center space-x-4">
        <Menubar>
          <div className="flex items-center m-3 space-x-5 text-sm">
            <div>
              <Link href="/">Home</Link>
            </div>

            <div>
              <Link href="/thingstoread">Things To Read</Link>
            </div>
            <div>Interesting Topic</div>
          </div>
        </Menubar>
        <ModeToggle />
      </div>

      <div className="pt-20 w-1/2">
        <div className="pb-10">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Delving into the Immersive World of D&D
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            The realm of Dungeons & Dragons is a vast and captivating one, where
            imagination knows no bounds. This iconic tabletop roleplaying game
            has been enchanting players for decades, offering an escape into
            fantastical realms filled with adventure, camaraderie, and limitless
            possibilities. At its core, D&D is a collaborative storytelling
            experience. Players assume the roles of brave heroes, each with
            their own unique talents and backstories, embarking on epic quests
            alongside their fellow adventurers. Whether battling fearsome
            dragons, unraveling ancient mysteries, or forging alliances with
            powerful entities, the game&apos;s rich lore and intricate mechanics
            create an immersive and ever-evolving narrative.
          </p>

          <Image
            src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Dungeons_%26_Dragons_5th_Edition_logo.svg/2880px-Dungeons_%26_Dragons_5th_Edition_logo.svg.png"
            alt="mannan"
            width={1000}
            height={1000}
            className="rounded-sm, pt-10"
          />
          <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            The King&apos;s Plan
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            One of the most alluring aspects of D&D is its versatility. The
            game&apos;s rulebooks serve as a foundation, providing a framework
            for character creation, combat encounters, and various game
            mechanics. However, the true magic lies in the boundless creativity
            of the players and the Dungeon Master (DM), who orchestrates the
            adventure. From sprawling medieval fantasy realms to futuristic
            sci-fi settings, the possibilities are endless, allowing players to
            craft their own unique stories and worlds. Beyond the thrilling
            gameplay, D&D fosters a strong sense of community. Gaming groups
            often form lasting friendships, bonding over shared experiences and
            inside jokes that only those who have faced perilous challenges
            together can truly appreciate. The game encourages cooperation,
            problem-solving, and strategic thinking, making it a captivating and
            enriching experience for players of all ages and backgrounds. In a
            world where digital entertainment dominates, D&D offers a refreshing
            return to the simplicity of pencils, paper, and the boundless
            expanse of the imagination. Whether you&apos;re a seasoned
            adventurer or a newcomer to the world of tabletop roleplaying, the
            allure of D&D is undeniable – a testament to the enduring power of
            storytelling and the human spirit&apos;s desire for escapism and
            camaraderie.
          </p>
          <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            Explore the Realms of Adventure
          </h3>
          <div className="pt-3">
            <Carousel
              plugins={[plugin.current]}
              className="h-full"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent className="h-full">
                {carouselData.map((item, index) => (
                  <CarouselItem key={index} className="h-full">
                    <div className="p-1 h-full">
                      <Card className="w-full h-[30rem] flex">
                        <CardContent className=" flex-col justify-center w-1/2 p-6">
                          <h2 className="text-2xl font-bold">{item.heading}</h2>
                          <Separator />
                          <p className="text-lg mt-2">{item.text}</p>
                        </CardContent>
                        <div className="flex items-center justify-center w-1/2 pr-6">
                          <Image
                            src={item.image}
                            alt={`Image ${index + 1}`}
                            width={500}
                            height={500}
                            className="rounded-sm"
                          />
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
