import a1 from "@/assets/v3.jpg";
import a2 from "@/assets/v2.jpg";
import a3 from "@/assets/handFlower.jpg";
import a4 from "@/assets/bw.jpg";
import Image from "next/image";
import { cookie, satisfy, yatra } from "@/utils/Font/font";
import { Collapse } from "antd";
import CollapseFaQ from "./Collapse";

const FaQ = () => {
  return (
    <div className="bg-light">
      <div className="max-w-[1440px] mx-auto py-16 ">
        {/*  */}
        <div className=" flex justify-between  gap-4 pt-20">
          {/* image part */}
          <div className="hidden lg:flex lg:w-1/2 w-0 mx-4 mt-12">
            <div className=" grid grid-cols-2 gap-3">
              <div className="  mx-4 ">
                <Image
                  src={a1}
                  alt="faq"
                  height={350}
                  width={280}
                  layout="responsive"
                  className="rounded-lg ml-2 mt-8  mb-2 "
                />
              </div>
              <div className="">
                <Image
                  src={a4}
                  alt="faq"
                  height={280}
                  layout="responsive"
                  width={300}
                  className="rounded-lg mb-4"
                />
                <Image
                  src={a3}
                  alt="faq"
                  height={300}
                  width={200}
                  className="rounded-lg mb-2"
                />
              </div>
            </div>
          </div>

          {/* text part */}
          <div className="lg:w-1/2 sm:w-3/4 w-full mx-4 sm:mx-auto my-6 ">
            <h4
              className="text-5xl font-bold my-4 tracking-wider text-secondary"
              style={{ fontFamily: cookie.style.fontFamily }}
            >
              FAQ
            </h4>
            <h2
              className="text-darkLight font-semibold text-5xl my-6"
              style={{ fontFamily: yatra.style.fontFamily }}
            >
              Frequently Asked Questions
            </h2>
            <p className=" text-sm text-gray-500 mt-4">
              There are many variations of passages of orem Ipsum available, but
              the majority have suffered alteration in some form, by cted Ipsum.
            </p>
            {/* Collapse */}
            <CollapseFaQ />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaQ;
