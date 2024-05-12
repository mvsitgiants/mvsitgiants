import AboutMeBio from "../components/about/AboutMeBio";
import AboutCounter from "../components/about/AboutCounter";
import AboutClients from "../components/about/AboutClients";
import { AboutMeProvider } from "../context/AboutMeContext";
import { motion } from "framer-motion";

const About = () => {
  return (
    <AboutMeProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto"
      >
        <div>
          {" "}
          <h1 className=" mt-2 text-3xl text-center font-bold tracking-tight dark:text-primary-light text-gray-900 sm:text-4xl">
            About Us
          </h1>
        </div>
        <AboutMeBio />
      </motion.div>

      {/** Counter without paddings */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}
      >
        <AboutCounter />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto"
      >
        <video
          className="mt-20"
          src="https://res.cloudinary.com/dzayefrfi/video/upload/v1715042473/Blue_White_Modern_Bold_Digital_Marketing_Expert_Video_thy4yp.mp4"
          muted
          autoPlay
          loop
        ></video>
      </motion.div>
    </AboutMeProvider>
  );
};

export default About;
