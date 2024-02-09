"use client";

import { Button, Drawer, Layout, Menu, Typography } from "antd";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { noto_sans } from "@/utils/Font/font";
import { MenuItems } from "./Menu";

const { Header, Content } = Layout;
const { Title } = Typography;

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
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
            items={MenuItems}
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
          ></Menu>

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
                items={MenuItems}
                onClick={onClose}
                className="shadow-none border-none font-semibold w-full hover:text-secondary"
                style={{
                  fontFamily: noto_sans.style.fontFamily,
                  fontWeight: "500",
                }}
              ></Menu>
            </Drawer>
          </div>
        </Header>
      </Layout>
    </div>
  );
};

export default Navbar;
