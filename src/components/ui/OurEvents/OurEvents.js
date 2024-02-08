import { cookie, yatra } from "@/utils/Font/font";
import Image from "next/image";
import React from "react";
import e1 from "../../../assets/house.jpg";
import e2 from "../../../assets/handFlower.jpg";
import e3 from "../../../assets/pexels-hitesh-choudhary-1739855.jpg";
import e4 from "../../../assets/pexels-lagos-food-bank-initiative-9968379.jpg";
import e5 from "../../../assets/pexels-pixabay-46259.jpg";
import e6 from "../../../assets/yannis-h-uaPaEM7MiQQ-unsplash.jpg";

const OurEvents = () => {
  return (
    <div className="max-w-[1920px] mx-auto min-h-[90vh] bg-white py-20 ">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center justify-center ">
          <h4
            className="text-5xl font-bold tracking-wider text-secondary"
            style={{ fontFamily: cookie.style.fontFamily }}
          >
            Our Events
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 xl:mx-0">
            {/* event 01 */}
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <Image
                src={e1}
                alt="event"
                height={600}
                width={300}
                layout="responsive"
              />
              <div className="absolute inset-0 bottom-0 flex flex-col justify-end px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  Mona Lisa
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  Painted between 1503 and 1517, Da Vinci’s alluring portrait
                  has been dogged by two questions since the day it was made:
                  Who’s the subject and why is she smiling?
                </p>
              </div>
            </div>

            {/* Event 02 */}
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <Image
                src={e2}
                alt="event"
                height={600}
                width={300}
                layout="responsive"
              />
              <div className="absolute inset-0 bottom-0 flex flex-col justify-end px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  Mona Lisa
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  Painted between 1503 and 1517, Da Vinci’s alluring portrait
                  has been dogged by two questions since the day it was made:
                  Who’s the subject and why is she smiling?
                </p>
              </div>
            </div>

            {/* Event 03 */}
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <Image
                src={e3}
                alt="event"
                height={600}
                width={300}
                layout="responsive"
              />
              <div className="absolute inset-0 bottom-0 flex flex-col justify-end px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  Mona Lisa
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  Painted between 1503 and 1517, Da Vinci’s alluring portrait
                  has been dogged by two questions since the day it was made:
                  Who’s the subject and why is she smiling?
                </p>
              </div>
            </div>
            {/* Event 04 */}

            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <Image
                src={e4}
                alt="event"
                height={600}
                width={300}
                layout="responsive"
              />
              <div className="absolute inset-0 bottom-0 flex flex-col justify-end px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  Mona Lisa
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  Painted between 1503 and 1517, Da Vinci’s alluring portrait
                  has been dogged by two questions since the day it was made:
                  Who’s the subject and why is she smiling?
                </p>
              </div>
            </div>
            {/* Event 05 */}
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <Image
                src={e5}
                alt="event"
                height={600}
                width={300}
                layout="responsive"
              />
              <div className="absolute inset-0 bottom-0 flex flex-col justify-end px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  Mona Lisa
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  Painted between 1503 and 1517, Da Vinci’s alluring portrait
                  has been dogged by two questions since the day it was made:
                  Who’s the subject and why is she smiling?
                </p>
              </div>
            </div>
            {/* Event06 */}
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <Image
                src={e6}
                alt="event"
                height={600}
                width={300}
                layout="responsive"
              />
              <div className="absolute inset-0 bottom-0 flex flex-col justify-end px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  Mona Lisa
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  Painted between 1503 and 1517, Da Vinci’s alluring portrait
                  has been dogged by two questions since the day it was made:
                  Who’s the subject and why is she smiling?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurEvents;
