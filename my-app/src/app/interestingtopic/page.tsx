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
    image: "https://avatars.githubusercontent.com/u/25876150?v=4",
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
            powerful entities, the game's rich lore and intricate mechanics
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
            The King's Plan
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            One of the most alluring aspects of D&D is its versatility. The
            game's rulebooks serve as a foundation, providing a framework for
            character creation, combat encounters, and various game mechanics.
            However, the true magic lies in the boundless creativity of the
            players and the Dungeon Master (DM), who orchestrates the adventure.
            From sprawling medieval fantasy realms to futuristic sci-fi
            settings, the possibilities are endless, allowing players to craft
            their own unique stories and worlds. Beyond the thrilling gameplay,
            D&D fosters a strong sense of community. Gaming groups often form
            lasting friendships, bonding over shared experiences and inside
            jokes that only those who have faced perilous challenges together
            can truly appreciate. The game encourages cooperation,
            problem-solving, and strategic thinking, making it a captivating and
            enriching experience for players of all ages and backgrounds. In a
            world where digital entertainment dominates, D&D offers a refreshing
            return to the simplicity of pencils, paper, and the boundless
            expanse of the imagination. Whether you're a seasoned adventurer or
            a newcomer to the world of tabletop roleplaying, the allure of D&D
            is undeniable – a testament to the enduring power of storytelling
            and the human spirit's desire for escapism and camaraderie.
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
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            "After all," he said, "everyone enjoys a good joke, so it's only
            fair that they should pay for the privilege."
          </blockquote>

          <p className="leading-7 [&:not(:first-child)]:mt-6">
            The king's subjects were not amused. They grumbled and complained,
            but the king was firm:
          </p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>1st level of puns: 5 gold coins</li>
            <li>2nd level of jokes: 10 gold coins</li>
            <li>3rd level of one-liners : 20 gold coins</li>
          </ul>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            As a result, people stopped telling jokes, and the kingdom fell into
            a gloom. But there was one person who refused to let the king's
            foolishness get him down: a court jester named Jokester.
          </p>
          <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            Jokester's Revolt
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Jokester began sneaking into the castle in the middle of the night
            and leaving jokes all over the place: under the king's pillow, in
            his soup, even in the royal toilet. The king was furious, but he
            couldn't seem to stop Jokester.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            And then, one day, the people of the kingdom discovered that the
            jokes left by Jokester were so funny that they couldn't help but
            laugh. And once they started laughing, they couldn't stop.
          </p>
          <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            The People's Rebellion
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            The people of the kingdom, feeling uplifted by the laughter, started
            to tell jokes and puns again, and soon the entire kingdom was in on
            the joke.
          </p>
          <div className="my-6 w-full overflow-y-auto">
            <table className="w-full">
              <thead>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                    King's Treasury
                  </th>
                  <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                    People's happiness
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    Empty
                  </td>
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    Overflowing
                  </td>
                </tr>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    Modest
                  </td>
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    Satisfied
                  </td>
                </tr>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    Full
                  </td>
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    Ecstatic
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            The king, seeing how much happier his subjects were, realized the
            error of his ways and repealed the joke tax. Jokester was declared a
            hero, and the kingdom lived happily ever after.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            The moral of the story is: never underestimate the power of a good
            laugh and always be careful of bad ideas.
          </p>
        </div>
      </div>
    </div>
  );
}
