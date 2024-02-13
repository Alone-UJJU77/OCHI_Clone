import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-[#F1F1F1] py-2">
      <div className="text uppercase mt-52 px-20">
        {["We Create", "Eye Opening", "presentatioon"].map((item, index) => {
          return (
            <div className="nams">
              <h1 className="text-[7.5vw] text-[#212121] leading-[6vw] tracking-tighter font-['Founders_Grotesk'] font-semibold">
                {item}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="bottom_landing border-t-black border-[1px] flex items-center relative w-full mt-20">
        <hr className="w-1" />
        <div className="left ml-20 w-[60%] px-7 py-7 font-[Neue_Montreal] flex justify-between gap-30 items-center">
          <h1 className="text-[1.3vw] font-['Neue_Montreal'] text-[#212121]">For public and private companies</h1>
          <h1 className="text-[1.3vw] font-['Neue_Montreal'] text-[#212121]">From the first pitch to IPO</h1>
        </div>
        <hr />
        <div className="w-[40%] ml-2 flex gap-3 justify-center items-center start">
          <button className="border-black border-2 rounded-3xl px-2 py-2">
            START THE PROJECT
          </button>
          <button className="-rotate-[45deg] border-black border-2 rounded-3xl px-2 py-2">
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
