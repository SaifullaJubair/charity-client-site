"use client";
import { Button, Modal, Table } from "antd";
import { useEffect, useState } from "react";
import { DeleteFilled, PlusOutlined, EditOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import {
  useDeleteCauseMutation,
  useGetAllDonationsQuery,
  useGetCausesQuery,
} from "@/redux/api/apiSlice";
import Link from "next/link";
import toast from "react-hot-toast";
import Loader from "@/utils/Loader/Loader";

const AllDonationTable = () => {
  const { data: donations, isLoading } = useGetAllDonationsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  console.log(donations);
  const router = useRouter();

  const handleDeleteWithConfirmation = (id) => {
    const handleOk = () => {
      deleteCause(id);
    };

    Modal.confirm({
      title: "Are you sure you want to delete this cause?",
      okText: "Delete",
      okButtonProps: {
        style: {
          backgroundColor: "#FF7875",
          border: "none",
          color: "white",
        },
      },
      onOk: () => handleOk(),
    });
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const handleTableChange = (pagination) => {
    setCurrentPage(pagination.current);
    setPageSize(pagination.pageSize);
  };

  const columns = [
    {
      title: "No.",
      key: "no",
      render: (text, record, index) => index + 1 + (currentPage - 1) * pageSize,
    },

    {
      title: "Causes",
      dataIndex: "causeName",
      key: "cause_name",
    },
    {
      title: "Donner Name",
      dataIndex: "name",
      key: "donner_name",
    },
    {
      title: "Donner Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Mobile No",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
  ];
  if (isLoading) {
    return <Loader />;
  }
  if (donations.length === 0) {
    return <Loader />;
  }
  return (
    <div className=" lg:p-6 md:p-6 p-4 rounded-xl lg:min-h-screen">
      <div className="flex justify-between items-center pb-4">
        <h1 className="text-2xl ">All Donations</h1>
      </div>
      <hr />
      <Table
        onChange={(pagination) => handleTableChange(pagination)}
        className="mt-4"
        dataSource={donations}
        columns={columns}
        scroll={{ x: "100%" }}
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "10px",
        }}
        pagination={{
          pageSize: 5,
          style: {
            backgroundColor: "#ffffff",
            paddingRight: "15px",
          },
        }}
      />
    </div>
  );
};

export default AllDonationTable;
