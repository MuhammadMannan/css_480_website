import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ModeToggle } from "@/components/ui/toggle_theme";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"


export default function Home() {
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

          <p >I'm a computer science and software engineering student at the University of Washington.
          I am passionate about creating software and solving problems with data driven solutions.
          </p>

          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Here are some of my interests! 👀
          </h4>

          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      <li>Photography 📸</li>
      <li>Videogames 👾</li>
      <li>Software Development 👨🏻‍💻</li>
    </ul>
        </CardContent>
        <CardFooter>
        <Button>Reorder</Button>
        </CardFooter>
      </Card>
      </div>

    </div>
  );
}
