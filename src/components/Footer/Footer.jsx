import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import footerBackground from "../../assets/footer-background.jpg";

const Footer = () => {
  const footerLinks = [
    {
      title: "Home",
      link: "/#",
    },
    {
      title: "About",
      link: "/#about",
    },
    {
      title: "Contact",
      link: "/#contact",
    },
    {
      title: "Blog",
      link: "/#blog",
    },
  ];

  const bgImageStyles = {
    backgroundImage: `url(${footerBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    minHeight: "400px",
    width: "100%",
  };

  return (
    <div>
      <div className="container"></div>
    </div>
  );
};

export default Footer;
