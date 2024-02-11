"use client";
import { useGetCausesQuery } from "@/redux/api/apiSlice";
import { cookie, yatra } from "@/utils/Font/font";
import Loader from "@/utils/Loader/Loader";
import { Button, Select } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const AllCauses = () => {
  const { data: causes, isLoading } = useGetCausesQuery(undefined, {
    pollingInterval: 30000,
    refetchOnMountOrArgChange: true,
  });
  const [selectValue, setSelectValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  //   console.log(causes);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setSelectValue(value);
  };
  let causesData;
  if (searchValue) {
    causesData = causes?.filter((cause) => {
      return (
        cause.name.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        cause.title.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        cause._id.toLowerCase().includes(searchValue)
      );
    });
  } else if (selectValue) {
    causesData = causes?.filter((cause) => {
      return cause.name === selectValue;
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
            Causes available {causesData?.length}
          </p>

          <div className="text-gray-500 max-w-md  w-full ">
            <label>Category</label>
            <select
              id="category"
              className="block rounded border-gray-400 focus:outline-none focus:border focus:border-gray-700 pl-2 py-2.5 mt-1 px-0 w-full text-sm text-gray-900 bg-transparent border appearance-none  dark:border-gray-600 dark:focus:border-gray  focus:ring-0  peer focus:border-gray-800"
              name="category"
              onChange={(e) => handleChange(e.target.value)}
            >
              <option value="Healthcare"> Healthcare</option>
              <option value="Education">Education</option>
              <option value="Humanitarian Aid"> Humanitarian Aid</option>
              <option value="Animal Welfare">Animal Welfare</option>
              <option value="The Right of Childen">
                {" "}
                The Right of Childen
              </option>
              <option value="Winter Survival Pack">
                {" "}
                Winter Survival Pack
              </option>
              <option value="Clean Water"> Clean Water</option>
            </select>
          </div>
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
                <p className="my-1">Goal : {cause?.goal}$</p>
                <p className="mt-2">
                  {Math.round((cause?.raised / cause?.goal) * 100 || 0)}%
                </p>
                <div className="my-2 h-2 w-9/12 bg-gray-200 rounded-lg overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-lg"
                    style={{
                      width: `${Math.round(
                        (cause?.raised / cause?.goal) * 100 || 0
                      )}%`,
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

export default AllCauses;
