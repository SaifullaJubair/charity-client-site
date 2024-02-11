"use client";

import React from "react";
import { useSelector } from "react-redux";
import { useGetDonationByEmailQuery } from "@/redux/api/apiSlice";
import Loader from "@/utils/Loader/Loader";
import { Empty } from "antd";
import Chart from "react-apexcharts";

const StatisticPage = () => {
  const { user } = useSelector((state) => state.user);
  const donner = user.email;
  const { data, isLoading } = useGetDonationByEmailQuery(donner);
  console.log(data);

  if (isLoading) {
    return <Loader />;
  }

  if (data?.length === 0) {
    return (
      <div className=" mt-44">
        <Empty
          className="text-2xl text-gray-700"
          description="You don't have any donation"
        />
      </div>
    );
  }

  // Prepare data for the pie chart
  const causes = data.map((donation) => donation.causeName);
  const totalAmounts = data.map((donation) => donation.amount);

  const chartOptions = {
    labels: causes,
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const chartSeries = totalAmounts;

  return (
    <div className="max-w-[1920px] mx-auto">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12 text-black mx-4 xl:mx-0 my-6">
          <div className="col-span-2">
            <h2 className="text-3xl font-bold mb-4">
              Your {data?.length} Donation Statistics compare by donation amount
            </h2>
            <Chart
              options={chartOptions}
              series={chartSeries}
              type="donut"
              width="80%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticPage;
