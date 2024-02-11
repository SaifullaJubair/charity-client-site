"use client";
import { Button, Modal, Table } from "antd";
import { useState } from "react";
import { DeleteFilled, PlusOutlined, EditOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useGetAllUsersQuery } from "@/redux/api/apiSlice";
import Link from "next/link";
import Loader from "@/utils/Loader/Loader";

const ManageUsersTable = () => {
  const { data: users, isLoading } = useGetAllUsersQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const router = useRouter();

  const handleUpdateRoleWithConfirmation = (record) => {
    const handleOk = async () => {};

    Modal.confirm({
      title: `Are you sure you want to make Admin this ${record.email} user?`,
      okText: "Update",
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
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },

    {
      title: "Action",
      key: "action",

      render: (record) => {
        return (
          <div>
            <Button
              type="primary"
              className="bg-secondary"
              onClick={() => handleUpdateRoleWithConfirmation(record)}
            >
              Update Role
              <EditOutlined />
            </Button>
          </div>
        );
      },
    },
  ];

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className=" lg:p-6 md:p-6 p-4 rounded-xl lg:min-h-screen">
      <div className="flex justify-between items-center pb-4">
        <h1 className="text-2xl ">Manage Users</h1>
      </div>
      <hr />
      <Table
        onChange={(pagination) => handleTableChange(pagination)}
        className="mt-4"
        dataSource={users}
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

export default ManageUsersTable;
