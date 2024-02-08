"use client";
import { cookie, yatra } from "@/utils/Font/font";
import { Button } from "antd";
import React, { useState } from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";

const WhyChoseUs = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <div
      className="max-w-[1920px] mx-auto mt-16 py-16 min-h-[80vh] flex flex-col items-center justify-center"
      style={{
        backgroundImage: `
       linear-gradient(0deg, rgba(15, 15, 15,.95), rgba(15, 15, 15,.95)),url('https://images.unsplash.com/photo-1591276625440-d50e6618dfd1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1440px]  mx-auto">
        <div className="flex items-center justify-between gap-4 mx-4 flex-col md:flex-row">
          <div className="md:w-1/2 sm:w-3/4 w-full mx-4 sm:mx-auto">
            <h4
              className="text-4xl font-bold my-4 tracking-wider text-secondary "
              style={{ fontFamily: cookie.style.fontFamily }}
            >
              Why Chose Us
            </h4>
            <h2
              className="text-light font-semibold text-3xl"
              style={{ fontFamily: yatra.style.fontFamily }}
            >
              Trusted Non Profit Donation Center
            </h2>

            <div className="flex items-center gap-4 my-8">
              <Button
                type="text"
                shape="round"
                size="large"
                className={` text-light ${
                  activeButton === "Mission"
                    ? "bg-secondary"
                    : "border-1 border-white"
                }`}
                onClick={() => handleButtonClick("Mission")}
              >
                Mission
              </Button>
              <Button
                type="text"
                shape="round"
                size="large"
                className={` text-light ${
                  activeButton === "Vision"
                    ? "bg-secondary"
                    : "border-1 border-white"
                }`}
                onClick={() => handleButtonClick("Vision")}
              >
                Vision
              </Button>
              <Button
                type="text"
                shape="round"
                size="large"
                className={` text-light ${
                  activeButton === "Company Value"
                    ? "bg-secondary"
                    : "border-1 border-white"
                }`}
                onClick={() => handleButtonClick("Company Value")}
              >
                Company Value
              </Button>
            </div>
            {activeButton === "Mission" && (
              <p className="text-gray-300 text-sm mt-4 ">
                Our Mission: There are many variations of passages of Lorem
                Ipsum available, but the majority have suffered alteration in
                some form, by injected humour, or random aset words which do not
                look even slightly believable.
              </p>
            )}
            {activeButton === "Vision" && (
              <p className="text-gray-300 text-sm mt-4">
                Our Vision: There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some
                form, by injected humour, or random aset words which do not look
                even slightly believable.
              </p>
            )}
            {activeButton === "Company Value" && (
              <p className="text-gray-300 text-sm mt-4">
                Our Company Value: There are many variations of passages of
                Lorem Ipsum available, but the majority have suffered alteration
                in some form, by injected humour, or random aset words which do
                not look even slightly believable.
              </p>
            )}
            {/* <p className="text-gray-300 text-sm mt-4">
              There are many variations of passages of orem Ipsum available, but
              the majority have suffered alteration in some form, by cted ipsum
              dolor sit amet, consectetur adipisicing elit, sed do usmod mponcid
              idunt ut labore et dolore magna aliqua.
            </p> */}

            <div className="flex items-center gap-6">
              <p className="w-12 h-12 rounded-full ring-2 my-8 flex items-center justify-center ring-secondary">
                <FaHandHoldingHeart className="text-secondary text-3xl" />
              </p>
              <p>
                <span
                  className="text-3xl font-bold text-light"
                  style={{ fontFamily: cookie.style.fontFamily }}
                >
                  10k+
                </span>
                <br />
                <span className="text-gray-300 font-light text-sm">
                  Happy People
                </span>
              </p>
            </div>
            <div className="flex items-center gap-6">
              <p className="w-12 h-12 rounded-full ring-2 flex items-center justify-center ring-green-400">
                <FaHandshakeSimple className="text-green-400 text-3xl" />
              </p>
              <p>
                <span
                  className="text-3xl font-bold text-light"
                  style={{ fontFamily: cookie.style.fontFamily }}
                >
                  4500+
                </span>
                <br />
                <span className="text-gray-300 font-light text-sm">
                  Volunteers are available to help you
                </span>
              </p>
            </div>
            <Button
              type="primary"
              className="my-6 bg-secondary rounded hover:scale-105 duration-300 hover:bg-red-500"
            >
              VIEW DETAILS
            </Button>
          </div>

          <div className="md:w-1/2 sm:w-3/4 w-full mx-4 sm:mx-auto">
            <iframe
              width="100%"
              className="rounded-lg lg:h-[450px] sm:h-[350px] h-[250px]"
              src="https://www.youtube.com/embed/TqhNILVX8IE?si=AMs6j195MFeIr9k1"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default WhyChoseUs;
