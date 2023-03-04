import React from "react";
import "./components.css";

function SidebarOutlet({ top, body }) {
  return (
    <div className="sidebaroutlet_cnt">
      <div className="sboctop">{top}</div>
      <div className="sbocbottom">{body}</div>
    </div>
  );
}

export default SidebarOutlet;
