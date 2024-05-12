import { useState, createContext } from "react";
import { aboutMeData } from "../data/aboutMeData";

const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
  const [aboutMe, setAboutMe] = useState(aboutMeData);

  const [clientsData, setClientsData] = useState();

  return (
    <AboutMeContext.Provider
      value={{
        aboutMe,
        setAboutMe,

        setClientsData,
      }}
    >
      {children}
    </AboutMeContext.Provider>
  );
};

export default AboutMeContext;
