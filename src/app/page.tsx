import { PitchCarousel } from "@/components/pitch-carousel";
import { Grid } from "@/components/ui";

export default function Home() {
  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 h-screen">
      <Grid />

      <PitchCarousel />
    </div>
  );
}
