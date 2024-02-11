"use client";

import {
  useAddDonateMutation,
  useGetSingleCauseQuery,
} from "@/redux/api/apiSlice";
import Loader from "@/utils/Loader/Loader";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const CauseDetailsPage = ({ params }) => {
  const { isLoading, data } = useGetSingleCauseQuery(params.id, {
    pollingInterval: 60000,
    refetchOnMountOrArgChange: true,
  });
  // Calculate the percentage
  const percentage = (data?.raised / data?.goal) * 100 || 0;
  const dispatch = useDispatch();
  const { user, error } = useSelector((state) => state.user);
  const [addDonate, { isLoading: isLoadingDonate, error: errorDonate }] =
    useAddDonateMutation();
  const [amount, setAmount] = useState(0);

  const handleDonation = (event) => {
    event.preventDefault();
    const name = event.target.name.value;

    const number = event.target.number.value;
    const donate = {
      name,
      email: user.email,
      number,
      amount,
    };
    if (amount === 0 || !amount || amount < 50) {
      toast.error("Please enter amount at list 50$ for donate");
      return;
    }

    if (name && number && amount) {
      addDonate(donate);
      toast.success("Donation successful");
      setAmount(0);
    }
  };

  useEffect(() => {
    if (errorDonate) {
      toast.error("Donation failed");
    }
  }, [errorDonate]);

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

        {/* Donation form */}
        <div className="flex flex-col max-w-xl p-6  mx-auto  my-20 rounded-md sm:p-10 bg-[#FEF2F1] text-gray-800">
          <div className="mb-8 ">
            <h1 className="my-3 text-4xl font-bold">Donate!</h1>
            <p className="text-sm text-gray-600">
              Donate to this cause and help us
            </p>
          </div>
          <p className="mb-2">Fill Personal Info:</p>
          <form onSubmit={handleDonation} className="space-y-12">
            <div className="space-y-4">
              <div>
                <label for="email" className="block mb-2 font-semibold">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="your name"
                  className="w-full px-3 py-3 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                />
              </div>

              <div>
                <div>
                  <label for="number" className="font-semibold block mb-2">
                    Mobile Number
                  </label>
                </div>
                <input
                  type="number"
                  name="number"
                  placeholder="your number"
                  className="w-full px-3 py-3 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                />
              </div>
            </div>

            <div>
              <p className="font-semibold  ">Donate Amount</p>
              <div className="flex items-center  gap-6 my-6 mx-auto ">
                <p
                  className="bg-gray-200 px-3 hover:text-white duration-300  hover:font-semibold hover:bg-secondary py-1.5 rounded"
                  onClick={() => setAmount(100)}
                >
                  100
                </p>
                <p
                  className="bg-gray-200 px-3 hover:text-white duration-300  hover:font-semibold hover:bg-secondary py-1.5 rounded"
                  onClick={() => setAmount(200)}
                >
                  200
                </p>
                <p
                  className="bg-gray-200 px-3 hover:text-white duration-300  hover:font-semibold hover:bg-secondary py-1.5 rounded"
                  onClick={() => setAmount(500)}
                >
                  500
                </p>
                <p
                  className="bg-gray-200 px-3 hover:text-white duration-300  hover:font-semibold hover:bg-secondary py-1.5 rounded"
                  onClick={() => setAmount(1000)}
                >
                  1000
                </p>
              </div>
              <input
                type="number"
                name="amount"
                placeholder="amount"
                required
                className="w-full px-3 py-3 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                value={amount}
                onChange={(e) => setAmount(parseInt(e.target.value))}
              />
            </div>

            <div className="space-y-2">
              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-8 py-3 font-semibold border-0 shadow-md rounded-md bg-secondary hover:bg-red-500 text-gray-50"
                >
                  {isLoading ? "Donating..." : "Donate"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CauseDetailsPage;
