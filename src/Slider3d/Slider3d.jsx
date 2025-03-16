import React from "react";
import dragon1 from "./images/dragon_1.jpg";
import dragon2 from "./images/dragon_2.jpg";
import dragon3 from "./images/dragon_3.jpg";
import dragon4 from "./images/dragon_4.jpg";
import dragon5 from "./images/dragon_5.jpg";
import dragon6 from "./images/dragon_6.jpg";
import dragon7 from "./images/dragon_7.jpg";
import dragon8 from "./images/dragon_8.jpg";
import dragon9 from "./images/dragon_9.jpg";
import dragon10 from "./images/dragon_10.jpg";
import "./Slider3d.css";

const images = [
  dragon1,
  dragon2,
  dragon3,
  dragon4,
  dragon5,
  dragon6,
  dragon7,
  dragon8,
  dragon9,
  dragon10,
];

const Slider3d = () => {
  return (
    <div className="container">
      <div className="banner">
        <div className="slider" style={{ "--quantity": images.length }}>
          {images.map((src, index) => (
            <div
              className="item"
              style={{ "--position": index + 1 }}
              key={index}
            >
              <img src={src} alt={`dragon_${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="content">
          <h1 data-content="CSS ONLY">CSS ONLY</h1>
          <div className="model"></div>
        </div>
      </div>
    </div>
  );
};

export default Slider3d;

// Video => https://www.youtube.com/watch?v=yqaLSlPOUxM&t=1s
