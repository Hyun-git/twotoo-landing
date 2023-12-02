import React from "react";
import "./makers.css";
import Footer from "../../component/Footer/footer";

const makersName = [
  "오시연",
  "이형광",
  "김윤혜",
  "윤서현",
  "이동재",
  "백다연",
  "김현국",
  "주혜진",
  "박건우",
  "김지인",
  "김경훈",
];

const makersLink = [
  "https://www.linkedin.com/in/%EC%8B%9C%EC%97%B0-%EC%98%A4-522b0622b/",
  "Hyun-git.github.io",
  "https://www.behance.net/yoonhye",
  "https://github.com/seohyun0120",
  "https://github.com/LouiMinister",
  "https://github.com/ddyeon",
  "https://github.com/014967",
  "https://github.com/hj1115hj",
  "https://github.com/gunoooo",
  "https://github.com/julia0926",
  "https://github.com/kimkyunghun3",
];

function Makers() {
  return (
    <div className="makers-gallery">
      <span className="makers-title">만든이들</span>
      <div className="makers-grid">
        {makersName.map((name, index) => (
          <div key={index} className="makers-item">
            <a href={makersLink[index]} target="_blank">
              <img
                src={`img/makers/${name}.png`}
                alt={name}
                className="makers-image"
              />
            </a>
          </div>
        ))}
      </div>
      <Footer className="makers-footer"></Footer>
    </div>
  );
}

export default Makers;
