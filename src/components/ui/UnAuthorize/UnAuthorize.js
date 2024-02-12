import { Button } from "antd";
import React from "react";

const UnAuthorize = () => {
  return (
    <div>
      <div className="grid h-screen  mt-40 bg-white px-4">
        <div className="text-center">
          <h1 className="text-9xl font-black text-gray-200">Un Authorize!</h1>

          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-4">
            Uh-oh!
          </p>

          <p className="mt-4 text-gray-500">This page not for you. </p>

          <Button type="primary" className="bg-secondary mt-4">
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UnAuthorize;
