import WhyChoseUs from "@/components/ui/WhyChoseUs/WhyChoseUs";
import AboutUs from "@/components/ui/AboutUs/AboutUs";
import Banner from "@/components/ui/Banner/Banner";
import UrgentCause from "@/components/ui/UrgentCause/UrgentCause";
import LatestCauses from "@/components/ui/LatestCauses/LatestCauses";

const HomePage = () => {
  return (
    <div className="max-w-[1920px] mx-auto">
      <Banner />
      <UrgentCause />
      <AboutUs />
      <WhyChoseUs />
      <LatestCauses />
    </div>
  );
};

export default HomePage;
