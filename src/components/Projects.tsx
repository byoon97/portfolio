import React from "react";

type Props = {};

export default function Projects({}: Props) {
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      {" "}
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        <div className="w-screen flex-shrink-0 snap-center">
          <div className="w-screen flex-shrink-0 snap-center flex flex-row space-y-5 items-center justify-center md:p-44 h-screen">
            {" "}
            <img className="mt-36" src="sportsbook.png" alt="LOL" />
          </div>

          <div>
            <h4>Sportsbetting App</h4>
          </div>
        </div>
        <div className="w-screen flex-shrink-0 snap-center">
          <div className="w-screen flex-shrink-0 snap-center flex flex-row space-y-5 items-center justify-center md:p-44 h-screen">
            {" "}
            <img className="mt-36" src="sportsbook.png" alt="LOL" />
          </div>

          <div>
            <h4>Sportsbetting App</h4>
          </div>
        </div>
        <div className="w-screen flex-shrink-0 snap-center">
          <div className="w-screen flex-shrink-0 snap-center flex flex-row space-y-5 items-center justify-center md:p-44 h-screen">
            {" "}
            <img className="mt-36" src="sportsbook.png" alt="LOL" />
          </div>

          <div>
            <h4>Sportsbetting App</h4>
          </div>
        </div>
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12"></div>
    </div>
  );
}
