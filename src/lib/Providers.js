"use client";

import { auth } from "@/firebase/firebase.init";
import { setLoading, setUser } from "@/redux/features/user/userSlice";
import store from "@/redux/store";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <AntdRegistry>{children}</AntdRegistry>
    </Provider>
  );
};

export default Providers;
