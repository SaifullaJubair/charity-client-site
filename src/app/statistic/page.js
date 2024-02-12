"use client";
import { useSelector } from "react-redux";
import { useGetDonationByEmailQuery } from "@/redux/api/apiSlice";
import Loader from "@/utils/Loader/Loader";
import { Empty } from "antd";
import { useEffect, useState } from "react";

import dynamic from "next/dynamic";
import UnAuthorize from "@/components/ui/UnAuthorize/UnAuthorize";
import Link from "next/link";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const MyStatistic = () => {
  const { user } = useSelector((state) => state.user);
  const donner = user.email;
  const { data, isLoading } = useGetDonationByEmailQuery(donner);

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (data) {
      // Process your data to prepare for the bar chart
      const processedData = data.map((donation) => ({
        x: donation.causeName,
        y: donation.amount,
      }));

      setChartData(processedData);
    }
  }, [data]);

  const pieChartOptions = {
    labels: chartData.map((entry) => entry.x),
  };
  //   console.log(pieChartOptions);
  const barChartOptions = {
    xaxis: {
      categories: chartData.map((entry) => entry.x),
    },
  };
  //   console.log(barChartOptions);

  if (isLoading) {
    return <Loader />;
  }

  if (!donner) {
    return (
      <div className=" mt-44">
        <h2 className=" font-semibold text-2xl my-4 text-center">
          Please{" "}
          <Link href={"/login"} className="text-secondary ">
            Login
          </Link>{" "}
          to donate!
        </h2>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Empty description={"You have no donation"} />
      </div>
    );
  }

  return (
    <div className="max-w-[1920px] mx-auto">
      <div className="max-w-[1440px] mx-auto  ">
        <h1 className="text-2xl my-10 text-gray-700 font-semibold max-w-2xl">
          This account {donner} have {data?.length} Donation. Your total
          donation amount is $
          {data?.reduce((total, donation) => total + donation.amount, 0)}{" "}
        </h1>
        <div>
          <div className="py-10 overflow-x-auto ">
            <h2>Pie Chart</h2>
            <ApexChart
              options={pieChartOptions}
              series={chartData.map((entry) => entry.y)}
              type="pie"
              height={350}
              width={500}
            />
          </div>
          <div className="py-10 overflow-x-auto">
            <h2>Bar Chart</h2>
            <ApexChart
              options={barChartOptions}
              series={[{ data: chartData.map((entry) => entry.y) }]}
              type="bar"
              height={350}
              width={500}
            />
          </div>
          <div className="py-10 overflow-x-auto">
            <h2>Line Chart</h2>
            <ApexChart
              type="line"
              options={barChartOptions}
              series={[{ data: chartData.map((entry) => entry.y) }]}
              height={200}
              width={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyStatistic;
