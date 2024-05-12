import { useState, createContext } from "react";
import { EdTechsData } from "../data/EdTechs";

// Create EdTechs context
export const EdTechsContext = createContext();

// Create the EdTechs context provider
export const EdTechsProvider = (props) => {
  const [EdTechs, setEdTechs] = useState(EdTechsData);
  const [searchEdTech, setSearchEdTech] = useState("");
  const [selectEdTech, setSelectEdTech] = useState("");

  // Search EdTechs by EdTech title
  const searchEdTechsByTitle = EdTechs.filter((item) => {
    const result = item.title.toLowerCase().includes(searchEdTech.toLowerCase())
      ? item
      : searchEdTech === ""
      ? item
      : "";
    return result;
  });

  // Select EdTechs by EdTech category
  const selectEdTechsByCategory = EdTechs.filter((item) => {
    let category =
      item.category.charAt(0).toUpperCase() + item.category.slice(1);
    return category.includes(selectEdTech);
  });

  return (
    <EdTechsContext.Provider
      value={{
        EdTechs,
        setEdTechs,
        searchEdTech,
        setSearchEdTech,
        searchEdTechsByTitle,
        selectEdTech,
        setSelectEdTech,
        selectEdTechsByCategory,
      }}
    >
      {props.children}
    </EdTechsContext.Provider>
  );
};
