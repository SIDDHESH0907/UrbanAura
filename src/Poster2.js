import React from "react";
import './Poster2.css'; // Don't forget to import your CSS file

const Poster2 = () => {
  return (
    <div className="poster-container">
      <div className="poster-child">
        <div className="left2"></div>
      </div>
      <div className="poster-child">
        <div className="right2">
          <p className="poster-heading">Creative harmonious living</p>
          <p className="poster-para">
            RAOUF Products are all made to standard sizes so that you can mix
            and match them freely.
          </p>
          <button className="poster-btn">SHOP NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Poster2;
