import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  

  return (
    <div>
       <i className="bi bi-cloud-snow"></i>
        {season === "Winter" ? "Thandi vajti ahai" : "Bhauu garam hotay"}
        
    </div>
  );
};

export default SeasonDisplay;
