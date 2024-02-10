"use client";

import {
  Button,
  Drawer,
  Dropdown,
  Layout,
  Menu,
  Space,
  Typography,
} from "antd";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { noto_sans } from "@/utils/Font/font";
import { MenuItems } from "./Menu";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "@/redux/features/user/userSlice";

const { Header, Content } = Layout;
const { Title } = Typography;

const items = [
  {
    key: "3.1",
    label: (
      <Link
        className="font-semibold hover:text-secondary duration-200"
        href="/about-us"
      >
        AboutUs
      </Link>
    ),
  },
  {
    key: "3.2",
    label: (
      <Link
        className="font-semibold hover:text-secondary duration-200"
        href="/contact-us"
      >
        ContactUs
      </Link>
    ),
  },
  {
    key: "3.4",
    label: (
      <Link
        className="font-semibold hover:text-secondary duration-200"
        href="/blog"
      >
        Blog
      </Link>
    ),
  },
  {
    key: "3.6",
    label: (
      <Link
        className="font-semibold hover:text-secondary duration-200"
        href="/event"
      >
        Event
      </Link>
    ),
  },
  {
    key: "3.3",
    label: (
      <Link
        className="font-semibold hover:text-secondary duration-200"
        href="/volunteer"
      >
        Volunteer
      </Link>
    ),
  },
  {
    key: "3.5",
    label: (
      <Link
        className="font-semibold hover:text-secondary duration-200"
        href="/faq"
      >
        FaQ
      </Link>
    ),
  },
];
const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  // console.log(user);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
    console.log("button click");
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="shadow-lg sticky top-0 z-50 bg-white">
      <Layout className="layout  max-w-[1700px] mx-auto">
        <Header className="flex  items-center py-10  px-8  bg-white ">
          <Content>
            <Link href="/">
              <Title className="m-0 text-2xl flex items-center">
                <p className="m-0 ml-2 ">Charity</p>
              </Title>
            </Link>
          </Content>
          <Menu
            className="md:block hidden border-none "
            disabledOverflow
            mode="horizontal"
            selectedKeys={[pathname]}
            style={{
              fontFamily: noto_sans.style.fontFamily,
              fontWeight: "500",
              fontSize: "16px",
              padding: " 20px",
              background: "transparent",
              border: "none",
              boxShadow: "none",
              borderRadius: "0",
            }}
          >
            <Menu.Item
              key="1"
              className="font-semibold hover:text-secondary duration-200"
            >
              <Link href={"/"}>Home</Link>
            </Menu.Item>
            <Menu.Item
              key="2"
              className="font-semibold hover:text-secondary duration-200"
            >
              <Link href="/cause">Cause</Link>
            </Menu.Item>
            <Dropdown
              menu={{
                items,
              }}
              className="text-primary mx-2 px-4 font-semibold"
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Pages
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <Menu.Item
              key="4"
              className="font-semibold hover:text-secondary duration-200"
            >
              <Link href="/statistic">Statistic</Link>
            </Menu.Item>

            {user?.email ? (
              <>
                <Menu.Item
                  key="7"
                  className="font-semibold hover:text-secondary duration-200"
                >
                  <Link href="/register">Dashboard</Link>
                </Menu.Item>
                <Menu.Item
                  key={"8"}
                  className="font-semibold hover:text-secondary duration-200"
                  onClick={handleLogOut}
                >
                  Logout
                </Menu.Item>
              </>
            ) : (
              <>
                <Menu.Item
                  key="5"
                  className="font-semibold hover:text-secondary duration-200"
                >
                  <Link href="/register">Register</Link>
                </Menu.Item>
                <Menu.Item
                  key="6"
                  className="font-semibold hover:text-secondary duration-200"
                >
                  <Link href="/login">Login</Link>
                </Menu.Item>
              </>
            )}
          </Menu>

          <div>
            <Button
              type="primary"
              onClick={showDrawer}
              className="md:hidden bg-secondary"
            >
              <MenuOutlined />
            </Button>
            <Drawer title="Charity" onClose={onClose} open={open}>
              <Menu
                mode="vertical"
                onClick={onClose}
                className="shadow-none border-none font-semibold w-full hover:text-secondary"
                style={{
                  fontFamily: noto_sans.style.fontFamily,
                  fontWeight: "500",
                }}
              >
                <Menu.Item
                  key="1"
                  className="font-semibold hover:text-secondary duration-200"
                >
                  <Link href={"/"}>Home</Link>
                </Menu.Item>
                <Menu.Item
                  key="2"
                  className="font-semibold hover:text-secondary duration-200"
                >
                  <Link href="/cause">Cause</Link>
                </Menu.Item>
                <Dropdown
                  menu={{
                    items,
                  }}
                  className="text-primary mx-1   px-4 font-semibold"
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      Pages
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
                <Menu.Item
                  key="4"
                  className="font-semibold hover:text-secondary duration-200"
                >
                  <Link href="/statistic">Statistic</Link>
                </Menu.Item>

                {user?.email ? (
                  <>
                    <Menu.Item
                      key="7"
                      className="font-semibold hover:text-secondary duration-200"
                    >
                      <Link href="/register">Dashboard</Link>
                    </Menu.Item>
                    <Menu.Item
                      key={"8"}
                      className="font-semibold hover:text-secondary duration-200"
                      onClick={handleLogOut}
                    >
                      Logout
                    </Menu.Item>
                  </>
                ) : (
                  <>
                    <Menu.Item
                      key="5"
                      className="font-semibold hover:text-secondary duration-200"
                    >
                      <Link href="/register">Register</Link>
                    </Menu.Item>
                    <Menu.Item
                      key="6"
                      className="font-semibold hover:text-secondary duration-200"
                    >
                      <Link href="/login">Login</Link>
                    </Menu.Item>
                  </>
                )}
              </Menu>
            </Drawer>
          </div>
        </Header>
      </Layout>
    </div>
  );
};

export default Navbar;
