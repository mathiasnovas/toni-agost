import React, { useState } from "react";
import { NextPage } from "next";
import Image from "next/image";

import "react-minesweeper/lib/minesweeper.css";

import { Window } from "../components/window";
import { Minesweeper } from "../components/minesweeper";
import { Button } from "../components/button";
import { BorderBox } from "../components/border-box";
import { SEO } from "../components/seo";

import MinesweeperIcon from "../../public/images/minesweeper.gif";

const MinesweeperPage: NextPage = () => {
  const [gameState, setGameState] = useState<"in-progress" | "won" | "lost">(
    "in-progress"
  );

  function handleOnWin() {
    setGameState("won");
  }

  function handleOnLose() {
    setGameState("lost");
  }

  function resetGame() {}

  return (
    <>
      <SEO
        title="Minesweeper"
        description="Try your luck! Maybe you will be rewarded..."
      />

      <div className="flex flex-col items-center md:mt-[5vh] lg:mt-[15vh] p-2">
        <Window
          title="Minesweeper"
          icon={
            <Image
              src={MinesweeperIcon.src}
              layout="fill"
              objectFit="contain"
              alt="Booking icon"
            />
          }
        >
          <div className="relative">
            <Minesweeper onWin={handleOnWin} onLose={handleOnLose} />

            {gameState === "lost" ? (
              <div className="absolute top-0 left-0 w-full h-full grid place-items-center bg-black bg-opacity-30">
                <BorderBox>
                  <div className="grid place-items-center bg-white p-2">
                    Oooops! Looks like you lost...
                    <div className="mt-2">
                      <Button onClick={resetGame}>Try again?</Button>
                    </div>
                  </div>
                </BorderBox>
              </div>
            ) : null}

            {gameState === "won" ? (
              <div className="absolute top-0 left-0 w-full h-full grid place-items-center bg-black bg-opacity-30">
                <BorderBox>
                  <div className="grid place-items-center bg-white p-2">
                    <p>
                      Wowsers! You did it! Here, have a{" "}
                      <span className="text-primary">coupon code</span> for 10%
                      off your first tattoo with Toni.
                    </p>

                    <p>
                      <span className="text-secondary">unknown visitor</span>{" "}
                      receives <span className="text-primary">coupon code</span>
                      . It reads <span>TONI-JULY-10</span>.
                    </p>
                  </div>
                </BorderBox>
              </div>
            ) : null}
          </div>
        </Window>
      </div>
    </>
  );
};

export default MinesweeperPage;