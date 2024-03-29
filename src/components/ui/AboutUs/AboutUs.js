import Image from "next/image";
import house from "@/assets/house.jpg";
import { cookie, yatra } from "@/utils/Font/font";
import { FaHandHoldingHeart, FaHandHoldingMedical } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";
import { Button } from "antd";
import a1 from "@/assets/v3.jpg";
import a2 from "@/assets/v2.jpg";
import a3 from "@/assets/handFlower.jpg";
const AboutUs = () => {
  return (
    <div className="bg-light">
      <div className="max-w-[1440px] mx-auto py-16 ">
        {/*  */}
        <div className=" flex justify-between  gap-4 pt-20">
          {/* image part */}
          <div className="hidden lg:flex lg:w-1/2 w-0 mx-4 mt-8">
            <div className=" grid grid-cols-2 gap-3">
              <div className=" mt-10 mx-auto ">
                <Image
                  src={a1}
                  alt="house"
                  height={380}
                  width={250}
                  className="rounded-lg"
                />
              </div>
              <div className="">
                <Image
                  src={a2}
                  alt="house"
                  layout="responsive"
                  height={100}
                  width={400}
                  className="rounded-lg mb-4"
                />
                <Image
                  src={a3}
                  alt="house"
                  layout="responsive"
                  height={250}
                  width={200}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* text part */}
          <div className="lg:w-1/2 sm:w-3/4 w-full mx-4 sm:mx-auto">
            <h4
              className="text-4xl font-bold my-4 text-secondary "
              style={{ fontFamily: cookie.style.fontFamily }}
            >
              About Us
            </h4>
            <h2
              className="text-darkLight font-semibold text-3xl"
              style={{ fontFamily: yatra.style.fontFamily }}
            >
              Check What Makes Us Different Than Others
            </h2>

            <p className="text-gray-700 text-sm mt-4">
              There are many variations of passages of orem Ipsum available, but
              the majority have suffered alteration in some form, by cted ipsum
              dolor sit amet, consectetur adipisicing elit, sed do usmod mponcid
              idunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex items-center gap-6">
              <p className="w-12 h-12 rounded-full ring-2 my-8 flex items-center justify-center ring-secondary">
                <FaHandHoldingHeart className="text-secondary text-3xl" />
              </p>
              <p>
                <span
                  className="text-3xl font-bold text-darkLight"
                  style={{ fontFamily: cookie.style.fontFamily }}
                >
                  10k+
                </span>
                <br />
                <span className="text-darkLight font-light text-sm">
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
                  className="text-3xl font-bold text-darkLight"
                  style={{ fontFamily: cookie.style.fontFamily }}
                >
                  4500+
                </span>
                <br />
                <span className="text-darkLight font-light text-sm">
                  Volunteers are available to help you
                </span>
              </p>
            </div>
            <div className=" mx-auto  ">
              <div className=" flex items-center">
                <p className="w-12 h-12 rounded-full bg-secondary my-4 flex items-center justify-center mr-6 ">
                  <FaHandHoldingMedical className="text-white text-2xl" />
                </p>
                <p>
                  <span className="text-darkLight font-semibold ">
                    We Complate 15000+ Project
                  </span>
                  <br />
                  <span className="text-gray-500 text-sm">
                    Donet for charity
                  </span>
                </p>
              </div>
            </div>
            <Button
              type="primary"
              className="my-6 bg-secondary rounded hover:scale-105 duration-300 hover:bg-red-500"
            >
              VIEW DETAILS
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
