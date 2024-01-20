// import React from "react";
import React, { useState, useEffect } from "react";
import "./Days.css";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const handleClick = () => {
  console.log("Clicked");
};

function Days() {
  const [currentRoute, setCurrentRoute] = useState(window.location.pathname);

  const handleRouteChange = () => {
    setCurrentRoute(window.location.pathname);
  };

  useEffect(() => {
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  const navigateTo = (path) => {
    window.history.pushState({}, "", path);
    handleRouteChange();
  };
  return (
    <div className="Days-Col">
      <div className="Days-name">
        <h3>Day/Period</h3>
      </div>
      {/* <div className=""> */}
      {days.map((day, key) => (
        <div key={`${day}`} className="Days-name">
          <h3 onClick={() => navigateTo(day)}>{day}</h3>
        </div>
      ))}
      {/* </div> */}
    </div>
  );
}

export default Days;
