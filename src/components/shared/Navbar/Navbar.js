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
import { useEffect, useState } from "react";
import { noto_sans } from "@/utils/Font/font";
import { MenuItems } from "./Menu";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "@/redux/features/user/userSlice";
import Loader from "@/utils/Loader/Loader";
import { useGetSingleUserQuery } from "@/redux/api/apiSlice";

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
  const { data, isLoading } = useGetSingleUserQuery(user?.email);

  const handleLogOut = () => {
    dispatch(logOut());
  };
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
    console.log("button click");
  };
  const onClose = () => {
    setOpen(false);
  };
  const pathname = usePathname();

  const [active, setActive] = useState("");
  useEffect(() => {
    if (pathname === "/") {
      setActive(1);
    } else if (pathname === "/cause") {
      setActive(2);
    } else if (
      pathname === "/about" ||
      pathname === "/contact-us" ||
      pathname === "/blog" ||
      pathname === "/event" ||
      pathname === "/volunteer" ||
      pathname === "/faq"
    ) {
      setActive(3);
    } else if (pathname === "/statistic") {
      setActive(4);
    } else if (pathname === "/register") {
      setActive(5);
    } else if (pathname === "/login") {
      setActive(6);
    } else if (pathname === "/dashboard") {
      setActive(7);
    } else if (pathname === "/donation") {
      setActive(9);
    }
  }, [pathname]);

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
            mode="horizontal"
            selectedKeys={[pathname]}
            defaultSelectedKeys={[pathname]}
          >
            <Menu.Item
              key="1"
              className={`font-semibold hover:text-secondary duration-200 ${
                active === 1 ? "text-secondary font-bold" : ""
              }`}
            >
              <Link href={"/"}>Home</Link>
            </Menu.Item>
            <Menu.Item
              key="2"
              className={`font-semibold hover:text-secondary duration-200 ${
                active === 2 ? "text-secondary font-bold" : ""
              }`}
            >
              <Link href="/cause">Cause</Link>
            </Menu.Item>
            <Dropdown
              menu={{
                items,
              }}
              className={`font-semibold text-primary mx-2 hover:text-secondary duration-200 ${
                active === 3 ? "text-secondary font-bold" : ""
              }`}
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
              className={`font-semibold hover:text-secondary duration-200 ${
                active === 4 ? "text-secondary font-bold" : ""
              }`}
            >
              <Link href="/statistic">My Statistic</Link>
            </Menu.Item>

            {user?.email ? (
              <>
                <Menu.Item
                  key="9"
                  className={`font-semibold hover:text-secondary duration-200 ${
                    active === 9 ? "text-secondary font-bold" : ""
                  }`}
                >
                  <Link href="/donation">Donation</Link>
                </Menu.Item>
                {/* Dashboard only for admin */}
                {data?.role === "admin" && (
                  <Menu.Item
                    key="7"
                    className={`font-semibold hover:text-secondary duration-200 ${
                      active === 7 ? "text-secondary font-bold" : ""
                    }`}
                  >
                    <Link href="/dashboard">Dashboard</Link>
                  </Menu.Item>
                )}
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
                  className={`font-semibold hover:text-secondary duration-200 ${
                    active === 5 ? "text-secondary font-bold" : ""
                  }`}
                >
                  <Link href="/register">Register</Link>
                </Menu.Item>
                <Menu.Item
                  key="6"
                  className={`font-semibold hover:text-secondary duration-200 ${
                    active === 6 ? "text-secondary font-bold" : ""
                  }`}
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
                  className={`font-semibold hover:text-secondary duration-200 ${
                    active === 1 ? "text-secondary font-bold" : ""
                  }`}
                >
                  <Link href={"/"}>Home</Link>
                </Menu.Item>
                <Menu.Item
                  key="2"
                  className={`font-semibold hover:text-secondary duration-200 ${
                    active === 2 ? "text-secondary font-bold" : ""
                  }`}
                >
                  <Link href="/cause">Cause</Link>
                </Menu.Item>
                <Dropdown
                  menu={{
                    items,
                  }}
                  className={`font-semibold text-primary mx-2 px-3 py-2 hover:text-secondary duration-200 ${
                    active === 3 ? "text-secondary font-bold" : ""
                  }`}
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
                  className={`font-semibold hover:text-secondary duration-200 ${
                    active === 4 ? "text-secondary font-bold" : ""
                  }`}
                >
                  <Link href="/statistic">Statistic</Link>
                </Menu.Item>
                <Menu.Item
                  key="9"
                  className={`font-semibold hover:text-secondary duration-200 ${
                    active === 9 ? "text-secondary font-bold" : ""
                  }`}
                >
                  <Link href="/donation">Donation</Link>
                </Menu.Item>

                {user?.email ? (
                  <>
                    <Menu.Item
                      key="7"
                      className={`font-semibold hover:text-secondary duration-200 ${
                        active === 7 ? "text-secondary font-bold" : ""
                      }`}
                    >
                      <Link href="/dashboard">Dashboard</Link>
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
                      className={`font-semibold hover:text-secondary duration-200 ${
                        active === 5 ? "text-secondary font-bold" : ""
                      }`}
                    >
                      <Link href="/register">Register</Link>
                    </Menu.Item>
                    <Menu.Item
                      key="6"
                      className={`font-semibold hover:text-secondary duration-200 ${
                        active === 6 ? "text-secondary font-bold" : ""
                      }`}
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
