import React, { useState } from "react";
import "../styles/MyWorks.css";
import Works from "./MyWorksdetails";
import code from "../assets/images/brackets-curly.svg";
import demo from "../assets/images/eye.svg";

export default function MyWorks() {
  const [active, setactive] = useState("");
  const [workList, setworkList] = useState(Works);

  const filterablelist = (categorylist) => {
    const updatedlist = Works.filter((work) => {
      return work.category === categorylist;
    });

    setworkList(updatedlist);
  };

  const workdisplay = workList.map((item) => {
    return (
      <>
        <div
          key={item.id}
          className="Myworks_page_layout_bottom_card"
          data-aos="flip-right"
        >
          <div className="work_card_title">{item.title}</div>
          <div className="work_card_image">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="work_card_link_demo">
            <div className="work_card_link">
              <a href={item.link}>
                Code <img src={code} alt={code} />
              </a>
            </div>
            <div className="work_card_demo">
              <a href={item.demo}>
                demo <img src={demo} alt={demo} />
              </a>
            </div>
          </div>
        </div>
        <div></div>
      </>
    );
  });

  function isActive(value) {
    return value === active ? "active" : "default_button";
  }
  return (
    <div className="Myworks_page" id="MyWorks">
      <div className="Myworks_page_layout">
        <div className="Myworks_page_layout_top">My Works</div>
        <div className="Myworks_page_layout_bottom">
          <div className="Myworks_page_layout_bottom_filter">
            <button
              className={isActive("")}
              onClick={() => {
                setactive("");
                setworkList(Works);
              }}
            >
              All
            </button>
            <button
              className={isActive("web_app")}
              onClick={() => {
                setactive("web_app");
                filterablelist("web_app");
              }}
            >
              Web Apps
            </button>
            <button
              className={isActive("design")}
              onClick={() => {
                setactive("design");
                filterablelist("design");
              }}
            >
              Designs
            </button>

            <button
              className={isActive("portfolio")}
              onClick={() => {
                setactive("portfolio");
                filterablelist("portfolio");
              }}
            >
              portfolio
            </button>
          </div>
          <div>{workdisplay}</div>
        </div>
      </div>
    </div>
  );
}
