import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center align-middle items-center h-full w-full">
      <div className="flex flex-row justify-center">
        <div className="flex flex-row items-center justify-center">
          <div className="pr-2">
            <p className="text-2xl font-medium text-white">Rock</p>
            <p className="text-2xl font-medium text-white">Paper</p>
            <p className="text-2xl font-medium text-white">Scissor</p>
          </div>
          <h2 className="text-8xl text-[#D94691]">
            <span className="bg-white px-2 font-medium">ONLINE</span>
          </h2>
        </div>
        <Image src="/Group20.svg" alt="Mi SVG" width={200} height={200} />
      </div>
      <div className="flex flex-col align-middle justify-center items-center mt-20">
        <Link href="/auth/register">
          <Button
            color="default"
            variant="shadow"
            className="w-60 h-16 mb-5 font-semibold "
          >
            Singleplayer
          </Button>
        </Link>
        <Button
          color="default"
          variant="shadow"
          className="w-60 h-16 font-semibold"
        >
          Multiplayer
        </Button>
      </div>
    </div>
  );
};

export default page;
