import React from "react";
import "../styles/Connect.css";
import insta from "../assets/images/instagram.svg";
import linkedin from "../assets/images/linkedin-alt.svg";
import watsapp from "../assets/images/whatsapp.svg";
import at from "../assets/images/at.svg";

export default function Connect() {
  return (
    <div className="Connect_page" id="Connect">
      <div className="Connect_page_layout">
        <div className="Connect_page_layout_top">Connect</div>
        <div className="Connect_page_layout_bottom">
          <div className="Connect_profile_box" data-aos="slide-left">
            <div className="Connect_profile_title">Linkedin</div>
            <div className="connect_profile_image">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/svsubramanian3600/"
              >
                <input type="image" src={linkedin} alt={linkedin} />
              </a>
            </div>
          </div>
          <div className="Connect_profile_box" data-aos="slide-right">
            <div className="Connect_profile_title">WhatsApp</div>
            <div className="connect_profile_image">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://api.whatsapp.com/send?phone=919500594170"
              >
                <input type="image" src={watsapp} alt={watsapp} />
              </a>
            </div>
          </div>
          <div className="Connect_profile_box" data-aos="slide-left">
            <div className="Connect_profile_title">Mail</div>
            <div className="connect_profile_image">
              <a
                rel="noreferrer"
                href="mailto:svsubramanian3600@gmail.com"
                target="_blank"
              >
                <input type="image" src={at} alt={at} />
              </a>
            </div>
          </div>
          <div className="Connect_profile_box" data-aos="slide-right">
            <div className="Connect_profile_title">Instagram</div>
            <div className="connect_profile_image">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.instagram.com/subramanian_s_v/"
              >
                <input type="image" src={insta} alt={insta} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
