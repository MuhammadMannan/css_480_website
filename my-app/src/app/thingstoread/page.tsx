"use client";
import { ModeToggle } from "@/components/ui/toggle_theme";
import { Menubar } from "@/components/ui/menubar";
import Link from "next/link"; // Import Link component from Next.js
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function ThingsToReadPage() {
  const Projects = [
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
      title:
        "Microsoft’s OpenAI investment was triggered by Google fears, emails reveal",
      description:
        "Internal correspondence reveals Microsoft's strategic investment in OpenAI stemmed from concerns about lagging behind Google in AI development, leading to a transformative partnership and integration of AI technologies across Microsoft's products.",
      link: "https://www.theverge.com/2024/5/1/24146302/microsoft-openai-investment-google-worries-internal-emails",
    },
    {
      title: "Snapchat will soon let you edit your messages after sending",
      description:
        "Snapchat users will soon be able to edit sent messages, along with new AI reminders, Bitmoji fashion suggestions, and emoji reactions, expanding the platform's capabilities in messaging and personalization.",
      link: "https://www.theverge.com/2024/5/1/24146618/snapchat-message-edit-plus-feature-map-reactions-ai-reminders-bitmoji-fashion",
    },
    {
      title: "15 Libraries You Should Know if You Build with React",
      description:
        "In the world of modern web development, React shines as a powerful library for crafting dynamic and interactive user interfaces. Developed by Meta, React's component-based architecture simplifies UI creation and is favored by top websites like Facebook, Instagram, and Netflix.",
      link: "https://medium.com/@khushi1399gupta/15-libraries-you-should-know-if-you-build-with-react-088d7bb110e8",
    },
    {
      title: "Can Devin AI Replace Product Managers?",
      description:
        "Discover the groundbreaking unveiling of Devin, an AI software engineer by Cognition Labs, and delve into the future of product management! Explore how AI capabilities are reshaping the landscape of knowledge work and the evolving role of PMs in this captivating article.",
      link: "https://www.producthunt.com/stories/can-devin-ai-replace-product-managers",
    },
    {
      title: "Loom AI Workflows",
      description:
        "What if your workflow begins and ends with a Loom video? Now you can say it, show it, then let Loom write it for you: the best and easiest video messaging software now enables effective video and written communication for work. Introducing Loom AI workflows.",
      link: "https://www.producthunt.com/posts/loom-ai-workflows",
    },
    {
      title: "Claude for iOS",
      description:
        "Claude, the AI assistant built by Anthropic, is now available on your iPhone. Get instant help on a range of tasks whenever inspiration strikes—from brainstorming and writing to coding and beyond—by taking or uploading a photo, or starting a chat.",
      link: "https://www.producthunt.com/posts/claude-for-ios",
    },
    {
      title: "10 best free prototyping tools for web and mobile in 2023",
      description:
        "Embark on a journey through the dynamic world of design prototyping with our guide to the top free tools of 2023! Discover how these intuitive platforms revolutionize the creative process, empowering designers to bring their visions to life with ease and efficiency.",
      link: "https://www.producthunt.com/stories/best-free-prototyping-tools",
    },
    {
      title: "6 best code editors for Mac in 2023",
      description:
        "Discover the ultimate coding companion for your Mac with our comprehensive guide to the best code editors of 2023! Whether you're a seasoned developer or just starting out, find the perfect match for your coding style and unleash your full potential with these top-notch tools.",
      link: "https://www.producthunt.com/stories/best-code-editors-for-mac",
    },
  ];

  return (
    <div className="relative w-full flex justify-center items-center flex-col min-h-screen">
      <div className="absolute top-0 right-0 m-4 flex items-center space-x-4">
        <Menubar>
          <div className="flex items-center m-3 space-x-5 text-sm">
            <div>
              <Link href="/">Home</Link>
            </div>
            <div>Things To Read</div>
            <div>
              <Link href="interestingtopic">Interesting Topic</Link>
            </div>
          </div>
        </Menubar>
        <ModeToggle />
      </div>

      <div className="font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <p className=" ">Things to Read</p>
      </div>

      <div className="px-10">
        <HoverEffect items={Projects} />
      </div>
    </div>
  );
}
