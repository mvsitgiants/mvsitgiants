import { useContext } from "react";
import SingleEdTechContext from "../../context/SingleEdTechContext";

const EdTechRelatedEdTechs = () => {
  const { singleEdTechData } = useContext(SingleEdTechContext);

  return (
    <div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
      <p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
        {singleEdTechData.RelatedEdTech.title}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
        {singleEdTechData.RelatedEdTech.EdTechs.map((EdTech) => {
          return (
            <img
              src={EdTech.img}
              className="rounded-xl cursor-pointer"
              alt={EdTech.title}
              key={EdTech.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EdTechRelatedEdTechs;
