"use client";
import { useSelector } from "react-redux";
import { useGetDonationByEmailQuery } from "@/redux/api/apiSlice";
import Loader from "@/utils/Loader/Loader";
import { Empty } from "antd";
// import ApexChart from "react-apexcharts";
// import { useEffect, useState } from "react";

const MyStatistic = () => {
  const { user } = useSelector((state) => state.user);
  const donner = user.email;
  // const name = user.name;
  const { data, isLoading } = useGetDonationByEmailQuery(donner);
  // //   console.log(data);

  // const [chartData, setChartData] = useState([]);

  // useEffect(() => {
  //   if (data) {
  //     // Process your data to prepare for the bar chart
  //     const processedData = data.map((donation) => ({
  //       x: donation.causeName,
  //       y: donation.amount,
  //     }));

  //     setChartData(processedData);
  //   }
  // }, [data]);

  // const pieChartOptions = {
  //   labels: chartData.map((entry) => entry.x),
  // };

  // const barChartOptions = {
  //   xaxis: {
  //     categories: chartData.map((entry) => entry.x),
  //   },
  // };

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
    <div className="max-w-[1920px] mx-auto">
      <div className="max-w-[1440px] mx-auto">
        <h1 className="text-3xl my-10 text-gray-700 font-semibold">
          This account {donner} have {data?.length} Donation. Your total
          donation amount is $
          {data?.reduce((total, donation) => total + donation.amount, 0)}{" "}
        </h1>
        {/* <div>
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
        </div> */}
      </div>
    </div>
  );
};

export default MyStatistic;
