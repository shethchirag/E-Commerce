import { useState } from "react";
import myContext from "./MyContext";

const MyState = (props) => {
  const [mode, setMode] = useState("light");
  const user = {
    profile_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv6uqtQ-JqOGQD_VrjhSnpfz58NZUV1XyUp2bF2QpCVA&s",
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#01223c";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <myContext.Provider value={{ mode, toggleMode, user }}>
      {props.children}
    </myContext.Provider>
  );
};

export default MyState;
