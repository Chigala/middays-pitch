"use client";

import { setViewCount } from "@/actions/set-view-count";
import { SectionBook } from "@/components//section-book";
import { SectionDemo } from "@/components/section-demo";
import { SectionNext } from "@/components/section-next";
import { SectionProblem } from "@/components/section-problem";
import { SectionSolution } from "@/components/section-solution";
import { SectionStart } from "@/components/section-start";
import { SectionSubscription } from "@/components/section-subscription";
import { SectionTeam } from "@/components/section-team";
import { SectionTraction } from "@/components/section-traction";
import { SectionVision } from "@/components/section-vision";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";
import { CarouselToolbar } from "./carousel-toolbar";

export function PitchCarousel() {
  const [views, setViews] = useState(0);
  const called = useRef(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    async function fetchViewsCount() {
      try {
        const data = await setViewCount("pitch");
        setViews(data);
      } catch {}
    }

    if (!called.current) {
      fetchViewsCount();
      called.current = true;
    }
  }, [called.current]);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel className="w-full min-h-full relative" setApi={setApi}>
      <CarouselContent>
        <CarouselItem>
          <SectionStart />
        </CarouselItem>
        <CarouselItem>
          <SectionProblem />
        </CarouselItem>
        <CarouselItem>
          <SectionSolution />
        </CarouselItem>
        <CarouselItem>
          <SectionDemo playVideo={current === 4} />
        </CarouselItem>
        <CarouselItem>
          <SectionTraction />
        </CarouselItem>
        <CarouselItem>
          <SectionTeam />
        </CarouselItem>
        <CarouselItem>
          <SectionSubscription />
        </CarouselItem>
        <CarouselItem>
          <SectionVision />
        </CarouselItem>
        <CarouselItem>
          <SectionNext />
        </CarouselItem>
        <CarouselItem>
          <SectionBook />
        </CarouselItem>
      </CarouselContent>

        <CarouselToolbar views={views} />
    </Carousel>
  );
}
