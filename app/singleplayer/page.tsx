"use client";

import { HandBehavior } from "@/components/HandBehavior";
import HandIABehavior from "@/components/HandIABehavior";
import { UserSelectionMenu } from "@/components/UserSelectionMenu";
import React, { useEffect, useState } from "react";
import rock from "@/public/handRock.png";
import scissor from "@/public/handScissor.png";
import Modal from "@/components/Modal";

type Type = "DEFAULT" | "ROCK" | "PAPER" | "SCISSOR";

const Page = () => {
  const [typeObject, setType] = useState<Type>();
  const [typeIA, setTypeIA] = useState<Type>();
  const [winner, setWinner] = useState<string | null>(null);
  const [valueOfUser, setValueOfUser] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleRecivedType = (type: Type) => {
    setType(type);
    setValueOfUser(true);
    determineWinner(type, typeIA);
  };

  const handleRecivedIAType = (type: Type) => {
    setTypeIA(type);
    setValueOfUser(false);
    determineWinner(typeObject, type);
  };

  const determineWinner = (
    userType: Type | undefined,
    iaType: Type | undefined
  ) => {
    if (userType && iaType) {
      const result = whoWins(userType, iaType);
      setWinner(result);
    }
  };

  useEffect(() => {
    if (winner) {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 500);

      return () => {
        clearTimeout(timer);
      };
    } else {
      setShowModal(false);
    }
  }, [winner]);

  const whoWins = (userType: Type, iaType: Type) => {
    if (userType === "ROCK" && iaType === "SCISSOR") {
      return "YOU WIN";
    } else if (userType === "ROCK" && iaType === "PAPER") {
      return "YOU LOSE";
    } else if (userType === "PAPER" && iaType === "ROCK") {
      return "YOU WIN";
    } else if (userType === "PAPER" && iaType === "SCISSOR") {
      return "YOU LOSE";
    } else if (userType === "SCISSOR" && iaType === "PAPER") {
      return "YOU WIN";
    } else if (userType === "SCISSOR" && iaType === "ROCK") {
      return "YOU LOSE";
    } else {
      return "DRAW";
    }
  };

  return (
    <div className="h-full max flex flex-row max-w-4xl mx-auto">
      <div className="h-full w-full flex justify-end items-start">
        <HandIABehavior
          handleRecivedIAType={handleRecivedIAType}
          userHasSelect={valueOfUser}
        />
      </div>
      <div className="h-full w-full flex justify-end items-end">
        <HandBehavior
          image={
            typeObject === "ROCK"
              ? rock
              : typeObject === "SCISSOR"
              ? scissor
              : "paper"
          }
          typeObjectSelected={typeObject ? typeObject : "DEFAULT"}
        />
      </div>
      <div className="flex h-full w-full justify-end items-end">
        <UserSelectionMenu handleRecivedType={handleRecivedType} />
      </div>
      {showModal && (
        <div className="modal">
          <Modal
            isOpen={showModal}
            winner={winner}
            onClose={() => setWinner(null)}
          />
        </div>
      )}
    </div>
  );
};

export default Page;
