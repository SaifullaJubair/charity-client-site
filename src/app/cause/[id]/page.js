"use client";

import { useGetSingleCauseQuery } from "@/redux/api/apiSlice";
import Loader from "@/utils/Loader/Loader";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const CauseDetailsPage = ({ params }) => {
  const { isLoading, data } = useGetSingleCauseQuery(params.id, {
    pollingInterval: 60000,
    refetchOnMountOrArgChange: true,
  });
  // Calculate the percentage
  const percentage = (data?.raised / data?.goal) * 100 || 0;
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="max-w-[1920px] mx-auto bg-light min-h-screen">
      <div className="max-w-[1440px] mx-auto py-20">
        <div className="flex  justify-between md:flex-row flex-col">
          <div className="md:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-4 ">
              <Image
                src={data?.primary_img}
                layout="responsive"
                alt="cause"
                width={500}
                height={500}
                className="col-span-2"
              />
              {data?.img && (
                <Image
                  src={data?.img}
                  layout="responsive"
                  alt="cause"
                  width={500}
                  height={500}
                  className="col-span-1"
                />
              )}
              {data?.img2 && (
                <Image
                  src={data?.img2}
                  layout="responsive"
                  alt="cause"
                  width={500}
                  height={500}
                  className="col-span-1"
                />
              )}
            </div>
          </div>
          <div className="md:w-1/2 w-11/12  mx-auto md:ml-16 ">
            <h1 className="text-3xl my-6 text-gray-700 font-semibold ">
              {data?.name}
            </h1>
            <p className="font-semibold"> {data?.title}</p>

            <p className="my-2"> Raised: {data?.raised}$</p>
            <p className="my-2"> Goal: {data.goal}$</p>
            {/* Progress bar */}
            <p>{percentage}%</p>
            <div className="my-2 h-2 w-9/12 bg-gray-200 rounded-lg overflow-hidden">
              <div
                className="h-full bg-green-500 rounded-lg"
                style={{ width: `${percentage}%`, transition: "width 0.5s" }}
              ></div>
            </div>
            <p className="my-2"> {data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CauseDetailsPage;
