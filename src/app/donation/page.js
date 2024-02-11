"use client";

import { useGetDonationByEmailQuery } from "@/redux/api/apiSlice";
import { cookie, satisfy } from "@/utils/Font/font";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const DonationPage = () => {
  const { user, error } = useSelector((state) => state.user);
  const donner = user.email;
  const { data, isLoading } = useGetDonationByEmailQuery(donner);

  return (
    <div className="max-w-[1920px] mx-auto">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12 text-black mx-4 xl:mx-0 my-6">
          {data?.map((cause) => (
            <div
              className="p-4 rounded-md bg-white hover:scale-105 duration-500"
              key={cause?._id}
            >
              <Image
                src={cause?.img}
                width={300}
                height={100}
                layout="responsive"
                alt="Shelter"
                className="rounded-lg"
              />
              <h6
                className="text-2xl mt-2 text-secondary"
                style={{ fontFamily: satisfy.style.fontFamily }}
              >
                {cause?.causeName}
              </h6>
              <h2
                className="text-xl font-semibold mt-2 mb-4
               hover:text-secondary text-darkLight duration-500"
              >
                {cause?.title}
              </h2>
              <h2
                className="text-xl font-semibold mt-2 mb-4
               hover:text-secondary text-darkLight duration-500"
              >
                Donate amount: $ {cause?.amount}
              </h2>

              <div className=" text-gray-700 font-semibold mt-2">
                <p>Data of donate: {cause?.date}</p>
                <Link href={`/cause/${cause?.causeId}`}>
                  <Button type="primary" className="mt-4 bg-secondary">
                    View Details
                  </Button>
                </Link>
              </div>
              {/* <Slider defaultValue={30} /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
