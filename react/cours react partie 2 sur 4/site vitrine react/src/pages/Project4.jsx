import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";
import Logo from "../components/Logo";
import Buttons from "../components/Buttons";
import Project from "../components/Project";

const Project4 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={3} />

        <Buttons left={"/projet-3"} right={"/contact"} />
      </div>
    </main>
  );
};

export default Project4;
