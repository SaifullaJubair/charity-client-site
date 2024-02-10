"use client";

import { useEffect } from "react";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/redux/features/user/userSlice";

const Login = () => {
  const { user, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (user.email) {
      router.push("/");
      toast.success("Login Successful");
    }
  }, [user?.email]);
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    dispatch(loginUser({ email, password }));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <div className="flex flex-col max-w-md p-6  mx-auto  my-20 rounded-md sm:p-10 bg-gray-50 text-gray-800">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Login</h1>
        <p className="text-sm text-gray-600">Login to access your account</p>
      </div>
      <form onSubmit={handleLogin} className="space-y-12">
        <div className="space-y-4">
          <div>
            <label for="email" className="block mb-2 font-semibold">
              Email address
            </label>
            <input
              type="email"
              name="email"
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-3 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
            />
          </div>
          <div>
            <div>
              <label for="password" className="font-semibold block mb-2">
                Password
              </label>
            </div>
            <input
              type="password"
              name="password"
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
              Login
            </button>
          </div>
          <p className="px-6 text-sm text-center text-gray-600">
            Already have account!! Please
            <Link href="/register" className="hover:underline text-orange-600">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
