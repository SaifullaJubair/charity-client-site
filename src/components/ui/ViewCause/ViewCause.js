"use client";

import { cookie, yatra } from "@/utils/Font/font";
import Image from "next/image";
import { Button, Slider } from "antd";
import { useGetCausesQuery } from "@/redux/api/apiSlice";
import { useState } from "react";
import Link from "next/link";
import Loader from "@/utils/Loader/Loader";

const ViewCause = () => {
  const { data: causes, isLoading } = useGetCausesQuery(undefined, {
    pollingInterval: 30000,
    refetchOnMountOrArgChange: true,
  });
  const [searchValue, setSearchValue] = useState("");
  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(currentDate);
  console.log(formattedDate);
  //   console.log(causes);

  let causesData;
  if (searchValue) {
    causesData = causes?.filter((cause) => {
      return (
        cause.name.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        cause.title.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        cause._id.toLowerCase().includes(searchValue)
      );
    });
  } else {
    causesData = causes;
  }
  if (causesData?.length > 3) {
    causesData = causesData.slice(0, 3);
  }

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div
      className="max-w-[1920px] mx-auto min-h-[90vh]  pt-10"
      style={{
        backgroundImage: `
       linear-gradient(0deg, rgba(237, 233, 231,.88), rgba(237, 233, 231,.88)),url('https://images.pexels.com/photos/6463400/pexels-photo-6463400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1440px] mx-auto py-16 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 text-black mx-4 xl:mx-0">
          <div className="p-2 rounded-md">
            <h6
              className="text-3xl my-2 mt-12 tracking-wider text-secondary"
              style={{ fontFamily: cookie.style.fontFamily }}
            >
              Our Causes
            </h6>

            <h2
              className="text-3xl font-bold my-4 text-darkLight "
              style={{
                fontFamily: yatra.style.fontFamily,
              }}
            >
              Search Causes by Name or Title or ID
            </h2>

            <div>
              {/* <label htmlFor="name" className="block mb-2 font-semibold">
                Name
              </label> */}
              <input
                type="text"
                name="search"
                placeholder="search causes"
                className="w-full px-3 py-3 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                value={searchValue}
                onChange={handleSearchInputChange}
              />
            </div>

            <p className="text-gry-700 mt-8">For find more causes</p>

            <Link href={"/cause"}>
              <Button type="primary" danger className="mt-4 mb-8">
                VIEW ALL CAUSE
              </Button>
            </Link>
          </div>
          {causesData?.map((cause) => (
            <div
              className="p-4 rounded-md bg-white hover:scale-105 duration-500"
              key={cause?._id}
            >
              <Image
                src={cause?.primary_img}
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
                {cause?.name}
              </h6>
              <h2
                className="text-xl font-semibold mt-2 mb-4
                   hover:text-secondary text-darkLight duration-500"
              >
                {cause?.title}
              </h2>

              <div className=" text-gray-700 font-semibold mt-2">
                <p>Raised : {cause?.raised}$</p>
                <p className="my-1">Goal : {cause?.goal}</p>
                <p className="mt-2">
                  {(cause?.raised / cause?.goal) * 100 || 0}%
                </p>
                <div className="my-2 h-2 w-9/12 bg-gray-200 rounded-lg overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-lg"
                    style={{
                      width: `${(cause?.raised / cause?.goal) * 100 || 0}%`,
                      transition: "width 0.5s",
                    }}
                  ></div>
                </div>
                <Link href={`/cause/${cause?._id}`}>
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

export default ViewCause;
