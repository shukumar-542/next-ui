import { Spotlight } from "@/components/ui/spotlight-new";
import { WavyBackground } from "@/components/ui/wavy-background";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="relative flex h-160 w-full overflow-hidden  bg-black/96 antialiased md:items-center md:justify-center">
    

      <Spotlight  />
      <Spotlight />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
       
      
      </div>
    </div>
  );
}
