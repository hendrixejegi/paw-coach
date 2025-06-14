import React from "react";

import { InView } from "@/components/ui/in-view";

type Value = [emoji: string, value: string, description: string];

const values: Value[] = [
  [
    "🐶",
    "Step-by-step Training Plans",
    "Tailored lessons for all ages and breeds — from sit to stay and beyond.",
  ],
  [
    "🐾",
    "Adopt with Confidence",
    "Explore nearby adoption opportunities and learn how to care from day one.",
  ],
  [
    "🎯",
    "Track Progress",
    "Stay motivated with progress tracking and achievement badges.",
  ],
  [
    "💛",
    "Built with Love for Pets",
    "Designed by pet lovers, for pet lovers — because every paw deserves a chance.",
  ],
];

const ValueSection = () => {
  return (
    <section>
      <div className="font-nunito space-y-8 p-4">
        <h2 className="font-baloo text-brown-400 text-2xl font-bold">
          Why PawCoach?
        </h2>
        <div className="grid grid-cols-1 gap-8 overflow-y-hidden md:grid-cols-2 lg:grid-cols-4">
          {values.map(([emoji, values, description], index) => (
            <InView
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                  scale: 0.95,
                  filter: "blur(4px)",
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                },
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              viewOptions={{ margin: "0px 0px -50px 0px" }}
            >
              <div className="space-y-2">
                <h3 className="font-baloo text-brown-400 text-lg font-semibold">
                  <span aria-hidden="true">{emoji}</span> {values}
                </h3>
                <p className="text-brown-300">{description}</p>
              </div>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
