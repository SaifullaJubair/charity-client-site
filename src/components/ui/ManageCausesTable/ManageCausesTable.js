"use client";
import { Button, Modal, Table } from "antd";
import { useEffect, useState } from "react";
import { DeleteFilled, PlusOutlined, EditOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import {
  useDeleteCauseMutation,
  useGetCausesQuery,
} from "@/redux/api/apiSlice";
import Link from "next/link";
import toast from "react-hot-toast";
import Loader from "@/utils/Loader/Loader";

const ManageCausesTable = () => {
  const { data: causes, isLoading } = useGetCausesQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const [deleteCause, { isLoading: isDeleting, error, isSuccess }] =
    useDeleteCauseMutation();
  // console.log(causes);
  const router = useRouter();
  useEffect(() => {
    if (error) {
      toast.error("Something went wrong... 😔 Cause can't delete");
    } else if (isSuccess) {
      toast.success("Cause deleted successfully");
    }
  }, [error, isSuccess]);

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
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "name",
    },
    {
      title: "Goal",
      dataIndex: "goal",
      key: "goal",
    },
    {
      title: "Raised",
      dataIndex: "raised",
      key: "raised",
    },

    {
      title: "Action",
      key: "action",

      render: (record) => {
        return (
          <div>
            <Link href={`/admin/edit-cause/${record._id}`}>
              <Button className="text-xl" type="link">
                <EditOutlined />
              </Button>
            </Link>
            <Button
              className="text-xl"
              type="link"
              danger
              onClick={() => handleDeleteWithConfirmation(record._id)}
            >
              <DeleteFilled />
            </Button>
          </div>
        );
      },
    },
  ];
  if (isLoading) {
    return <Loader />;
  }
  if (causes.length === 0) {
    return <Loader />;
  }
  return (
    <div className="bg-gray-200 lg:p-6 md:p-6 p-4 rounded-xl lg:min-h-screen">
      <div className="flex justify-between items-center pb-4">
        <h1 className="text-2xl ">Manage Causes</h1>
        <Button
          type="link"
          className="bg-secondary text-white"
          onClick={() => router.push("/admin/add-cause")}
        >
          <PlusOutlined /> Add New cause{" "}
        </Button>
      </div>
      <hr />
      <Table
        onChange={(pagination) => handleTableChange(pagination)}
        className="mt-4"
        dataSource={causes}
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

export default ManageCausesTable;
