"use client";

import { Button, Drawer, Layout, Menu, Typography } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const { Header, Content } = Layout;
const { Title } = Typography;

const items = [
  { key: "1", label: "Home", href: "/" },
  { key: "2", label: "Cause", href: "/cause" },
  { key: "3", label: "Event", href: "/event" },
  { key: "3", label: "Blog", href: "/blog" },
  { key: "3", label: "Pages", href: "/pages" },
];

const Navbar = () => {
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
      <Layout className="layout  max-w-[1700px] mx-auto ">
        <Header className="flex  items-center py-8 bg-white px-8 ">
          <Content>
            <Link href="/">
              <Title className="m-0 text-2xl flex items-center">
                <p className="m-0 ml-2 ">Charity</p>
              </Title>
            </Link>
          </Content>
          <Menu
            className="md:block hidden "
            disabledOverflow
            mode="horizontal"
            selectedKeys={[pathname]}
            activeKey=""
          >
            {items?.map((item) => (
              <Menu.Item key={item.href} className="font-semibold  ">
                <Link href={item.href}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
          <div>
            <Button type="primary" onClick={showDrawer} className="md:hidden">
              <MenuOutlined />
            </Button>
            <Drawer title="Charity" onClose={onClose} open={open}>
              <Menu mode="vertical">
                {items?.map((item) => (
                  <Menu.Item key={item.href} className="font-semibold ">
                    <Link href={item.href} onClick={onClose}>
                      {item.label}
                    </Link>
                  </Menu.Item>
                ))}
              </Menu>
            </Drawer>
          </div>
        </Header>
      </Layout>
    </div>
  );
};

export default Navbar;
