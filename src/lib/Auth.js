"use client";
import { auth } from "@/firebase/firebase.init";
import { setLoading, setUser } from "@/redux/features/user/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const Auth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));

        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);
};

export default Auth;
