import { cookie, yatra } from "@/utils/Font/font";
import { Button } from "antd";
import Image from "next/image";
import React from "react";
import house from "@/assets/house.jpg";

const LatestCauses = () => {
  return (
    <div className="max-w-[1920px] mx-auto min-h-[90vh] bg-light py-20 ">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center justify-center ">
          <h4
            className="text-5xl font-bold tracking-wider text-secondary"
            style={{ fontFamily: cookie.style.fontFamily }}
          >
            Latest Causes
          </h4>
          <h2
            className="text-4xl font-semibold text-darkLight"
            style={{ fontFamily: yatra.style.fontFamily }}
          >
            We are working on it
          </h2>
          <p className="text-gray-500 max-w-3xl text-center my-6">
            There are many variations of passages of orem Ipsum available, but
            the majority have suffered alteration in some form, by cted ipsum.
          </p>

          {/* Card section */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 text-black mx-4 xl:mx-0 my-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                className="p-4 rounded-md shadow-xl bg-white hover:scale-105 duration-500"
                key={item}
              >
                <Image
                  src={house}
                  width={300}
                  height={100}
                  layout="responsive"
                  alt="Shelter"
                  className="rounded-lg"
                />
                <h6
                  className="text-2xl mt-2 text-secondary"
                  style={{ fontFamily: cookie.style.fontFamily }}
                >
                  Urgent cause
                </h6>
                <h2
                  className="text-xl font-semibold mt-2 mb-4
                   hover:text-secondary text-darkLight tracking-tight duration-500"
                >
                  We Help More Than 9k Children Every Year
                </h2>
                <p className="text-gry-700 text-sm">
                  BigHearts is the largest global crowdfunding community ...
                </p>
                <div className=" text-gray-700 font-semibold my-2">
                  <p className="my-1">Raised : $6,399.00</p>
                  <p>Goal : $6,781.00</p>
                </div>
                {/* <Slider defaultValue={30} /> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestCauses;
