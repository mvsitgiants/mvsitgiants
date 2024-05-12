import { useContext } from "react";
import SingleEdTechContext from "../../context/SingleEdTechContext";

const EdTechGallery = () => {
  const { singleEdTechData } = useContext(SingleEdTechContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
      {singleEdTechData.EdTechImages.map((EdTech) => {
        return (
          <div className="mb-10 sm:mb-0" key={EdTech.id}>
            <img
              src={EdTech.img}
              className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
              alt={EdTech.title}
              key={EdTech.id}
            />
          </div>
        );
      })}
    </div>
  );
};

export default EdTechGallery;
