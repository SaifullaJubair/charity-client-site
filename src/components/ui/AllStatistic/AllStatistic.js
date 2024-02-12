"use client";

import { useGetAllDonationsQuery } from "@/redux/api/apiSlice";
import Loader from "@/utils/Loader/Loader";
import React, { useEffect, useState } from "react";
import ApexChart from "react-apexcharts";
import { Empty } from "antd";

const AllStatistic = () => {
  const { data, isLoading } = useGetAllDonationsQuery();
  const [chartData, setChartData] = useState([]);
  // console.log(data);

  useEffect(() => {
    if (data) {
      let newData = [];

      data.forEach((element) => {
        if (!newData.find((item) => item.causeName === element.causeName)) {
          newData.push({ ...element });
        } else {
          let index = newData.findIndex(
            (item) => item.causeName === element.causeName
          );
          newData[index].amount += element.amount;
        }
      });
      console.log("newdata: ", newData);
      // Process your data to prepare for the bar chart
      const processedData = newData.map((donation) => ({
        x: donation.causeName,
        y: donation.amount,
      }));

      setChartData(processedData);
    }
  }, [data]);

  const pieChartOptions = {
    labels: chartData.map((entry) => entry.x),
  };

  const barChartOptions = {
    xaxis: {
      categories: chartData.map((entry) => entry.x),
    },
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
      <div>
        <h2>Pie Chart</h2>
        <ApexChart
          options={pieChartOptions}
          series={chartData.map((entry) => entry.y)}
          type="pie"
          height={350}
        />
      </div>
      <div>
        <h2>Bar Chart</h2>
        <ApexChart
          options={barChartOptions}
          series={[{ data: chartData.map((entry) => entry.y) }]}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
};

export default AllStatistic;
