import { cookie, yatra } from "@/utils/Font/font";
import Image from "next/image";
import house from "@/assets/house.jpg";
import { Button, Slider } from "antd";

const UrgentCause = () => {
  return (
    <div
      className="max-w-[1920px] mx-auto min-h-[90vh] mb-10 pt-10"
      style={{
        backgroundImage: `
       linear-gradient(0deg, rgba(237, 233, 231,.88), rgba(237, 233, 231,.88)),url('https://images.pexels.com/photos/6463400/pexels-photo-6463400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1440px] mx-auto py-16 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 text-black mx-4 xl:mx-0">
          <div className="p-2 rounded-md">
            <h6
              className="text-3xl my-2 mt-12 tracking-wider text-secondary"
              style={{ fontFamily: cookie.style.fontFamily }}
            >
              Urgent Cause
            </h6>
            <h2
              className="text-4xl font-bold my-4 text-darkLight "
              style={{
                fontFamily: yatra.style.fontFamily,
              }}
            >
              We Help More Than 9k Children Every Year
            </h2>
            <p className="text-gry-700 text-sm">
              BigHearts is the largest global crowdfunding community connecting
              nonprofits, donors, and companies in nearly every country. We help
              nonprofits from
            </p>
            <Button type="primary" danger className="mt-8">
              VIEW ALL CAUSE
            </Button>
          </div>
          {[1, 2, 3].map((item) => (
            <div
              className="p-4 rounded-md bg-white hover:scale-105 duration-500"
              key={item}
            >
              <Image
                src={house}
                width={300}
                height={100}
                layout="responsive"
                alt="Shelter"
                className="rounded-lg"
              />
              <h6
                className="text-2xl mt-2 text-secondary"
                style={{ fontFamily: cookie.style.fontFamily }}
              >
                Urgent cause
              </h6>
              <h2
                className="text-xl font-semibold mt-2 mb-4
                   hover:text-secondary text-darkLight duration-500"
              >
                We Help More Than 9k Children Every Year
              </h2>
              <p className="text-gry-700 text-sm">
                BigHearts is the largest global crowdfunding community ...
              </p>
              <div className=" text-gray-700 font-semibold mt-2">
                <p>Raised : $6,399.00</p>
                <p>Goal : $6,781.00</p>
              </div>
              {/* <Slider defaultValue={30} /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UrgentCause;
