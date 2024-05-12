import { useContext } from "react";
import { FiClock, FiTag } from "react-icons/fi";
import SingleEdTechContext from "../../context/SingleEdTechContext";

const EdTechSingleHeader = () => {
  const { singleEdTechData } = useContext(SingleEdTechContext);

  return (
    <div>
      <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
        {singleEdTechData.EdTechHeader.title}
      </p>
      <div className="flex">
        <div className="flex items-center mr-10">
          <FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
          <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
            {singleEdTechData.EdTechHeader.publishDate}
          </span>
        </div>
        <div className="flex items-center">
          <FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
          <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
            {singleEdTechData.EdTechHeader.tags}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EdTechSingleHeader;
