import { useState } from "react";
import AddProject from "./components/AddProject";
import ProjectList from "./components/ProjectList";

function App() {
  const [isAddingProject, setIsAddingProject] = useState(false);
  const handleAdd = () => {
    setIsAddingProject(true);
  };
  return (
    <main className="mt-8 flex">
      <ProjectList handleAdd={handleAdd} isAddingProject={isAddingProject}/>
      <AddProject handleAdd={handleAdd} isAddingProject={isAddingProject}/>
    </main>
  );
}

export default App;
