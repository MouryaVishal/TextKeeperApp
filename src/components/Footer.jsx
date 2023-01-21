import React from "react";

function Footer() {
  const currDate = new Date();
  const currYear = currDate.getFullYear();
  return (
    <footer>
      <p>Copywrite ⓒ{currYear}</p>
    </footer>
  );
}
export default Footer;
