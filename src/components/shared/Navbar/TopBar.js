import {
  FacebookFilled,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import React from "react";

function TopBar() {
  return (
    <div className=" bg-primary py-4  text-light hidden md:block">
      <div className="max-w-[1700px] mx-auto">
        <nav className="flex items-center justify-between mx-12">
          <div className="flex items-center ">
            <div>
              <MailOutlined className="text-secondary mr-2 " />
              Email: saifullajubair6@gmail.com
            </div>
            <div className="mx-2">|</div>
            <div>
              <PhoneOutlined className="text-secondary " /> Contact:
              +8801923868397
            </div>
          </div>
          <div>
            <p>
              Follow Us- <FacebookFilled className="mx-1 text-gray-300" />
              <InstagramOutlined className="ml-1 text-gray-300" />{" "}
              <TwitterOutlined className="ml-1 text-gray-300" />
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default TopBar;
