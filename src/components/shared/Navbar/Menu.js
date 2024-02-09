import { DownOutlined } from "@ant-design/icons";
import Link from "next/link";

export const MenuItems = [
  {
    key: "Home",
    label: <Link href="/">Home</Link>,
  },
  {
    key: "Cause",
    label: <Link href="/cause">Cause</Link>,
  },
  {
    key: "Pages",
    label: (
      <span className="flex items-center gap-1">
        Page <DownOutlined />
      </span>
    ),

    children: [
      {
        key: "5.1",
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
        key: "5.2",
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
        key: "5.4",
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
        key: "5.6",
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
        key: "5.5",
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
        key: "5.3",
        label: (
          <Link
            className="font-semibold hover:text-secondary duration-200"
            href="/faq"
          >
            FaQ
          </Link>
        ),
      },
    ],
  },
  {
    key: "Statistic",
    label: <Link href="/statistic">Statistic</Link>,
  },
  {
    key: "Register",
    label: <Link href="/register">Register</Link>,
  },
  {
    key: "Login",
    label: <Link href="/login">Login</Link>,
  },
];
