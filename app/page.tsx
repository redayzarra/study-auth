import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-background to-muted-foreground/75 dark:from-accent dark:to-background">
      <div className="space-y-6 flex flex-col items-center justify-center">
        <h1
          className={cn(
            "text-6xl font-semibold drop-shadow-md",
            font.className
          )}
        >
          Auth
        </h1>
        <p className="text-lg ">Authentication service</p>
        <div className="flex items-center space-x-2">
          <Button size="lg">Sign In</Button>
          <ModeToggle />
        </div>
      </div>
    </main>
  );
}
