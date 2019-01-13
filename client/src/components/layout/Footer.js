import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      copyright &copy; {new Date().getFullYear()} DevConnector
    </footer>
  );
}

export default Footer;
