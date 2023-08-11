import React from "react";
import Split from "react-split";
import ProblemDiscription from "./ProblemDiscription";
import IDE from "./IDE";
import ProblemNavbar from "../problems/ProblemTable/ProblemNavbar";

function SplitDescription_and_IDE() {
  return (
  
     <div className="IDE_frontEnd_css">
        <Split className="split">
           <ProblemDiscription />
        <IDE />
      </Split>
     </div>
      
    
  );
}

export default SplitDescription_and_IDE;
