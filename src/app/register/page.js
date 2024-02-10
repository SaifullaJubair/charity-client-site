"use client";

import { toast } from "react-hot-toast";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useSaveUserMutation } from "@/redux/api/apiSlice";
import { createUser } from "@/redux/features/user/userSlice";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Resister = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { user, error } = useSelector((state) => state.user);
  const [saveUser, { isLoading }] = useSaveUserMutation();
  useEffect(() => {
    if (user.email) {
      router.push("/");
      toast.success("User Created Successfully");
    }
  }, [user?.email]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handleResister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const user = {
      name,
      email,
      password,
    };
    if (name === "" || email === "" || password === "") {
      toast.error(
        `Please fill  the fields: ${name.length === 0 ? "Full Name" : ""} ${
          email.length === 0 ? ", email" : ""
        } ${password.length === 0 ? ", password" : ""}`
      );
      return;
    }
    if (password.length < 6) {
      toast.error("Password length minimum 6");
      return;
    }
    if (name.length > 0 && password.length > 5) {
      dispatch(createUser({ email, password }));
      saveUser(user);
    }
  };

  return (
    <div>
      <div className="flex flex-col max-w-md p-6  mx-auto  my-20 rounded-md sm:p-10 bg-gray-50 text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-600">Signup to access your account</p>
        </div>
        <form onSubmit={handleResister} className="space-y-12">
          <div className="space-y-4">
            <div>
              <label for="email" className="block mb-2 font-semibold">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="your name"
                className="w-full px-3 py-3 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
            <div>
              <label for="email" className="block mb-2 font-semibold">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-3 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
            <div>
              <div>
                <label for="password" className="font-semibold block mb-2 ">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-3 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-orange-600 text-gray-50"
              >
                {isLoading ? "Loading..." : "Resister"}
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-600">
              Already have account!! Please
              <Link href="/login" className="hover:underline text-orange-600">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Resister;
