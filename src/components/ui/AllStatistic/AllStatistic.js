"use client";
import { useGetAllDonationsQuery } from "@/redux/api/apiSlice";
import Loader from "@/utils/Loader/Loader";
import React, { useEffect, useState } from "react";
import ApexChart from "react-apexcharts";
import { Empty } from "antd";

const AllStatistic = () => {
  const { data, isLoading } = useGetAllDonationsQuery();
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (data) {
      // Process your data to prepare for the pie chart
      const processedData = data.map((donation) => ({
        x: donation.causeName,
        y: donation.amount,
      }));

      setChartData(processedData);
    }
  }, [data]);

  const chartOptions = {
    labels: chartData.map((entry) => entry.x),
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!data || data.length === 0) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Empty description={"You have no donation"} />
      </div>
    );
  }

  return (
    <div>
      <ApexChart
        options={chartOptions}
        series={chartData.map((entry) => entry.y)}
        type="pie"
        height={350}
      />
    </div>
  );
};

export default AllStatistic;
