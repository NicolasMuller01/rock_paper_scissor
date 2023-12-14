"use client";

import React, { useEffect, useState } from "react";
import handIA from "../public/Hand2.svg";
import Image from "next/image";
import rock from "@/public/HandIARock.svg";
import paper from "@/public/HandIAPaper.svg";
import scissor from "@/public/HandIAScissor.svg";

const HandIABehavior = ({
  handleRecivedIAType,
  userHasSelect,
}: {
  handleRecivedIAType: any;
  userHasSelect: boolean;
}) => {
  const [selectedImage, setSelectedImage] = useState(handIA);

  const getRandomImage = () => {
    const images = [rock, paper, scissor];
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomValue = images[randomIndex];
    handleRecivedIAType(
      randomIndex === 0 ? "ROCK" : randomIndex === 1 ? "PAPER" : "SCISSOR"
    );
    return randomValue;
  };

  useEffect(() => {
    if (userHasSelect) {
      setSelectedImage(getRandomImage());
    }
  }, [userHasSelect]);

  return (
    <div>
      <Image width={200} height={200} src={selectedImage} alt="hand" />
    </div>
  );
};

export default HandIABehavior;
