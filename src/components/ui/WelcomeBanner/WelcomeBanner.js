import { noto_sans, russo_one } from "@/utils/Font/font";
import { Button } from "antd";
import React from "react";

const WelcomeBanner = () => {
  return (
    <div className="bg-light py-20">
      <div
        className="max-w-[1920px] mx-auto min-h-[75vh] bg-hand-flower relative "
        style={{
          backgroundImage: `linear-gradient(to top, #000000, 70%, transparent), url('https://images.pexels.com/photos/6646952/pexels-photo-6646952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p
            className="md:text-7xl text-4xl mt-16 font-bold text-light max-w-6xl    "
            style={{ fontFamily: noto_sans.style.fontFamily }}
          >
            Welcome To Save Life And Make A Positive Impact
          </p>

          <Button
            type="primary"
            className="mt-8 font-bold rounded-lg   bg-secondary "
            size="large"
          >
            DONATE NOW
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
