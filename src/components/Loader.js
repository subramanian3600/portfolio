import React from "react";
import "../styles/Loader.css";

export default function Loader() {
  return (
    <div className="Loader_page">
      <div className="rendering_cmd">Portfolio is Rendering...</div>
      <div className="loader">
        <div className="load_1"></div>
        <div className="load_2"></div>
      </div>
    </div>
  );
}
