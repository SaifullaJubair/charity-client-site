import { cookie, satisfy, yatra } from "@/utils/Font/font";
import { Button } from "antd";
import Image from "next/image";
import v1 from "@/assets/v1.jpg";
import v2 from "@/assets/v2.jpg";
import v3 from "@/assets/v3.jpg";

const BecomeVolunteer = () => {
  return (
    <div
      className="max-w-[1920px] mx-auto min-h-[90vh] py-20"
      style={{
        backgroundImage: ` linear-gradient(0deg, rgba(15, 15, 15,.95), rgba(15, 15, 15,.95)),url('https://images.pexels.com/photos/6590920/pexels-photo-6590920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1440px] mx-auto my-16">
        {/*  */}
        <div className=" flex justify-between  gap-4 mx-4 mt-20">
          {/* text part */}
          <div className="lg:w-1/2 sm:w-3/4 w-full mx-4 sm:mx-auto">
            <h4
              className="text-2xl font-bold my-4 tracking-wider text-secondary "
              style={{ fontFamily: satisfy.style.fontFamily }}
            >
              Become A Volunteer
            </h4>
            <h2
              className="text-white font-semibold text-4xl my-6"
              style={{ fontFamily: yatra.style.fontFamily }}
            >
              Fill the form to become a volunteer!
            </h2>

            <p className=" text-sm text-gray-300 mt-4">
              There are many variations of passages of orem Ipsum available, but
              the majority have suffered alteration in some form, by cted ipsum
              dolor sit amet, consectetur adipisicing elit, sed do usmod mponcid
              idunt ut labore et dolore magna aliqua.
            </p>

            <section className=" my-6 text-white">
              <form className="container flex flex-col mx-auto space-y-12">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
                  <div className="grid grid-cols-6 gap-4 col-span-full ">
                    <div className="col-span-full sm:col-span-3">
                      <label for="firstname" className="text-sm ">
                        First name
                      </label>
                      <input
                        id="firstname"
                        type="text"
                        placeholder="First name"
                        className="w-full rounded-md focus:ring focus:ri dark:text-gray-900 p-1.5 p-1.5 dark:border-gray-700 focus:ri"
                      />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                      <label for="lastname" className="text-sm">
                        Last name
                      </label>
                      <input
                        id="lastname"
                        type="text"
                        placeholder="Last name"
                        className="w-full rounded-md focus:ring focus:ri dark:text-gray-900 p-1.5 dark:border-gray-700 focus:ri"
                      />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                      <label for="email" className="text-sm">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        className="w-full rounded-md focus:ring focus:ri dark:text-gray-900 p-1.5 dark:border-gray-700 focus:ri"
                      />
                    </div>
                    <div className="col-span-full">
                      <label for="address" className="text-sm">
                        Address
                      </label>
                      <input
                        id="address"
                        type="text"
                        placeholder=""
                        className="w-full rounded-md focus:ring focus:ri dark:text-gray-900 p-1.5 dark:border-gray-700 focus:ri"
                      />
                    </div>
                    <div className="col-span-full sm:col-span-2">
                      <label for="city" className="text-sm">
                        City
                      </label>
                      <input
                        id="city"
                        type="text"
                        placeholder=""
                        className="w-full rounded-md focus:ring focus:ri dark:text-gray-900 p-1.5 dark:border-gray-700 focus:ri"
                      />
                    </div>
                    <div className="col-span-full sm:col-span-2">
                      <label for="state" className="text-sm">
                        State / Province
                      </label>
                      <input
                        id="state"
                        type="text"
                        placeholder=""
                        className="w-full rounded-md focus:ring focus:ri dark:text-gray-900 p-1.5 dark:border-gray-700 focus:ri"
                      />
                    </div>
                    <div className="col-span-full sm:col-span-2">
                      <label for="zip" className="text-sm">
                        ZIP / Postal
                      </label>
                      <input
                        id="zip"
                        type="text"
                        placeholder=""
                        className="w-full rounded-md focus:ring focus:ri dark:text-gray-900 p-1.5 dark:border-gray-700 focus:ri"
                      />
                    </div>
                  </div>
                  <Button
                    type="primary"
                    className="my-4 bg-secondary rounded hover:scale-105 duration-300 hover:bg-red-500"
                  >
                    SUBMIT
                  </Button>
                </fieldset>
              </form>
            </section>
          </div>

          {/* image part  */}

          <div className="hidden lg:flex items-center justify-center -mx-4 lg:pl-8 ">
            <div className="flex flex-col items-end px-3">
              <Image
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                height={160}
                width={160}
                src={v2}
                alt=""
              />
              <Image
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                height={160}
                width={160}
                src={v3}
                alt=""
              />
            </div>
            <div className="px-3">
              <Image
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 lg:h-[360px] sm:w-64 lg:w-80"
                height={160}
                width={160}
                src={v1}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeVolunteer;
