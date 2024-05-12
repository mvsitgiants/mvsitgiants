import Servicescomponets from "../components/Servicescomponets";

import About from "./AboutMe";
import HeroTeam from "../AppIn/parts/HeroTeam";
import Advantage from "./../AppIn/parts/Advantage";
import Testimonial from "./../AppIn/parts/Testimonial";
import Data from "./../AppIn/json/landingPage.json";
import Discuss from "./../AppIn/parts/Discuss";
import Faq from "./Faq";

const Home = () => {
  return (
    <div className="container mx-auto">
      <HeroTeam />
      {/* <AppBanner></AppBanner> */}
      <Servicescomponets />
      <About />
      <Advantage data={Data.advantage} />
      <Testimonial data={Data.testimonial} />

      <Discuss />
      <Faq />
    </div>
  );
};

export default Home;
