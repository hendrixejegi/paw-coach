import React from "react";

import heroImg from "@/assets/images/5472144.jpg";

import { Button } from "@/components/ui/button";
import { InView } from "@/components/ui/in-view";

const HeroSection = () => {
  return (
    <section>
      <div className="font-nunito flex flex-col-reverse items-center gap-8 p-4 lg:flex-row">
        <div className="basis-1/2 space-y-8">
          <div className="space-y-4">
            <h1 className="font-baloo text-brown-400 flex flex-col text-4xl font-bold">
              <span>
                <span className="text-orange-400">Train</span>. Bond.{" "}
                <span className="text-orange-400">Thrive</span>.
              </span>
              <span className="">
                With PawCoach, raising a well-behaved, happy pet is easier than
                ever.
              </span>
            </h1>
            <p className="text-brown-300">
              Whether you're welcoming a new pup or fine-tuning your furry
              friend’s behavior, PawCoach gives you expert guidance, interactive
              lessons, and real-world tips &mdash; all in one friendly app.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button className="bg-brown-400 hover:bg-brown-200">
              Start Training
            </Button>
            <Button
              variant="outline"
              className="text-brown-400 border-brown-400"
            >
              Adopt a Pet
            </Button>
          </div>
        </div>
        <div className="basis-1/2">
          <img
            src={heroImg}
            alt="A group of people enjoying time outdoors with their pets, including a playful dog in the foreground. Artwork by Freepik."
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
