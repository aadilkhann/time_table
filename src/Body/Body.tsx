import React from "react";
import Days from "./Days.tsx";
import Periods from "./Periods.tsx";
import Shedule from "./Shedule.tsx";
import Tuesday from "./Tuesday.tsx";
// import { subject_Mon } from "./data";
import "./Body.css";

const Body = () => {
  return (
    <div className="Body">
      <Days />
      <div>
        <Periods />
        <Shedule />
        <Tuesday />
        <Shedule />
        <Tuesday />
        <Shedule />
        <Tuesday />
      </div>
    </div>
  );
};

export default Body;
