"use client";
import Image from "next/image";
import React, { useState } from "react";
import scissor from "../public/Scissors.svg";
import rock from "../public/Stone.svg";
import paper from "../public/Paper.svg";

type Type = "DEFAULT" | "ROCK" | "PAPER" | "SCISSOR";

export const UserSelectionMenu = ({
  handleRecivedType,
}: {
  handleRecivedType: any;
}) => {
  const [selected, setSelected] = useState(null);

  const handleButtonClick = (selection: any) => {
    setSelected(selection);
    if (selection === "paper") {
      handleRecivedType("PAPER");
    } else if (selection === "rock") {
      handleRecivedType("ROCK");
    } else if (selection === "scissor") {
      handleRecivedType("SCISSOR");
    }
  };

  return (
    <div className="flex flex-col w-32 items-center">
      <button
        onClick={() => handleButtonClick("paper")}
        className={`transform transition-transform duration-300 ease-in-out hover:scale-110 focus:outline-none ${
          selected === "paper" ? "scale-110" : ""
        }`}
      >
        <Image
          width={100}
          height={100}
          src={paper}
          alt="paper"
          className="pb-5"
        />
      </button>
      <button
        onClick={() => handleButtonClick("rock")}
        className={`transform transition-transform duration-300 ease-in-out hover:scale-110 focus:outline-none ${
          selected === "rock" ? "scale-110" : ""
        }`}
      >
        <Image
          width={100}
          height={100}
          src={rock}
          alt="rock"
          className="pb-5"
        />
      </button>
      <button
        onClick={() => handleButtonClick("scissor")}
        className={`transform transition-transform duration-300 ease-in-out hover:scale-110 focus:outline-none ${
          selected === "scissor" ? "scale-110" : ""
        }`}
      >
        <Image
          width={100}
          height={100}
          src={scissor}
          alt="scissor"
          className="pb-5"
        />
      </button>
    </div>
  );
};
