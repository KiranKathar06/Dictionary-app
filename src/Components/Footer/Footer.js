import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#301934",
        textAlign: "center",
        color: "#fff",
        position: "fixed",
        padding: "10px 10px 0px 10px",
        bottom: "0",
        width: "100%",
        height: "40px",
      }}
    >
      &copy; <em id="date"></em>KDictionay
    </div>
  );
};

export default Footer;
