import React from "react";
import "../styles/WhatIDo.css";
import web from "../assets/images/apps.svg";
import adobe from "../assets/images/adobe.svg";
import megaphone from "../assets/images/megaphone.svg";
import editing from "../assets/images/editing.svg";

export default function WhatIDo() {
  return (
    <div className="WhatIDo_page" id="WhatIDO">
      <div className="WhatIDo_page_layout">
        <div className="WhatIDo_page_layout_top" data-aos="slide-right">
          What I Do
        </div>
        <div className="WhatIDo_page_layout_bottom">
          <div
            className="do_card"
            data-aos="flip-right"
            data-aos-duration="800"
          >
            <div className="do_logo">
              <img src={web} alt={web} />
            </div>
            <div className="do_title">Web Development</div>
            <div className="do_content">
              Well paced Web developer with  Intermidiate level Experience.
            </div>
          </div>
          <div
            className="do_card"
            data-aos="flip-right"
            data-aos-duration="850"
          >
            <div className="do_logo">
              <img src={adobe} alt="adobe" />
            </div>
            <div className="do_title">Graphics</div>
            <div className="do_content">
              Design vectors icons, vector images and brochure and more designs with illustrator.
            </div>
          </div>
          <div
            className="do_card"
            data-aos="flip-right"
            data-aos-duration="900"
          >
            <div className="do_logo">
              <img src={megaphone} alt="megaphone" />
            </div>
            <div className="do_title">Social Media Marketing</div>
            <div className="do_content">
              Beginner in Social media marketing.
            </div>
          </div>
          <div
            className="do_card"
            data-aos="flip-right"
            data-aos-duration="950"
          >
            <div className="do_logo">
              <img src={editing} alt="editing" />
            </div>
            <div className="do_title">Video Editing</div>
            <div className="do_content">
              A hobby editor in videography !
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
