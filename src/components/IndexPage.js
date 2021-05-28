import React from "react";
import "../styles/IndexPage.css";

export default function IndexPage() {
  return (
    <div className="Index_page">
      <div className="Index_page_layout">
        <div className="Index_page_layout_left">
          <div className="Index_page_layout_left_top">
            <div className="hiim">Hi I'm</div>
            <div className="my_name">Subramanian</div>
          </div>
          <div className="Index_page_layout_left_bottom">
            <div className="title">React web Developer</div>
            <div className="country">
              from<span>India</span>
            </div>
            <div className="Index_page_layout_left_bottom_button">
              {" "}
              <a href="#Connect">
                <button>Connect</button>
              </a>
            </div>
          </div>
        </div>
        <div className="Index_page_layout_right"></div>
      </div>
    </div>
  );
}
