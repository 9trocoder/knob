import React from "react";

function SocialAuth({ icon, name }) {
  return (
    <div className="social_cnt">
      <div className="socialleft">{icon}</div>
      <div className="socialright">
        <p>{name}</p>
      </div>
    </div>
  );
}

export default SocialAuth;
