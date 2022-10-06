import React from "react";

// SIMPLE MESSAGE ALERT WHICH YOU CAN CLOSE BY CLICKING ON THE CLOSE ICON
export const Messagebox = (props) => {
  return (
    <div>
      <div className="alert" id="alert">
        <span className="closebtn" id="close" onClick={props.onClose}>
          &times;
        </span>
        <strong>Welcome</strong> Shop and get flat 30% discount on any Purchase
      </div>
    </div>
  );
};
