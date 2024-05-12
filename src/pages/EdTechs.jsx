import EdTechsGrid from "../components/EdTechs/EdTechsGrid";
import { EdTechsProvider } from "../context/EdTechsContext";

const EdTechs = () => {
  return (
    <EdTechsProvider>
      <div className="container mx-auto">
        <EdTechsGrid />
      </div>
    </EdTechsProvider>
  );
};

export default EdTechs;
