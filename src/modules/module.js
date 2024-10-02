import { useState } from "react";
import ApproachContent from "../components/approach/approachContent";
import AboutContent from "../components/about/aboutContent";

export default function Module() {
  const [isShown, setIsShown] = useState(false);

  // Shared toggle function
  const toggle = () => {
    setIsShown((prevShown) => !prevShown);
  };

  return (
    <div>
      {/* Pass the toggle function and isShown state to multiple components */}
      <ApproachContent isShown={isShown} toggle={toggle} />
      <AboutContent isShown={isShown} toggle={toggle} />
    </div>
  );
}
