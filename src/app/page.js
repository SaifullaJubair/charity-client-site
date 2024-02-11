import WhyChoseUs from "@/components/ui/WhyChoseUs/WhyChoseUs";
import AboutUs from "@/components/ui/AboutUs/AboutUs";
import Banner from "@/components/ui/Banner/Banner";
import UrgentCause from "@/components/ui/UrgentCause/UrgentCause";
import LatestCauses from "@/components/ui/LatestCauses/LatestCauses";
import OurEvents from "@/components/ui/OurEvents/OurEvents";
import BecomeVolunteer from "@/components/ui/BecomeVolunteer/BecomeVolunteer";
import VolunteersTeam from "@/components/ui/VolunteersTeam/VolunteersTeam";
import FaQ from "@/components/ui/FaQ/FaQ";
import WelcomeBanner from "@/components/ui/WelcomeBanner/WelcomeBanner";
import Blog from "@/components/ui/Blog/Blog";
import ViewCause from "@/components/ui/ViewCause/ViewCause";

const HomePage = () => {
  return (
    <div className="max-w-[1920px] mx-auto">
      <Banner />
      <ViewCause />
      {/* <UrgentCause /> */}
      <AboutUs />
      <WhyChoseUs />
      <LatestCauses />
      <OurEvents />
      <BecomeVolunteer />
      <VolunteersTeam />
      <FaQ />
      <WelcomeBanner />
      <Blog />
    </div>
  );
};

export default HomePage;
