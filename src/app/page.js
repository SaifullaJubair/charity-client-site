import WhyChoseUs from "@/components/ui/WhyChoseUs/WhyChoseUs";
import AboutUs from "@/components/ui/AboutUs/AboutUs";
import Banner from "@/components/ui/Banner/Banner";
import UrgentCause from "@/components/ui/UrgentCause/UrgentCause";

const HomePage = () => {
  return (
    <div className="max-w-[1920px] mx-auto">
      <Banner />
      <UrgentCause />
      <AboutUs />
      <WhyChoseUs />
    </div>
  );
};

export default HomePage;
