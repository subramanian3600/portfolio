import React from "react";
import "../styles/Skills.css";
import html5 from "../assets/images/html5.png";
import css3 from "../assets/images/css3.jpg";
import js from "../assets/images/js.png";
import reactjs from "../assets/images/reactjs.png";
import ai from "../assets/images/ai.png";
import github from "../assets/images/github.png";
import adobepremiere from "../assets/images/premierepro.png";
import firebase from "../assets/images/firebase.jpg";
import python from "../assets/images/python.jpg";
import ms from "../assets/images/ms.jpg";

export default function Skills() {
  return (
    <div className="Skills_page" id="Skills">
      <div className="Skills_page_layout">
        <div
          className="Skills_page_layout_top"
          data-aos="slide-down"
          data-aos-duration="1000"
        >
          Skills
        </div>
        <div className="Skills_page_layout_bottom">
          <div className="skills_box">
            <div
              className="skills_box_card"
              data-aos="slide-right"
              data-aos-duration="800"
            >
              <div className="skills_box_card_img">
                <img src={html5} alt="html5" />
              </div>
              <div className="skills_box_card_title">HTML 5</div>
            </div>
            <div
              className="skills_box_card"
              data-aos="slide-right"
              data-aos-duration="850"
            >
              <div className="skills_box_card_img">
                <img src={css3} alt="css3" />
              </div>
              <div className="skills_box_card_title">CSS 3</div>
            </div>

            <div
              className="skills_box_card"
              data-aos="slide-right"
              data-aos-duration="900"
            >
              <div className="skills_box_card_img">
                <img src={js} alt="js" />
              </div>
              <div className="skills_box_card_title">JavaScript</div>
            </div>
            <div
              className="skills_box_card"
              data-aos="slide-right"
              data-aos-duration="950"
            >
              <div className="skills_box_card_img">
                <img src={reactjs} alt="reactjs" />
              </div>
              <div className="skills_box_card_title">React Js</div>
            </div>
            <div
              className="skills_box_card"
              data-aos="slide-right"
              data-aos-duration="1000"
            >
              <div className="skills_box_card_img">
                <img src={github} alt="github" />
              </div>
              <div className="skills_box_card_title">Github</div>
            </div>
            <div
              className="skills_box_card"
              data-aos="slide-left"
              data-aos-duration="1000"
            >
              <div className="skills_box_card_img">
                <img src={firebase} alt="firebase" />
              </div>
              <div className="skills_box_card_title">Firebase</div>
            </div>
            <div
              className="skills_box_card"
              data-aos="slide-left"
              data-aos-duration="950"
            >
              <div className="skills_box_card_img">
                <img src={python} alt="python" />
              </div>
              <div className="skills_box_card_title">Python</div>
            </div>
            <div
              className="skills_box_card"
              data-aos="slide-left"
              data-aos-duration="900"
            >
              <div className="skills_box_card_img">
                <img src={ms} alt="ms" />
              </div>
              <div className="skills_box_card_title">MS Office</div>
            </div>
            <div
              className="skills_box_card"
              data-aos="slide-left"
              data-aos-duration="850"
            >
              <div className="skills_box_card_img">
                <img src={ai} alt="ai" />
              </div>
              <div className="skills_box_card_title">Illustrator</div>
            </div>
            <div
              className="skills_box_card"
              data-aos="slide-left"
              data-aos-duration="800"
            >
              <div className="skills_box_card_img">
                <img src={adobepremiere} alt="adobepremiere" />
              </div>
              <div className="skills_box_card_title">Premiere pro</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
