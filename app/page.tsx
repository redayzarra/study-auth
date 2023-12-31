import { ModeToggle } from "@/components/ModeToggle";
import LoginButton from "@/components/auth/LoginButton";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center">
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
          <LoginButton>
            <Button size="lg">Sign In</Button>
          </LoginButton>
          <ModeToggle />
        </div>
      </div>
    </main>
  );
}
