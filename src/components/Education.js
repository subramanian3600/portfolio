import React from "react";
import "../styles/Education.css";
import educationimg from "../assets/images/education_cup.jpg";

export default function Education() {
  return (
    <div className="Education_page" id="Education">
      <div className="Education_page_layout">
        <div className="Education_page_layout_left">
          <div
            className="Education_page_layout_top"
            data-aos="slide-left"
            data-aos-duration="1000"
          >
            Education
          </div>
          <div
            className="Education_page_layout_bottom"
            data-aos="flip-up"
            data-aos-duration="1000"
          >
            <div className="Education_page_layout_bottom_year">
              <div className="education_detail">
                <span className="education_year">2017-2021</span>
                <span className="education_school">
                  Rajalakshmi Institute of Technology
                </span>
                <div className="education_degree">
                  <span>Bachelor of Engineering (Electronics)</span>
                  <div>
                    <span>7.6 Cgpa</span>
                  </div>
                </div>
              </div>
              <div className="education_detail">
                <span className="education_year">2016-2017</span>
                <span className="education_school">
                  Balakrishna Matric Higher Sec School
                </span>
                <div className="education_degree">
                  <span>HSC</span>
                  <div>
                    <span>94.91 %</span>
                  </div>
                </div>
              </div>
              <div className="education_detail">
                <span className="education_year">2014-2015</span>
                <span className="education_school">
                  Rajas Matric Higher Sec School
                </span>
                <div className="education_degree">
                  <span>SSLC</span>
                  <div>
                    <span>97 %</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Education_page_layout_right">
          <img src={educationimg} alt="educationimg" />{" "}
        </div>
      </div>
    </div>
  );
}
