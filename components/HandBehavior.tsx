"use client";

import Image from "next/image";
import React from "react";
import hand from "../public/Hand1.svg";
import rock from "@/public/handRock.png";
import scissor from "@/public/handScissor.png";
import paper from "@/public/handPaper.png";
import { type } from "os";

type Type = "DEFAULT" | "ROCK" | "PAPER" | "SCISSOR";

export const HandBehavior = ({
  image,
  typeObjectSelected,
}: {
  image: any;
  typeObjectSelected: string;
}) => {
  return (
    <div className="w-auto">
      <Image
        width={200}
        height={200}
        src={
          typeObjectSelected === "DEFAULT"
            ? hand
            : typeObjectSelected === "ROCK"
            ? rock
            : typeObjectSelected === "SCISSOR"
            ? scissor
            : paper
        }
        alt="hand"
      />
    </div>
  );
};
