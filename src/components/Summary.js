import React from "react";
import "../styles/Summary.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import resume from "../assets/files/SUBRAMANIAN.pdf";
import "aos/dist/aos.css";

export default function Summary() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Checkout my Github{" "}
    </Tooltip>
  );
  return (
    <div className="Summary_page" id="Summary">
      <div className="Summary_page_layout">
        <div className="Summary_page_layout_left"></div>
        <div className="Summary_page_layout_right">
          <div
            className="Summary_page_layout_right_top"
            data-aos="slide-right"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            Summary
          </div>
          <div
            className="Summary_page_layout_right_bottom"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            Proficient in Web Dev technologies, with entry-level experience.
            Front-end Developer who is passionate in creating Open-source
            projects. Intermediate in Python programming, and have a passion for
            a Data Scientist. My open-source projects are under{" "}
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 100, hide: 400 }}
              overlay={renderTooltip}
            >
              <span>
                <a
                  href="https://github.com/subramanian3600"
                  target="_blank"
                  rel="noreferrer"
                >
                  'github/subramanian3600'
                </a>
              </span>
            </OverlayTrigger>
            <div className="Summary_page_layout_right_bottom_button">
              <a href={resume} download>
                <button>Download CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
