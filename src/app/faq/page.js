"use client";

import FaQ from "@/components/ui/FaQ/FaQ";
import {
  decrement,
  increment,
  incrementByAmount,
} from "@/redux/features/counter/counterSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const FaQPage = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.counter);
  return (
    <div>
      <FaQ />

      <div className="m-20">
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <p className="px-4 text-black">{value}</p>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment by number
        </button>
      </div>
    </div>
  );
};

export default FaQPage;
