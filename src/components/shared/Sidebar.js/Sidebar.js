"use client";
import { RightOutlined } from "@ant-design/icons";
import { Button, Drawer, Layout, Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const { Content, Sider } = Layout;

const Sidebar = ({ children }) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
    console.log("button click");
  };
  const onClose = () => {
    setOpen(false);
  };
  const adminItems = [
    { key: "2", label: "Manage Causes", href: "/admin/manage-causes" },
    { key: "3", label: "Add Cause", href: "/admin/add-cause" },
    { key: "4", label: "Manage Users", href: "/admin/manage-users" },
    { key: "5", label: "All Donation", href: "/admin/all-donation" },
    { key: "6", label: "Back Home", href: "/" },
  ];

  const pathname = usePathname();
  const getSelectedKey = () => {
    return adminItems.find((item) => item.href === pathname)?.key || "";
  };

  return (
    <Layout>
      <Content>
        <Layout className="">
          <Sider
            width={250}
            className="min-h-screen hidden md:block bg-light m-6 py-2 rounded-xl"
          >
            <Menu
              className="h-full px-3 font-semibold  bg-transparent py-1 "
              mode="inline"
              defaultSelectedKeys={[getSelectedKey()]}
              selectedKeys={[getSelectedKey()]}
            >
              {adminItems?.map((item) => (
                <Menu.Item key={item.key} className="text-dark">
                  <Link href={item.href}>{item.label}</Link>
                </Menu.Item>
              ))}
            </Menu>
          </Sider>

          <Button
            type="primary"
            onClick={showDrawer}
            className="md:hidden bg-secondary "
          >
            <RightOutlined />
          </Button>
          <Drawer
            title="My Dashboard"
            placement="left"
            onClose={onClose}
            open={open}
          >
            <Menu
              className="h-full px-3 font-semibold  bg-transparent py-1"
              mode="inline"
              defaultSelectedKeys={[getSelectedKey()]}
              selectedKeys={[getSelectedKey()]}
            >
              {adminItems?.map((item) => (
                <Menu.Item
                  key={item.key}
                  className="text-dark"
                  onClick={onClose}
                >
                  <Link href={item.href}>{item.label}</Link>
                </Menu.Item>
              ))}
            </Menu>
          </Drawer>

          <Content className=" p-6 pl-0 min-h-screen">{children}</Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default Sidebar;
