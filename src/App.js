import { useEffect, useState } from "react";
import MouseHover from "./components/MouseHover";
import "./app.css";
function App() {
  const [curpos, setCurPos] = useState({ top: "4opx", left: "4opx" });
  let mouseCursor = document.querySelector(".cursor");
  let navlinks = document.querySelectorAll(".nav-links li");

  useEffect(() => {
    window.addEventListener("mousemove", cursor);
    window.addEventListener("mousemove", cursor);
  }, []);
  const cursor = (e) => {
    console.log("e", e);
    // setCurPos({ top: e.pageY + "px", left: e.pageX + "px" });
  };
  return (
    <div className="overAllUI">
      <div className="darkMode">
        <div className="cursor">check</div>
      </div>
      <div>
        <MouseHover />
      </div>
    </div>
  );
}

export default App;
