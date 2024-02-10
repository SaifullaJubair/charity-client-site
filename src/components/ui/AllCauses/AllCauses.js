"use client";
import { useGetCausesQuery } from "@/redux/api/apiSlice";
import { cookie, yatra } from "@/utils/Font/font";
import Loader from "@/utils/Loader/Loader";
import Image from "next/image";
import { useState } from "react";

const AllCauses = () => {
  const { data: causes, isLoading } = useGetCausesQuery(undefined, {
    pollingInterval: 30000,
    refetchOnMountOrArgChange: true,
  });
  const [searchValue, setSearchValue] = useState("");
  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };
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
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="max-w-[1920px] mx-auto min-h-[90vh] bg-light py-20 ">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center justify-center ">
          <h4
            className="text-5xl font-bold tracking-wider text-secondary"
            style={{ fontFamily: cookie.style.fontFamily }}
          >
            All Causes
          </h4>
          <h2
            className="text-4xl font-semibold text-darkLight"
            style={{ fontFamily: yatra.style.fontFamily }}
          >
            We are working on it
          </h2>
          <p className="text-2xl font-semibold my-6 text-gray-700">
            Causes available {causesData.length}
          </p>
          <div className="text-gray-500 max-w-xl  w-full my-6">
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
          </div>
        </div>

        {/* Card section */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12 text-black mx-4 xl:mx-0 my-6">
          {causesData?.map((cause) => (
            <div
              className="p-4 rounded-md shadow-xl bg-white hover:scale-105 duration-500"
              key={cause._id}
            >
              <div className="w-full rounded-lg" />
              <Image
                src={cause.primary_img}
                alt="cause"
                height={300}
                width={300}
                layout="responsive"
                className="w-full rounded-lg"
              />
              <div className="mt-4">
                <h3
                  className="text-xl font-bold my-2 mt-12 tracking-wider text-secondary"
                  style={{ fontFamily: cookie.style.fontFamily }}
                >
                  {cause.name}
                </h3>
                <h2
                  className="text-3xl font-bold my-4 text-darkLight"
                  style={{ fontFamily: yatra.style.fontFamily }}
                >
                  {cause.title}
                </h2>
                <p className="text-gry-700 text-sm">
                  {cause.description.substring(0, 100) + "..."}
                </p>
              </div>
            </div>
          ))}

          {/* {causesData?.map((cause) => {
            return (
              <div
                className="p-4 rounded-md shadow-xl bg-white hover:scale-105 duration-500"
                key={cause._id}
              >
                <div className="w-full rounded-lg" />
                <Image
                  src={cause.primary_img}
                  alt="cause"
                  height={300}
                  width={300}
                  layout="responsive"
                  className="w-full rounded-lg"
                />
                <div className="mt-4">
                  <h3
                    className="text-xl font-bold my-2 mt-12 tracking-wider text-secondary"
                    style={{ fontFamily: cookie.style.fontFamily }}
                  >
                    {cause.name}
                  </h3>
                  <h2
                    className="text-3xl font-bold my-4 text-darkLight"
                    style={{ fontFamily: yatra.style.fontFamily }}
                  >
                    {cause.title}
                  </h2>
                  <p className="text-gry-700 text-sm">
                    {cause.description.substring(0, 100) + "..."}
                  </p>
                </div>
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default AllCauses;
