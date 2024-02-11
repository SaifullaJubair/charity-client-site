"use client";
import { useGetAllDonationsQuery } from "@/redux/api/apiSlice";
import Loader from "@/utils/Loader/Loader";
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import EmptyData from "../EmptyData/EmptyData";
import { Empty } from "antd";

const AllStatistic = () => {
  const { data, isLoading } = useGetAllDonationsQuery();
  console.log(data);

  if (isLoading) {
    return <Loader />;
  }
  if (data.length === 0) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Empty description={"You have no donation"} />
      </div>
    );
  }

  // Prepare data for the chart
  const causes = data.map((donation) => donation.causeName);
  const totalAmounts = data.map((donation) => donation.amount);

  const chartData = {
    labels: causes,
    datasets: [
      {
        label: "Total Donation Amount",
        data: totalAmounts,
        backgroundColor: "rgba(75,192,192,0.6)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Generate a key to force re-render of the chart component
  const chartKey = new Date().getTime();

  return (
    <div>
      <div>
        <p className="text-3xl font-bold text-gray-700">
          You get {data.length} Donations.
        </p>
      </div>
      <div className="mt-6">
        <Bar key={chartKey} data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default AllStatistic;
