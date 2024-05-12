import EdTechGallery from "../components/EdTechs/EdTechGallery";
import EdTechHeader from "../components/EdTechs/EdTechHeader";
import EdTechInfo from "../components/EdTechs/EdTechInfo";
import EdTechRelatedEdTechs from "../components/EdTechs/EdTechRelatedEdTechs";
import { SingleEdTechProvider } from "../context/SingleEdTechContext";
import { motion } from "framer-motion";

const EdTechSingle = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.6,
        delay: 0.15,
      }}
      className="container mx-auto mt-5 sm:mt-10"
    >
      <SingleEdTechProvider>
        <EdTechHeader />
        <EdTechGallery />
        <EdTechInfo />
        <EdTechRelatedEdTechs />
      </SingleEdTechProvider>
    </motion.div>
  );
};

export default EdTechSingle;
